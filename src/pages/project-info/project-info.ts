import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-info',
  templateUrl: 'project-info.html',
})
export class ProjectInfoPage {

  public project;
  public checkptpage = "ProjectCheckPointPage";
  public memberpage = "ProjectMembersPage";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectInfoPage');
  }

}
