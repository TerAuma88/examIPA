import {bindable} from 'aurelia-framework';

export class Exam {
  activate(params, routeConfig, navigationInstruction) {
    this.category = params.category;
    this.year = params.year;
    this.hour = params.hour;
    this.n = params.num == undefined? 25: params.num;
    this.notFound = this.hour != 'AM2' || this.category != 'PM' || this.year != 'h27s'; // 現状、PM_AM2_h27sのみ
  }
}