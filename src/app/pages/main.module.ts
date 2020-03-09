import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing.module';
import {ComponentsModule} from '../components/components.module';

import { HomeComponent } from '../pages/home/home.component';
import { AboutMeComponent } from '../pages/about-me/about-me.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { MainLayoutComponent } from '../layout/main-layout/main-layout.component';
import { MainNavComponent } from '../nav/main-nav/main-nav.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [HomeComponent,AboutMeComponent,ContactComponent,MainLayoutComponent,MainNavComponent, ArticleComponent],
  imports: [
    CommonModule,BrowserModule,HttpClientModule,AppRoutingModule,ComponentsModule]

})
export class MainModule { }
