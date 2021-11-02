import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-cars',
  templateUrl: './best-cars.component.html',
  styleUrls: ['./best-cars.component.css']
})
export class BestCarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() bestCar:any;

  isBooked:boolean = false;
  bookingMessage: string = "Réserver maintenant !";
  onBooking(){
    this.isBooked= true;
    this.bookingMessage= "Bonne route ! [réservée]";
  }
}
