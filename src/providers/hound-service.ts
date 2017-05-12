import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class HoundService {
  accessKey: string = '395e9a64-5b34-43ca-94ee-0b400b4af8ef';
  accessObject: any;
  readonly baseSearchUrl = 'https://api.mediahound.com/1.2/search/all/';
  readonly baseMediaUrl = 'https://api.mediahound.com/1.2/graph/media/';
  readonly movieType = '&types=movie&types=showseries';

  constructor(public http: Http) {

  }
  

  mediaSearch(movieTitle: string){
    return this.http.get(`${this.baseSearchUrl}${movieTitle}${'?access_token='}${this.accessKey}${'&pageSize=10'}${this.movieType}`)
      .map(res => res.json());
  }

  mediaGrab(mediaId){
    return this.http.get(`${this.baseMediaUrl}${mediaId}${'?access_token='}${this.accessKey}${'&view=full'}`)
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

  contributorsGrab(mediaId) {
    return this.http.get(`${this.baseMediaUrl}${mediaId}${'/contributors?access_token='}${this.accessKey}${'&view=extended&pageSize=10'}`)
      .map(res=> res.json());
  }

}