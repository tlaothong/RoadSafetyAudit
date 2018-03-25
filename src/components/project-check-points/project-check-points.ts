import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output() stepDone: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    console.log('Hello ProjectCheckPointsComponent Component');
  }

  public saveCheckPoints() {
    this.stepDone.emit(true);
  }

}
