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

  public project: any;
  public mainStage: any;
  public subStage: any;

  public ReportIt: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.project = this.navParams.data;

    // Convert number of stage into Text
    var stageNumber = this.project.checkListCode;
    var stage = stageNumber.substring(0, 1);
    var subStage = stageNumber.substring(1, 2);

    // Convert to MainStage
    if (stage == "1") this.mainStage = "ออกแบบ";
    else if (stage == "2") this.mainStage = "ระหว่างการก่อสร้าง";
    else if (stage == "3") this.mainStage = "ถนนที่เปิดให้บริการแล้ว";

    // Convert to SubStage
    if (stageNumber == "21") this.subStage = "ระหว่างก่อสร้าง";
    else if (subStage == "1") this.subStage = "ทางตรง";
    else if (subStage == "2") this.subStage = "ทางโค้ง";
    else if (subStage == "3") this.subStage = "ทางแยก";
    else if (subStage == "4") this.subStage = "ทางชุมชน";

    this.ReportIt = this.project.checkListIT.items;
  }

  public IsChecked(value: any): boolean {
    if (value == "yes") return true;
    else return false;
  }

  public GetList(value: any): Array<any> {

    var level_1: any = value.items;
    var level_2 = level_1.map(it => it.items);

    var level_3: Array<any> = new Array<any>();
    level_2.forEach(element_1 => {
      element_1.forEach(element_2 => {

        element_2.items.forEach(element_3 => {
          level_3.push(element_3);
        })

      });
    });

    var result = level_3.map(it => it);
    return result;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectReportPage');
  }

}
