import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
// Dados da API
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

    currentArticle: any;
  constructor(private http: HttpClient) { }

  //Método para receber os dados da API, igual formato descrito na página da API: https://newsapi.org
  getdata(url){
    return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
