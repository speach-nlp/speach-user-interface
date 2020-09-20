import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Data } from '../../services/data';
import { Message } from '../../models/message';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-natural-language-processing',
  templateUrl: './natural-language-processing.component.html',
  styleUrls: ['./natural-language-processing.component.scss']
})
export class NaturalLanguageProcessingComponent implements OnInit {

  constructor(private service: NoteService) { }
  messages: Message[];
  loading = true;
  micOn = true;
  question: string;
  answer: string;
  msgLoading = false;
  @ViewChild('scrollId') private myScrollContainer: ElementRef;

  ngOnInit(): void {
    this.messages = [];
    setTimeout(() => {
      console.log(this.messages);
      this.loading = false;
      this.updateScroll();
    }, 2000);
  }

  toggleMic(): void {
    this.micOn = !this.micOn;
  }

  submitRecognisecQuestion(event: string): void {
    this.question = event;
    this.submitQuestion();
  }

  submitQuestion(): void {
    setTimeout(() => {
      this.updateScroll();
    }, 100);
    if (this.question === undefined || this.question === '') {
      return;
    }
    const uniqueId = 'randomId' + this.messages.length + 1;
    this.messages.push({
      id: uniqueId,
      question: this.question,
      loading: true
    });
    this.msgLoading = true;
    setTimeout(() => {
      this.messages.map(item => {
        if (item.id === uniqueId) {
          item.answer = item.question;
          item.loading = false;
        }
      });
      this.msgLoading = false;
      this.updateScroll();
    }, 2000);
    this.question = undefined;
  }

  updateScroll(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }



}
