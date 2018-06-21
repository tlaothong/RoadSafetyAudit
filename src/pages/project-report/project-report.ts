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
  }

  public IsChecked(value: any): any {
    if (value == "yes") return true;
    else if (value == "no") return false;
    else return null;
  }

  public GetList(value: any): Array<any> {

    var result: Array<any> = new Array<any>();
    value.items.forEach(element_1 => {
      var hasMainTitle = true;
      element_1.items.forEach(element_2 => {

        if (element_2.items != null) {

          var hasSubTitle = true;
          element_2.items.forEach(element_3 => {

            if (hasMainTitle) {
              let rowTitle = { title: element_1.name, subTitle: element_2.name };
              result.push(rowTitle)
              hasMainTitle = !hasMainTitle;
              hasSubTitle = !hasSubTitle;
            }
            else if (hasSubTitle) {
              let rowTitle = { subTitle: element_2.name };
              result.push(rowTitle)
              hasSubTitle = !hasSubTitle;
            }
            result.push(element_3);

          });
        }
        else {
          if (hasMainTitle) {
            let rowTitle = { title: element_1.name };
            result.push(rowTitle)
            hasMainTitle = !hasMainTitle;
          }
          result.push(element_2);
        }

      });
    });
    return result;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectReportPage');
  }

}
