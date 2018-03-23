import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyProjectPage } from './my-project';

@NgModule({
  declarations: [
    MyProjectPage,
  ],
  imports: [
    IonicPageModule.forChild(MyProjectPage),
  ],
})
export class MyProjectPageModule {}
