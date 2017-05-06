import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HoundService } from '../../providers/hound-service';
import { TmdbService } from '../../providers/tmdb-service';

import { MediaPage } from '../media-page/media-page';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {

  searchInput: string;
  searchData: any;
  mediaInfo: any;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public hound: HoundService, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public tmdb: TmdbService) {
  }

  mediaSearch() {
    this.presentLoading();
    this.hound.mediaSearch(this.searchInput).subscribe(res =>{
      this.searchData = res.content
      this.loading.dismiss();
    },error => {
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Failed to load Content.',
        buttons: ['OK']
      });
      alert.present();
    });
  }

  // movieGrab(mediaId) {
  //   return this.hound.mediaGrab(mediaId).subscribe(res => this.mediaInfo = res)
  // }

  mediaTapped(event, media) {
    this.hound.mediaGrab(media.object.metadata.mhid).subscribe(res => {
      this.navCtrl.push(MediaPage, { res: res });
    })
  }
  presentLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Please wait...'
    });

    this.loading.present();
  }
}
