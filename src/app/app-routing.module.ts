import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ArticleComponent } from './pages/article/article.component';

const routes: Routes = [
{
  path:"",
  component:MainLayoutComponent,
  children:[
    {
      path:"",
      component:HomeComponent
    },
    {
      path:"article/:articleID",
      component:ArticleComponent
    },
    {
      path:"page/:page",
     component:HomeComponent
    },
    {
      path:"about-me",
      component:AboutMeComponent
    },
    {
      path:"contact",
      component:ContactComponent
    }
  ]
},
{
  path:"admin",
  component:AdminLayoutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
