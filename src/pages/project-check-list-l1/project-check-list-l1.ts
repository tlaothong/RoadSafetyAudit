import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectCheckListL1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-check-list-l1',
  templateUrl: 'project-check-list-l1.html',
})
export class ProjectCheckListL1Page {

  public checkByTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkByTitle = this.navParams.data.checkBy;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCheckListL1Page');
  }

}