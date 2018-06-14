import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-report',
  templateUrl: 'project-report.html',
})
export class ProjectReportPage {

  public project;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectReportPage');
  }

}
