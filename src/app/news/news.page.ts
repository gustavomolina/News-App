import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  //Serviço da página de notícias
  constructor(private newsService: NewsService, private router: Router) { }

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
  onGoToNewsSinglePage(article){
        this.newsService.currentArticle = article;
        this.router.navigate(['/news-single'])
  }
}
