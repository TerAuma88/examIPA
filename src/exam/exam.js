import {bindable} from 'aurelia-framework';
import {implemented} from 'exam/implemented';

export class Exam {
  canActivate(params) {
    for (var i = 0; i < implemented.length; i++) {
      if (implemented[i].category == params.category && implemented[i].year == params.year && implemented[i].hour == params.hour) {
        return true;
      }
    }
    navigate({route: '', name: 'top', moduleId: 'exam/top', nav: true, title:'トップページ'},"error");
  }
  activate(params, routeConfig, navigationInstruction) {
    this.category = params.category;
    this.year = params.year;
    this.hour = params.hour;
    this.n = params.num == undefined? 25: params.num;
  }
  
}