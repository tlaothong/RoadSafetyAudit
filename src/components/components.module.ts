import { NgModule } from '@angular/core';
import { ProjectMembersComponent } from './project-members/project-members';
import { ProjectCheckPointsComponent } from './project-check-points/project-check-points';
@NgModule({
	declarations: [ProjectMembersComponent,
    ProjectCheckPointsComponent],
	imports: [],
	exports: [ProjectMembersComponent,
    ProjectCheckPointsComponent]
})
export class ComponentsModule {}
