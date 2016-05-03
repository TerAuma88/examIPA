import {bindable, customElement} from 'aurelia-framework';
import {num} from 'exam/const';

@customElement('num')
export class Num{
  @bindable selected;
  
  constructor() {
    this.numbers = num;
  }
}