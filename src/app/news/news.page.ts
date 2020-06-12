import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  //Serviço da página de notícias
  constructor(private newsService: NewsService) { }

  //Variavel para manipular os dados retornados pela API.
  data: any;

  ngOnInit() {
    //Aqui pode-se editar como será a consulta à API
    this.newsService.getdata('everything?q=bitcoin&from=2020-05-11&sortBy=publishedAt')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

}
