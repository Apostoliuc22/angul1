import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  options: string[];
  isEdit: boolean = false;

  constructor() { }

  ngOnInit() {
    this.options = [];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }
  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }







}
interface Colors {
  car: string,
  salon: string,
  wheels: string
}
