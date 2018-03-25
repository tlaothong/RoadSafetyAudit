import { NgModule } from '@angular/core';
import { ProjectMembersComponent } from './project-members/project-members';
import { ProjectCheckPointsComponent } from './project-check-points/project-check-points';
import { IonicPageModule } from 'ionic-angular';
@NgModule({
	declarations: [ProjectMembersComponent,
    ProjectCheckPointsComponent],
	imports: [
		IonicPageModule
	],
	exports: [ProjectMembersComponent,
    ProjectCheckPointsComponent]
})
export class ComponentsModule {}
