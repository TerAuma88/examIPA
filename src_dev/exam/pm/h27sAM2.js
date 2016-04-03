import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Question{
  constructor(http) {
    http.configure(config => {
      config.useStandardConfiguration();
    });
    this.http = http;
  }
  activate() {
    return this.http.fetch('resources/h27s/PM/AM2/q1.json')
      .then(question => {
        this.reference = "平成27年度 春期 PM 午前Ⅱ 問" + question.seq;
        this.sentence = question.sentence;
        this.answers = question.answers;
        this.correctAnswer = question.correctAnswer;
        this.comment = question.comment;

      });
  }

}