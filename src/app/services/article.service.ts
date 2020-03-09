import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ArticlePaging } from '../models/article-paging';
import { tap} from 'rxjs/operators';
import { ArticleSingle } from '../models/article-single';
@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private httpclient:HttpClient  ) { }
  public looading : boolean = true;
  private apiUrl : string ='https://localhost:44336/api/article/GetArticles';
  private apiDetailUrl : string ='https://localhost:44336/api/Article/';

   getArticle(page:number,pagesize:number){
    let url = `${this.apiUrl}?page=${page}&pagesize=${pagesize}`;
    return this.httpclient.get<ArticlePaging>(url).pipe(tap(x=>{
      this.looading =false;
  }))
  }

  getArticleId(ArticleId:number){
  let url = `${this.apiDetailUrl}/${ArticleId}`;
  return this.httpclient.get<ArticleSingle>(url).pipe(tap(x=>{
    this.looading=false;

  }))
  }
}
