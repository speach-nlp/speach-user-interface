import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';

declare const annyang: any;

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.scss']
})
export class SpeechRecognitionComponent implements OnInit {

  voiceActiveSectionDisabled = true;
  voiceActiveSectionError = false;
  voiceActiveSectionSuccess = false;
  voiceActiveSectionListening = false;
  voiceText: any;

  @Output() textDetected = new EventEmitter<string>();

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  toggleMic(): void {
    this.voiceActiveSectionDisabled = !this.voiceActiveSectionDisabled;
    if (this.voiceActiveSectionDisabled) {
      this.closeVoiceRecognition();
    } else {
      this.startVoiceRecognition();
    }
  }

  initializeVoiceRecognitionCallback(): void {
    annyang.addCallback('error', (err: any) => {
      if (err.error === 'network') {
        this.voiceText = 'Internet is require';
        annyang.abort();
        this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
      } else if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
        annyang.abort();
      }
    });

    annyang.addCallback('soundstart', (res: any) => {
      this.ngZone.run(() => this.voiceActiveSectionListening = true);
    });

    annyang.addCallback('end', () => {
      if (this.voiceText === undefined) {
        this.ngZone.run(() => this.voiceActiveSectionError = true);
      }
    });

    annyang.addCallback('result', (userSaid: any) => {
      this.ngZone.run(() => this.voiceActiveSectionError = false);
      this.voiceText = userSaid[0];
      this.textDetected.emit(this.voiceText);
      userSaid = [];
      this.ngZone.run(() => this.voiceActiveSectionListening = false);
      this.ngZone.run(() => this.voiceActiveSectionSuccess = true);
    });
  }

  startVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = false;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceText = undefined;

    if (annyang) {
      const commands = {
        'demo-annyang': () => { }
      };

      annyang.addCommands(commands);

      this.initializeVoiceRecognitionCallback();

      annyang.start({ autoRestart: true, continuous: false });
    }
  }

  closeVoiceRecognition(): void {
    this.voiceActiveSectionDisabled = true;
    this.voiceActiveSectionError = false;
    this.voiceActiveSectionSuccess = false;
    this.voiceActiveSectionListening = false;
    this.voiceText = undefined;
    if (annyang) {
      annyang.abort();
    }
  }
}
