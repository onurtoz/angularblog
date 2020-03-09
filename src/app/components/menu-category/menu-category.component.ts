import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service'
import { Category } from 'src/app/models/category';
import { CategoryModel } from 'src/app/models/category-model';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {
  categories:Category[]=[];

  constructor(private categoryservice :CategoryService) { }
  ngOnInit(): void {
     this.categoryservice.getCategories().subscribe(data=>{
     this.categories=data.entity;
     })


  }
}
