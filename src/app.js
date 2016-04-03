System.register(['bootstrap', 'const/navi'], function (_export) {
  'use strict';

  var PM_NAVI, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_bootstrap) {}, function (_constNavi) {
      PM_NAVI = _constNavi.PM_NAVI;
    }],
    execute: function () {
      App = (function () {
        function App() {
          _classCallCheck(this, App);
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'PM';
            config.map(PM_NAVI);

            this.router = router;
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7ZUFHYSxHQUFHOzs7Ozs7OzsyQkFGUixPQUFPOzs7QUFFRixTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3BCLGtCQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVwQixnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztlQU5VLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdib290c3RyYXAnO1xyXG5pbXBvcnQge1BNX05BVkl9IGZyb20gXCJjb25zdC9uYXZpXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ1BNJztcclxuICAgIGNvbmZpZy5tYXAoUE1fTkFWSSk7XHJcbiAgICBcclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxuICBcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
