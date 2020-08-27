import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifsDataService {

  constructor( private http: HttpClient) { }
  getTreandingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/treanding?api_key=%${environment.giphyApiKey}&limit=50`)
  }
}
