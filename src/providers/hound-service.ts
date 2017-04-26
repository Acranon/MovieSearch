import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class HoundService {
  accessKey: any;
  accessObject: any;
  readonly baseUrl: 'https://api.mediahound.com/1.2/search/all/';
  readonly baseAuthUrl: 'https://api.mediahound.com/1.2/security/oauth/token';
  readonly movieType: '&types=movie';

  private headers = new Headers({
    'Authorization': 'Basic bWhjbHRfTW92aWVTZWFyY2g6U0RXS2tyM2hDbmdTdFgyUkxOY1NtcjZVMDJ6MGZzSFZSelQ2WU4wOFIzMjFqWmxh',
    'grant_type': 'client_credentials',
    'client_id': 'mhclt_MovieSearch',
    'client_secret': 'SDWKkr3hCngStX2RLNcSmr6U02z0fsHVRzT6YN08R321jZla'
  });


  constructor(public http: Http) {

  }
  
  authGrab() {
    return this.http.post(this.baseAuthUrl, {headers: this.headers})
      .map(res => res.json());
  }

  accessGrab(){
    this.accessObject = this.authGrab();
    console.log(this.accessObject);
    this.accessKey = this.accessObject.access_token;
    console.log(this.accessKey);
  }

  movieSearch(movieTitle: string){
    return this.http.get(`${this.baseUrl}${movieTitle}${'?access_token='}${this.accessKey}${'&pageSize=10'}${this.movieType}`)
      .map(res => res.json())
  }

}