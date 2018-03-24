import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello ProjectMembersComponent Component');
    this.text = 'Hello World';
  }

}
