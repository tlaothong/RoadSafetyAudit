import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';

/*
  Generated class for the ProjectRepoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectRepoServiceProvider {

  private projects: Project[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello ProjectRepoServiceProvider Provider');
  }

  public listProjects() {
    return this.projects;
  }

  private id = 0;
  public createProject(prjName: string, startN: number, startE: number, endN: number, endE: number) {
    var prj = new Project(++this.id, prjName, startN, startE, endN, endE);
    this.projects.push(prj);

    return prj;
  }

}
