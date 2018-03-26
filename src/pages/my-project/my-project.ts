import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectRepoServiceProvider } from '../../providers/project-repo-service/project-repo-service';

/**
 * Generated class for the MyProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-my-project',
	templateUrl: 'my-project.html',
})
export class MyProjectPage {

	public projects;
	public detailsPage = "ProjectDetailsPage";

	constructor(public navCtrl: NavController, public navParams: NavParams, private projectRepo: ProjectRepoServiceProvider) {
	}

	public newProject() {
		this.navCtrl.push('ProjectCreatePage');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad MyProjectPage');
		this.projects = this.projectRepo.listProjects();
	}

}
