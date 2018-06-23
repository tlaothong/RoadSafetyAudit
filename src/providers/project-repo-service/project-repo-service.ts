import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../models/Project';
import { CheckListsProvider } from '../check-lists/check-lists';

/*
  Generated class for the ProjectRepoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectRepoServiceProvider {

  private projects: Project[] = [];

  constructor(public http: HttpClient, private chkList: CheckListsProvider) {
    console.log('Hello ProjectRepoServiceProvider Provider');
  }

  public listProjects() {
    return this.projects;
  }

  private id = 0;
  public createProject(prjName: string, roadName: string, checkListCode: string, startN: number, startE: number, endN: number, endE: number) {
    var prj = new Project(++this.id, prjName, roadName, checkListCode, startN, startE, endN, endE);
    prj.checkListIT = this.chkList.getCheckList(checkListCode);
    prj.checkListIT.code = "it";
    prj.checkListField = this.chkList.getCheckList(checkListCode);
    prj.checkListField.code = "field";
    this.projects.push(prj);

    return prj;
  }

}
