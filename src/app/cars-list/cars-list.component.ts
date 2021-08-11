import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit() {
    this.carUpdate = new Date();
  }

  carUpdate:any;
  cars = this.DataService.getAllCars()
}