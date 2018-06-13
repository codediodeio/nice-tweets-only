import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TweetFormComponent } from './tweet-form/tweet-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  exports: [TweetFormComponent],
  declarations: [TweetFormComponent],
  entryComponents: []
})
export class ComponentsModule {}
