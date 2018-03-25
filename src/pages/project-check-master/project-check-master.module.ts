import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectCheckMasterPage } from './project-check-master';

@NgModule({
  declarations: [
    ProjectCheckMasterPage,
  ],
  imports: [
    IonicPageModule.forChild(ProjectCheckMasterPage),
  ],
})
export class ProjectCheckMasterPageModule {}
