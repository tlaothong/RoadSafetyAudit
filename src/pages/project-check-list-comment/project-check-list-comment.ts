import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectCheckListCommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-check-list-comment',
  templateUrl: 'project-check-list-comment.html',
})
export class ProjectCheckListCommentPage {

  public checkTitle;
  public assetRisks;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkTitle = this.navParams.data.name;
  }

  public saveComments() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCheckListCommentPage');
  }

}
