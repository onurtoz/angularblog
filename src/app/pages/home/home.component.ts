import { Component, OnInit, OnDestroy } from '@angular/core';
import { Article } from 'src/app/models/article';
import {Router,ActivatedRoute} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import { ArticlePaging } from 'src/app/models/article-paging';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy{
  ngOnDestroy(): void {
    if(this.ajaxrequest!=null){
      this.ajaxrequest.unsubscribe();
    }
  }
 title:string ="Home";
 page:number = 1;
 articles:Article[] =[];
 totalCount : number = 0;
 pageSize : number =  5;
looadingItem : number = 0;
ajaxrequest ;
  constructor(private articleService :ArticleService,private router : Router,private route :ActivatedRoute  ) { }

  ngOnInit(): void {
  this.route.paramMap.subscribe(params=>{

  if(params.get("page")){
    this.page =Number(params.get("page"));
    this.getConditionalDataUsingAsync();

    if(this.totalCount>0){
      if(this.totalCount>(this.page)*(this.pageSize)){
        this.looadingItem = 5;
      }
      else{
        this.looadingItem = this.totalCount-(this.page) *(this.pageSize);
      }
    }
  }
  });
  this.getConditionalDataUsingAsync();

  }
   getConditionalDataUsingAsync() {

   this.ajaxrequest=this.articleService.getArticle(this.page,this.pageSize).subscribe(data=>{

    this.articles =data.entity;
    this.totalCount =data.totalCount;

   });
  }

}
