import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-item',
  templateUrl: './driver-item.component.html',
  styleUrls: ['./driver-item.component.css']
})
export class DriverItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() driver:any;

  onLike(){
    this.driver.likeIts++
  }

  onDislike(){
    this.driver.likeIts--
  }
}
