import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article :Article;
  constructor(public articleService:ArticleService,private route :ActivatedRoute) { }

  ngOnInit(): void {
 this.articleService.looading=true;
this.route.paramMap.subscribe(param=>{
  let id = Number(this.route.snapshot.paramMap.get("articleID"));
  this.getArticleDetail(id);
})
  }

  getArticleDetail(ArticleId :number){
    this.articleService.getArticleId(ArticleId).subscribe(data=>{
      this.article =data.entity;
      console.log(this.article);

    });
  }
}
