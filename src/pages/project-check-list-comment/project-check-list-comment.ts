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
  public freq;
  public sever;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkTitle = this.navParams.data.name;
  }

  public saveComments() {
    this.navCtrl.pop();
  }

  public changeFreq(e) {
    var f = 5 - e.value;
    this.freq = f;
  }
  public changeSeverity(e) {
    var s = 5 - e.value;
    this.sever = s;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCheckListCommentPage');
  }

}
