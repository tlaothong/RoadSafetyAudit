import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckListsProvider } from '../../providers/check-lists/check-lists';

/**
 * Generated class for the ProjectCheckListL0Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-check-list-l0',
  templateUrl: 'project-check-list-l0.html',
})
export class ProjectCheckListL0Page {

  public checkLists;
  public l1page = 'ProjectCheckListL1Page';
  public checkByTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chkList: CheckListsProvider) {
    this.checkByTitle = this.navParams.data;
  }

  public goL1Page(l0) {
    this.navCtrl.push(this.l1page, { l0: l0, checkBy: this.checkByTitle });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCheckListL0Page');

    this.checkLists = this.chkList.getCheckList('123v1');
  }

}
