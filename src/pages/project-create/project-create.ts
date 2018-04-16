import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoadsAndOfficesProvider } from '../../providers/roads-and-offices/roads-and-offices';
import { ProjectRepoServiceProvider } from '../../providers/project-repo-service/project-repo-service';
import { CheckListsProvider } from '../../providers/check-lists/check-lists';

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
	public checkListCode: string;
	public officesList;
	public branchList;
	public roadList;
	public checkList = [];

	public stage: number;
	public selectedRoad;

	public createdProject;

	constructor(public navCtrl: NavController, public navParams: NavParams, private offices: RoadsAndOfficesProvider, private projectRepo: ProjectRepoServiceProvider, private chkList: CheckListsProvider) {
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
		this.checkList = this.chkList.listCheckLists(this.stage);
	}

	public checkListChanged(evt) {
	}

	public doCreateProject() {
		this.createdProject = this.projectRepo.createProject(this.selectedRoad.road,
			this.checkListCode,
			this.selectedRoad.startN, this.selectedRoad.startE, this.selectedRoad.endN, this.selectedRoad.endE);
		this.navCtrl.pop();
		this.navCtrl.push('ProjectWizardPage', this.createdProject);
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ProjectCreatePage');
	}

}
