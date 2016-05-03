import {bindable, customElement} from 'aurelia-framework';
import {year} from 'exam/const';

@customElement('year')
export class Year{
  @bindable selected;
  
  constructor() {
    this.years = year;
  }
}