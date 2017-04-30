import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MediaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-media-page',
  templateUrl: 'media-page.html',
})
export class MediaPage {
  selectedMedia: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedMedia = navParams.get('mediaInfo2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }
  test(){
    console.log(this.selectedMedia);
  }

}
