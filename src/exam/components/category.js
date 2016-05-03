import {bindable, customElement} from 'aurelia-framework';
import {category} from 'exam/const';

@customElement('category')
export class Category{
  @bindable selected;
  
  constructor() {
    this.categories = category;
  }
}