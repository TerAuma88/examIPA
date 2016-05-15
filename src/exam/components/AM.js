import request from 'superagent';
import {bindable, customElement} from 'aurelia-framework';
import {getYearLabel, getHourLabel} from 'exam/const';

@customElement('am')
export class AM{
  @bindable n = 25;
  @bindable year;
  @bindable hour;
  @bindable category;
  
  question = {};
  check;
  
  constructor() {
    this.seq = 1;
    this.isAnswer = false;
  }
  
  attached() {
    this.heading = getYearLabel(this.year) + " " + this.category + " " + getHourLabel(this.hour);
    this.getQuestion(this.seq);
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
    this.seq = this.seq + 1;
    if(this.seq > this.n){
      location.replace('/#/');
    } else {
      this.getQuestion(this.seq);
    }
  }
  getQuestion(number) {
    this.isLoaded = false;
    request.post('/question')
    .send({quest:"resources/" + this.year + "/" + this.category + "/" + this.hour + "/q" + number})
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
    if(this.seq < this.n) {
      return "次へ";
    } else {
      return "終わり";
    }
  }

}