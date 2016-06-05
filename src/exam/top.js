import {computedFrom} from 'aurelia-framework';
import {isImplemented} from 'exam/implemented';

export class Top{
  constructor() {
    // 初期選択
    this.params = {
      category: "PM",
      hour: "AM2",
      year: "h27s",
      num: "25",
    };
  }
  
  activate(params, routeConfig, navigationInstruction) {
    this.router = navigationInstruction.router;
  }
  
  @computedFrom('params.category','params.year','params.hour')
  get isError() {
    return !isImplemented(this.params);
  }
  
  clickStart() {
    this.router.navigateToRoute("exam", {category:this.params.category, hour:this.params.hour, year:this.params.year, num:this.params.num});
  }
}