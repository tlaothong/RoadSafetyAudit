import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

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
  public byIT = "it"; //"ตรวจสอบจากระบบสารสนเทศ";
  public byFields = "field"; //"ตรวจสอบจากงานภาคสนาม";

  constructor(public navCtrl: NavController, public navParams: NavParams, private appCtrl: App) {
    if (this.navParams.data) {
      this.project = this.navParams.data;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectCheckMasterPage');
  }

  public goPage(ctype: string) {
    this.appCtrl.getRootNav().push(this.l0page, ctype == 'it'? this.project.checkListIT: this.project.checkListField);
  }

}
