import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HoundService } from '../../providers/hound-service';

import { MediaPage } from '../media-page/media-page'

/**
 * Generated class for the Search page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class Search {

  searchInput: string;
  searchData: any;
  mediaInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public hound: HoundService) {
  }

  mediaSearch() {
    return this.hound.mediaSearch(this.searchInput).subscribe(res => this.searchData = res.content)
  }

  movieGrab(mediaId) {
    return this.hound.mediaGrab(mediaId).subscribe(res => this.mediaInfo = res)
  }

  mediaTapped(event, media) {
    this.movieGrab(media.object.metadata.mhid);
    let mediaInfo2 = this.mediaInfo;
    return this.navCtrl.push(MediaPage, { mediaInfo2: mediaInfo2 });
  }

  test(){
    console.log(this.mediaInfo);
  }

}
