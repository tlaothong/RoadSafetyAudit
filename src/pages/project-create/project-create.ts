import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoadsAndOfficesProvider } from '../../providers/roads-and-offices/roads-and-offices';
import { ProjectRepoServiceProvider } from '../../providers/project-repo-service/project-repo-service';

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

	public regionId
	public officeId;
	public branchId;
	public officesList;
	public branchList;
	public roadList;
	public selectedRoad;

	constructor(public navCtrl: NavController, public navParams: NavParams, private offices: RoadsAndOfficesProvider, private projectRepo: ProjectRepoServiceProvider) {
	}

	public regionChanged(evt) {
		console.log(JSON.stringify(evt));
		this.officesList = this.offices.offices.filter(it => it.regionId == this.regionId);
	}

	public officeChanged(evt) {
		this.branchList = this.offices.branches.filter(it => it.officeId == this.officeId);
	}

	public branchChanged(evt) {
		this.roadList = this.offices.roads.filter(it => this.branchId == 1);
	}

	public roadChanged(evt) {
	}

	public doCreateProject() {
		this.projectRepo.createProject(this.selectedRoad.road);
		this.navCtrl.pop();
		this.navCtrl.push('ProjectWizardPage');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProjectCreatePage');
	}

}
