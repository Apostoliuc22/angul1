import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  test: any;
  isEdit: boolean = false;


  constructor() { }

  ngOnInit() {
    this.name = 'BMW';
    this.speed = 280;
    this.model = ' F10';
    this.colors = {
      car: 'Black',
      salon: 'White',
      wheels: 'Grey'
    };
    this.options = ["ABS", "AutoHold", "BreakAssist"];
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


  carSelect(carName) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = ' F10';
      this.colors = {
        car: 'Black',
        salon: 'White',
        wheels: 'Grey'
      };
      this.options = ["ABS", "AutoHold", "BreakAssist"];
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 120;
      this.model = ' RS3';
      this.colors = {
        car: 'Green',
        salon: 'White',
        wheels: 'Grey'
      }
    } else {
      this.name = 'Mercedes';
      this.speed = 260;
      this.model = ' GTs AMG';
      this.colors = {
        car: 'Grey',
        salon: 'White',
        wheels: 'Grey'
      };
      this.options = ["ABS", "AutoHold", "BreakAssist"];
    }
  }




}
interface Colors {
  car: string,
  salon: string,
  wheels: string
}
