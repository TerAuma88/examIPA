import request from 'superagent';
import {bindable, customElement} from 'aurelia-framework';
import {getYearLabel, getHourLabel} from 'exam/const';
import {random} from 'exam/util/random';

@customElement('am')
export class AM{
  @bindable n = 25;
  @bindable year;
  @bindable hour;
  @bindable category;
  
  question = {};
  check;
  
  constructor() {
    this.randQ = random(this.n);
    this.count = 1;
    this.isAnswer = false;
  }
  
  attached() {
    this.heading = getYearLabel(this.year) + " " + this.category + " " + getHourLabel(this.hour);
    this.getQuestion(this.count);
  }
  
  showAnswer() {
    this.isAnswer = true;
    if (this.check === this.question.correctAnswer) {
      this.isCorrect = "resources/icons/maru.png";
    } else {
      this.isCorrect = "resources/icons/batsu.png";
    }
  }
  
  nextQuestion() {
    this.isAnswer = false;
    this.count = this.count + 1;
    if(this.count > this.n){
      location.replace('/#/');
    } else {
      this.getQuestion(this.count);
    }
  }
  getQuestion(number) {
    this.seq = this.randQ[number - 1];
    this.isLoaded = false;
    request.post('/question')
    .send({quest:"resources/" + this.year + "/" + this.category + "/" + this.hour + "/q" + this.seq})
    .end((err,res) => {
      this.question = res.body;
      this.isLoaded = true;
    });
  }
  
  get correctAnswer() {
    switch(this.question.correctAnswer) {
      case 'a': return "ア"; break;
      case 'i': return "イ"; break;
      case 'u': return "ウ"; break;
      case 'e': return "エ"; break;
      default : return "不明"; break;
    }
  }
  get next() {
    if(this.count < this.n) {
      return "次へ";
    } else {
      return "終わり";
    }
  }

}