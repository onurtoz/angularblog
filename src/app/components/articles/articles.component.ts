import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Router,ActivatedRoute } from '@angular/router';
import { ArticlePaging } from 'src/app/models/article-paging';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
 @Input() totalCount : number;
 @Input() articles:Article[] ;
 @Input() page :number;
 @Input() pageSize : number;
 @Input() looadingItem:number;
 default_article : string ="../../../assets/breaking down journal.jpg";
  constructor(private router:Router,private route: ActivatedRoute,public articleService:ArticleService) { }

  createRange(){
   var items :number[] =[];
   for(var i = 1 ; i<=this.looadingItem; i++){
     items.push(i);
   }
   return items;
 }
  ngOnInit(): void {

    this.articleService.looading=true;
   }
  pageChanged(event){
    this.articleService.looading =true;
   this.page = event;
   this.router.navigateByUrl(`page/${this.page}`);
  }

}
