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
	public fText;
	public sever;
	public sText;
	public exposure;
	public xValue;
	public xText;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.checkTitle = this.navParams.data.name;
	}

	public saveComments() {
		this.navCtrl.pop();
	}

	public changeFreq(e) {
		var f = 5 - e.value;
		this.freq = f;
		switch (f) {
			case 1:
				this.fText = "น้อยกว่า 1 ครั้งในสิบปี";
				break;
			case 2:
				this.fText = "มากกว่า 1 ครั้งใน 5-10 ปี";
				break;
			case 3:
				this.fText = "มากกว่าปีละครั้ง";
				break;
			case 4:
			default:
				this.fText = "มากกว่าสัปดาห์ละครั้ง";
				break;
		}
		this.showRisks();
	}
	public changeSeverity(e) {
		var s = 5 - e.value;
		this.sever = s;
		switch (s) {
			case 1:
				this.sText = "น้อยมาก";
				break;
			case 2:
				this.sText = "เล็กน้อย";
				break;
			case 3:
				this.sText = "รุนแรง";
				break;
			case 4:
			default:
				this.sText = "รุนแรงมาก";
				break;
		}
		this.showRisks();
	}

	private showRisks() {
		var r = this.freq + this.sever;
		this.exposure = r;
		if (r >= 6) {
			this.xText = "ยอมรับไม่ได้";
		} else if (r >= 5) {
			this.xText = "สูง";
		} else if (r >= 3) {
			this.xText = "ปานกลาง";
		} else {
			this.xText = "ต่ำ";
		}
		this.xValue = 9 - r;
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProjectCheckListCommentPage');
	}

}
