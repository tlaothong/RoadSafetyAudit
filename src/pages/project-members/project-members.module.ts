import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectMembersPage } from './project-members';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectMembersPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProjectMembersPage),
  ],
})
export class ProjectMembersPageModule {}
