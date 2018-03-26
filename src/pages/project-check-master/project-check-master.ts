import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectCheckMasterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-check-master',
  templateUrl: 'project-check-master.html',
})
export class ProjectCheckMasterPage {

  @Input() project;

  public l0page = 'ProjectCheckListL0Page';
  public byIT = "ตรวจสอบจากระบบสารสนเทศ";
  public byFields = "ตรวจสอบจากงานภาคสนาม";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data) {
      this.project = this.navParams.data;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCheckMasterPage');
  }

}
