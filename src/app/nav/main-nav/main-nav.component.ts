import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
enum MainPage
{
  home = 1,
  about_me = 2,
  contact = 3
}
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent implements OnInit {
   pageActive :MainPage;
  constructor(private router:Router) {
    this.router.events.subscribe(x=>{

     if(x instanceof NavigationEnd){
      switch(x.url) {
        case "home": {
          this.pageActive= MainPage.home;
           break;
        }
        case "/about-me": {
           this.pageActive =MainPage.about_me;

           break;
        }
        case "/contact": {
          this.pageActive =MainPage.contact;
          break;
       }
        default: {
          this.pageActive=MainPage.home;
           break;
        }
     }
     }
    });
   }

  ngOnInit(): void {}

}
