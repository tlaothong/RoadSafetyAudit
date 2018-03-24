import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-project-create',
	templateUrl: 'project-create.html',
})
export class ProjectCreatePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	public doCreateProject() {
		this.navCtrl.pop();
		this.navCtrl.push('ProjectWizardPage');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProjectCreatePage');
	}

}
