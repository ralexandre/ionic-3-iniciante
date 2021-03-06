import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
private baseMovie = "https://api.themoviedb.org/3/";
private key = "?api_key=91c5307bf6a4e7feafe792b74de33323";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }
  getLatestMovies(){
    return this.http.get( this.baseMovie+ "movie/popular?api_key=91c5307bf6a4e7feafe792b74de33323");
  }
}
