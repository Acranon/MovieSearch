import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HoundService } from '../../providers/hound-service';
import { TmdbService } from '../../providers/tmdb-service';
import { Storage } from '@ionic/storage';

import { MediaPage } from '../media-page/media-page';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search implements OnInit {

  searchInput: string;
  searchData: any;
  mediaInfo: any;
  loading: any;
  searchHistory: string[]=['Star Trek', 'Star Wars'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public hound: HoundService, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public tmdb: TmdbService, storage: Storage) {
    this.searchInput = '';
  }

  ngOnInit(){

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
