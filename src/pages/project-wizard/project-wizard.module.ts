import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProjectWizardPage } from './project-wizard';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProjectWizardPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProjectWizardPage),
  ],
})
export class ProjectWizardPageModule {}
