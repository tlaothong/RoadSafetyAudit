import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ProjectWizardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-wizard',
  templateUrl: 'project-wizard.html',
})
export class ProjectWizardPage {

  public showPrev = true;
  public showNext = true;

  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public next() {
    this.slides.slideNext();
  }

  public prev() {
    this.slides.slidePrev();
  }

  public checkPointsDone() {
    this.next();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectWizardPage');
  }

  ionViewWillEnter() {
    this.slides.update();

    this.showPrev = !this.slides.isBeginning();
    this.showNext = !this.slides.isEnd();
  }

  onSlideChangeStart(slider: Slides) {
    this.showPrev = !slider.isBeginning();
    this.showNext = !slider.isEnd();
  }

}
