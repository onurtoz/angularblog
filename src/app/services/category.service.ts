import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { CategoryModel } from '../models/category-model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
private apiUrl : string ="https://localhost:44336/api/Category/GetCategory";
  constructor(private httpclient :HttpClient,private category :CategoryModel){ }


public getCategories()
{
 return this.httpclient.get<CategoryModel>(this.apiUrl);
}

public getCategoryById(id:number)
{
let url = `${this.apiUrl}/${id}`
return this.httpclient.get<CategoryModel>(url);
}
}
