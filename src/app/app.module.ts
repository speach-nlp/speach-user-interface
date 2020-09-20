import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { NaturalLanguageProcessingComponent } from './components/natural-language-processing/natural-language-processing.component';
import { ModelTrainingComponent } from './components/model-training/model-training.component';
import { UploadAudioComponent } from './components/upload-audio/upload-audio.component';
import { LiveStreamAudioComponent } from './components/live-stream-audio/live-stream-audio.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResponsiveColsDirective } from './directives/responsive-cols.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { SpeechRecognitionComponent } from './components/speech-recognition/speech-recognition.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    HomeComponent,
    SideNavComponent,
    SpeechToTextComponent,
    TextToSpeechComponent,
    NaturalLanguageProcessingComponent,
    ModelTrainingComponent,
    UploadAudioComponent,
    LiveStreamAudioComponent,
    FooterComponent,
    NotFoundComponent,
    ResponsiveColsDirective,
    LoaderComponent,
    SpeechRecognitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
