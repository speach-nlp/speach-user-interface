import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeechToTextComponent } from './components/speech-to-text/speech-to-text.component';
import { TextToSpeechComponent } from './components/text-to-speech/text-to-speech.component';
import { NaturalLanguageProcessingComponent } from './components/natural-language-processing/natural-language-processing.component';
import { ModelTrainingComponent } from './components/model-training/model-training.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './components/loader/loader.component'

const routes: Routes = [
  {
    path: '', component: NaturalLanguageProcessingComponent
  },
  {
    path: 'speech-to-text', component: SpeechToTextComponent
  },
  {
    path: 'text-to-speech', component: TextToSpeechComponent
  },
  {
    path: 'nlp', component: NaturalLanguageProcessingComponent
  },
  {
    path: 'model-training', component: ModelTrainingComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
