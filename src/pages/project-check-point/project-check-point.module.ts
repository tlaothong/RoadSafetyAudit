import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectCheckPointPage } from './project-check-point';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectCheckPointPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProjectCheckPointPage),
  ],
})
export class ProjectCheckPointPageModule {}
