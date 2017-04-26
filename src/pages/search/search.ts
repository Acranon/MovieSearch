import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HoundService } from '../../providers/hound-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public hound: HoundService) {
  }

  movieSearch() {
    this.hound.movieSearch(this.searchInput).subscribe(res => this.searchData = res)
  }
  test(){
    this.hound.accessGrab();
  }

}
