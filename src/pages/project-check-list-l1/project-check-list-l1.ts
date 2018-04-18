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
  public checkLists;
  public l0;
  public commentpage = "ProjectCheckListCommentPage";

  public segmentTemp = "";
  public segmentTemp2 = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkByTitle = this.navParams.data.checkBy;
    this.checkLists = this.navParams.data.l0.items;
    this.l0 = this.navParams.data.l0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCheckListL1Page');
  }

}
