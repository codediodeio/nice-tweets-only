import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TweetFormComponent } from './tweet-form/tweet-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, IonicModule.forRoot()],
  declarations: [TweetFormComponent],
  entryComponents: []
})
export class ComponentsModule {}
