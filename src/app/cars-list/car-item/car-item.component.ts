import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  @Input() car:any;

  isBooked:boolean = false;
  bookingMessage: string = "Réserver maintenant !"
  onBooking(){
    this.isBooked= true;
    this.bookingMessage= "Bonne route ! [réservée]";
  }
}
