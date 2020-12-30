import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Basehttp } from './basehttp';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends Basehttp{

  constructor(public http : HttpClient) {
    super(http, 'portfolio');
   }
}
