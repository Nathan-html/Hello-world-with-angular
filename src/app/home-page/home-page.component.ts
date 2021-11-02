import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    console.log(this.bestCars);
    console.log(this.bestDrivers);
  }

  title = this.DataService.title;
  bestCars = this.DataService.getNbBestCars(2);
  bestDrivers = this.DataService.getNbBestDrivers(3);
}
