import { Component } from '@angular/core';

/**
 * Generated class for the ProjectCheckPointsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'project-check-points',
  templateUrl: 'project-check-points.html'
})
export class ProjectCheckPointsComponent {

  text: string;

  constructor() {
    console.log('Hello ProjectCheckPointsComponent Component');
    this.text = 'Hello World';
  }

}
