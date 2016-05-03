import {bindable, customElement} from 'aurelia-framework';
import {hour} from 'exam/const';

@customElement('hour')
export class Hour{
  @bindable selected;
  
  constructor() {
    this.hours = hour;
  }
}