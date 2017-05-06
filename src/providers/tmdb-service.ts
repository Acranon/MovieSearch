import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class TmdbService {
  readonly apiKey = '34548824e811fdb70fc002ee65cbe52f';
  readonly baseMovieUrl = 'https://api.themoviedb.org/3/search/movie/550?api_key=';

  constructor(public http: Http) {

  }

  movieGrab(movie){
    return this.http.get(`${this.baseMovieUrl}${this.apiKey}${'&language=en-US'}${'&query='}${movie}${'&page=1'}`)
    .map(res => res.json());
  }

  

}
