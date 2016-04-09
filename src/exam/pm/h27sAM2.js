System.register(["superagent"], function (_export) {
  "use strict";

  var request, Question;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_superagent) {
      request = _superagent["default"];
    }],
    execute: function () {
      Question = (function () {
        function Question() {
          _classCallCheck(this, Question);

          this.heading = "平成27年度春 PM 午前Ⅱ";
          this.reference = "平成27年度春 PM 午前Ⅱ問";
          this.n = 25;
          this.question = {};

          this.isAnswer = false;
        }

        _createClass(Question, [{
          key: "activate",
          value: function activate() {
            var _this = this;

            this.seq = 1;
            request.post('/question').send({ quest: 'resources/h27s/PM/AM2/q1' }).end(function (err, res) {
              _this.question = JSON.parse(res.body);
            });
          }
        }, {
          key: "showAnswer",
          value: function showAnswer() {
            this.isAnswer = true;
            if (this.check === this.question.correctAnswer) {
              this.isCorrect = "resources/icons/maru.png";
            } else {
              this.isCorrect = "resources/icons/batsu.png";
            }
          }
        }, {
          key: "nextQuestion",
          value: function nextQuestion() {
            var _this2 = this;

            this.isAnswer = false;
            this.seq = this.seq + 1;
            if (this.seq > this.n) {
              location.replace('/#/');
            } else {
              request.post('/question').send({ quest: 'resources/h27s/PM/AM2/q' + this.seq }).end(function (err, res) {
                _this2.question = JSON.parse(res.body);
              });
            }
          }
        }, {
          key: "correctAnswer",
          get: function get() {
            switch (this.question.correctAnswer) {
              case 'a':
                return "ア";break;
              case 'i':
                return "イ";break;
              case 'u':
                return "ウ";break;
              case 'e':
                return "エ";break;
              default:
                return "不明";break;
            }
          }
        }, {
          key: "next",
          get: function get() {
            if (this.seq < this.n) {
              return "次へ";
            } else {
              return "終わり";
            }
          }
        }]);

        return Question;
      })();

      _export("Question", Question);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW0vcG0vaDI3c0FNMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7ZUFFYSxRQUFROzs7Ozs7Ozs7OztBQUFSLGNBQVE7QUFPUixpQkFQQSxRQUFRLEdBT0w7Z0NBUEgsUUFBUTs7ZUFDbkIsT0FBTyxHQUFHLGdCQUFnQjtlQUMxQixTQUFTLEdBQUcsaUJBQWlCO2VBQzdCLENBQUMsR0FBRyxFQUFFO2VBQ04sUUFBUSxHQUFHLEVBQUU7O0FBSVgsY0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7O3FCQVRVLFFBQVE7O2lCQVVYLG9CQUFHOzs7QUFDVCxnQkFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDYixtQkFBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FDeEIsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLDBCQUEwQixFQUFDLENBQUMsQ0FDeEMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBSztBQUNoQixvQkFBSyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFUyxzQkFBRztBQUNYLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNyQixnQkFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO0FBQzlDLGtCQUFJLENBQUMsU0FBUyxHQUFHLDBCQUEwQixDQUFDO2FBQzdDLE1BQU07QUFDTCxrQkFBSSxDQUFDLFNBQVMsR0FBRywyQkFBMkIsQ0FBQzthQUM5QztXQUNGOzs7aUJBRVcsd0JBQUc7OztBQUNiLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN0QixnQkFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN4QixnQkFBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUM7QUFDbkIsc0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekIsTUFBTTtBQUNMLHFCQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUN4QixJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMseUJBQXlCLEdBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQ2hELEdBQUcsQ0FBQyxVQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUs7QUFDaEIsdUJBQUssUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2VBQ3RDLENBQUMsQ0FBQzthQUNKO1dBQ0Y7OztlQUVnQixlQUFHO0FBQ2xCLG9CQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtBQUNoQyxtQkFBSyxHQUFHO0FBQUUsdUJBQU8sR0FBRyxDQUFDLEFBQUMsTUFBTTtBQUFBLEFBQzVCLG1CQUFLLEdBQUc7QUFBRSx1QkFBTyxHQUFHLENBQUMsQUFBQyxNQUFNO0FBQUEsQUFDNUIsbUJBQUssR0FBRztBQUFFLHVCQUFPLEdBQUcsQ0FBQyxBQUFDLE1BQU07QUFBQSxBQUM1QixtQkFBSyxHQUFHO0FBQUUsdUJBQU8sR0FBRyxDQUFDLEFBQUMsTUFBTTtBQUFBLEFBQzVCO0FBQVUsdUJBQU8sSUFBSSxDQUFDLEFBQUMsTUFBTTtBQUFBLGFBQzlCO1dBQ0Y7OztlQUNPLGVBQUc7QUFDVCxnQkFBRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUU7QUFDcEIscUJBQU8sSUFBSSxDQUFDO2FBQ2IsTUFBTTtBQUNMLHFCQUFPLEtBQUssQ0FBQzthQUNkO1dBQ0Y7OztlQXpEVSxRQUFRIiwiZmlsZSI6ImV4YW0vcG0vaDI3c0FNMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gJ3N1cGVyYWdlbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0aW9ue1xyXG4gIGhlYWRpbmcgPSBcIuW5s+aIkDI35bm05bqm5pilIFBNIOWNiOWJjeKFoVwiO1xyXG4gIHJlZmVyZW5jZSA9IFwi5bmz5oiQMjflubTluqbmmKUgUE0g5Y2I5YmN4oWh5ZWPXCI7XHJcbiAgbiA9IDI1O1xyXG4gIHF1ZXN0aW9uID0ge307XHJcbiAgY2hlY2s7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmlzQW5zd2VyID0gZmFsc2U7XHJcbiAgfVxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgdGhpcy5zZXEgPSAxO1xyXG4gICAgcmVxdWVzdC5wb3N0KCcvcXVlc3Rpb24nKVxyXG4gICAgLnNlbmQoe3F1ZXN0OidyZXNvdXJjZXMvaDI3cy9QTS9BTTIvcTEnfSlcclxuICAgIC5lbmQoKGVycixyZXMpID0+IHtcclxuICAgICAgdGhpcy5xdWVzdGlvbiA9IEpTT04ucGFyc2UocmVzLmJvZHkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHNob3dBbnN3ZXIoKSB7XHJcbiAgICB0aGlzLmlzQW5zd2VyID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLmNoZWNrID09PSB0aGlzLnF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXIpIHtcclxuICAgICAgdGhpcy5pc0NvcnJlY3QgPSBcInJlc291cmNlcy9pY29ucy9tYXJ1LnBuZ1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0NvcnJlY3QgPSBcInJlc291cmNlcy9pY29ucy9iYXRzdS5wbmdcIjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgbmV4dFF1ZXN0aW9uKCkge1xyXG4gICAgdGhpcy5pc0Fuc3dlciA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXEgPSB0aGlzLnNlcSArIDE7XHJcbiAgICBpZih0aGlzLnNlcSA+IHRoaXMubil7XHJcbiAgICAgIGxvY2F0aW9uLnJlcGxhY2UoJy8jLycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVxdWVzdC5wb3N0KCcvcXVlc3Rpb24nKVxyXG4gICAgICAuc2VuZCh7cXVlc3Q6J3Jlc291cmNlcy9oMjdzL1BNL0FNMi9xJyt0aGlzLnNlcX0pXHJcbiAgICAgIC5lbmQoKGVycixyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gSlNPTi5wYXJzZShyZXMuYm9keSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnZXQgY29ycmVjdEFuc3dlcigpIHtcclxuICAgIHN3aXRjaCh0aGlzLnF1ZXN0aW9uLmNvcnJlY3RBbnN3ZXIpIHtcclxuICAgICAgY2FzZSAnYSc6IHJldHVybiBcIuOColwiOyBicmVhaztcclxuICAgICAgY2FzZSAnaSc6IHJldHVybiBcIuOCpFwiOyBicmVhaztcclxuICAgICAgY2FzZSAndSc6IHJldHVybiBcIuOCplwiOyBicmVhaztcclxuICAgICAgY2FzZSAnZSc6IHJldHVybiBcIuOCqFwiOyBicmVhaztcclxuICAgICAgZGVmYXVsdCA6IHJldHVybiBcIuS4jeaYjlwiOyBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0IG5leHQoKSB7XHJcbiAgICBpZih0aGlzLnNlcSA8IHRoaXMubikge1xyXG4gICAgICByZXR1cm4gXCLmrKHjgbhcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBcIue1guOCj+OCilwiO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
