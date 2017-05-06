import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HoundService {
  accessKey: string = '92ac03d4-410f-41c0-be65-5d2c527696e2';
  accessObject: any;
  readonly baseSearchUrl = 'https://api.mediahound.com/1.2/search/all/';
  readonly baseMediaUrl = 'https://api.mediahound.com/1.2/graph/media/';
  readonly baseAuthUrl = 'https://api.mediahound.com/1.2/security/oauth/token';
  readonly movieType = '&types=movie';
  readonly tvType = '&types=showseries';

  // private headers = new Headers({
  //   'Authorization': 'Basic bWhjbHRfTW92aWVTZWFyY2g6U0RXS2tyM2hDbmdTdFgyUkxOY1NtcjZVMDJ6MGZzSFZSelQ2WU4wOFIzMjFqWmxh'
  // });


  constructor(public http: Http) {

  }
  
  // authGrab() {
  //   return this.http.post(`${this.baseAuthUrl}${'?grant_type=client_credentials&client_id=mhclt_MovieSearch&client_secret=SDWKkr3hCngStX2RLNcSmr6U02z0fsHVRzT6YN08R321jZla'}`, {headers: this.headers})
  //     .map(res => res.json());
  // }

  // accessGrab(){
  //   this.accessObject = this.authGrab();
  //   console.log(this.accessObject);
  //   this.accessKey = this.accessObject.access_token;
  //   console.log(this.accessKey);
  // }

  mediaSearch(movieTitle: string){
    return this.http.get(`${this.baseSearchUrl}${movieTitle}${'?access_token='}${this.accessKey}${'&pageSize=10'}${this.movieType}`)
      .map(res => res.json());
  }

  mediaGrab(mediaId){
    return this.http.get(`${this.baseMediaUrl}${mediaId}${'?access_token='}${this.accessKey}${'&view=extended'}`)
      .map(res => res.json());
  }

  sourceGrab(mediaId) {
    return this.http.get(`${this.baseMediaUrl}${mediaId}${'/sources?access_token='}${this.accessKey}${'&pageSize=20'}`)
      .map(res => res.json());
  }

  relatedGrab(mediaId) {
    return this.http.get(`${this.baseMediaUrl}${mediaId}${'/related?access_token='}${this.accessKey}${'&view=extended&pageSize=30'}`)
    .map(res => res.json());
  }

}