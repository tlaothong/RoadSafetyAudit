import { Component, Input } from '@angular/core';
import { AuditorProvider } from '../../providers/auditor/auditor';

/**
 * Generated class for the ProjectMembersComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'project-members',
	templateUrl: 'project-members.html'
})
export class ProjectMembersComponent {

	@Input() project;

	public levels = [
		"RSI.",
		"RSA."
	];

	public level;
	public ncode;

	constructor(private audit: AuditorProvider) {
		console.log('Hello ProjectMembersComponent Component');
	}

	public addMember() {
		var aud = this.audit.getAuditor(this.level + this.ncode);
		if (!this.project.members) {
			this.project.members = [];
		}
		this.project.members.push(aud);
	}

}
