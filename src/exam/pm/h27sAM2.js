import request from 'superagent';

export class Question{
  heading = "平成27年度春 PM 午前Ⅱ";
  reference = "平成27年度春 PM 午前Ⅱ問";
  n = 25;
  question = {};
  check;
  
  constructor() {
    this.isAnswer = false;
  }
  activate() {
    this.seq = 1;
    request.post('/question')
    .send({quest:'resources/h27s/PM/AM2/q1'})
    .end((err,res) => {
      this.question = JSON.parse(res.body);
    });
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
      request.post('/question')
      .send({quest:'resources/h27s/PM/AM2/q'+this.seq})
      .end((err,res) => {
        this.question = JSON.parse(res.body);
      });
    }
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