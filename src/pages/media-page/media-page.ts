import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HoundService } from '../../providers/hound-service';
import { TmdbService } from '../../providers/tmdb-service';



@Component({
  selector: 'page-media-page',
  templateUrl: 'media-page.html',
})
export class MediaPage implements OnInit {
  selectedMedia: any;
  relatedMedia: any;
  sources: any;
  contributors: any;
  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public hound: HoundService, public tmdb: TmdbService) {
    this.selectedMedia = navParams.get('res');
  }

  relatedMediaSearch() {
    return this.hound.relatedGrab(this.selectedMedia.metadata.mhid).subscribe(res => this.relatedMedia = res.content)
  }

  sourceSearch() {
    return this.hound.sourceGrab(this.selectedMedia.metadata.mhid).subscribe(res => {
      this.sources = res.content;
    })
  }

  contributorsSearch() {
    return this.hound.contributorsGrab(this.selectedMedia.metadata.mhid).subscribe(res => {
      this.contributors = res.content;
    })
  }

  mediaTapped(media) {
    this.hound.mediaGrab(media.object.metadata.mhid).subscribe(res => {
      this.navCtrl.push(MediaPage, { res: res });
    })
  }

  ngOnInit() {
    this.relatedMediaSearch();
    this.sourceSearch();
    this.contributorsSearch();
  }

}
