import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url: string = 'http://localhost:3000/items';
  httpOptions = {
    headers:{
      'Content-Type': 'application/json'
    }
  };
  items : Item[] = [
    {
      id:0,
      title: 'Manzana',
      price: 10.5,
      quantity: 4,
      completed:false
    },
    {
      id:1,
      title: 'Pan',
      price: 3.5,
      quantity: 8,
      completed:true
    },
    {
      id:2,
      title: 'Chamarra',
      price: 10,
      quantity: 1,
      completed:false
    }
  ];
  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]>{
    //return this.items;
    return this.http.get<Item[]>(this.url);

  }

  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item, this.httpOptions)
  }

  toggleItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
  }

  deleteItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.delete<Item>(this.url + item.id);
  }
}
