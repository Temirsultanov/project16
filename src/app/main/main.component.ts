import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Portfolio } from '../shared/models/portfolio.model';
import { PortfolioService } from '../shared/services/portfolio.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  searchStr: string = '';
  portfolio : Portfolio[] = [];
  toImgSrc(imgsrc: string) {
    return "assets/" + imgsrc
  }
  constructor(private portfolioService : PortfolioService, private router : Router) {
  }
  async getData() {
    try {
      let portfolioGetted = this.portfolioService.getAll();
      this.portfolio = await portfolioGetted === null || await portfolioGetted === undefined ? [] : await portfolioGetted;
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.getData();
  }

}
