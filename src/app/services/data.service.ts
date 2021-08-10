import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  terminalMsg:string = "Hello world";
  title:string = "Drive-X";
}