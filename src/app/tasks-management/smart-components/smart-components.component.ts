import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-components',
  templateUrl: './smart-components.component.html',
  styleUrls: ['./smart-components.component.css']
})
export class SmartComponentsComponent implements OnInit {

  constructor() { }
  public isClickOnaddOrView = false;
  ngOnInit(): void {
  }
  onTaskAdd() {
    this.isClickOnaddOrView = true;
  }
}
