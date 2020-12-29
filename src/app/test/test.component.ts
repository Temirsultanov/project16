import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id?: number;
  param1: string = '';
  param2: string = '';
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(param =>{
      if (param.id !== null && param.id !== undefined) {
        this.id = +param.id;
      }
    })
    this.activatedRoute.queryParams.subscribe(params =>{
      this.param1 = params.param1;
      this.param2 = params.param2;
    })
   }

  ngOnInit(): void {
  }

}
