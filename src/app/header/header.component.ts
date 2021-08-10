import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private DataService: DataService) { }

  ngOnInit(): void {
    console.log(this.DataService.terminalMsg)
  }

  title = this.DataService.title;
}
