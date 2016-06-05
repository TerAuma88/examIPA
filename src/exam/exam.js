import {bindable} from 'aurelia-framework';
import {isImplemented} from 'exam/implemented';

export class Exam {
  canActivate(params) {
    // 未実装なら遷移させない
    return isImplemented(params);
  }
  activate(params, routeConfig, navigationInstruction) {
    this.category = params.category;
    this.year = params.year;
    this.hour = params.hour;
    this.n = params.num == undefined? 25: params.num;
  }
  
}