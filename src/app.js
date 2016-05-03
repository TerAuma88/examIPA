import 'bootstrap';

export class App {
  configureRouter(config, router){
    config.title = '情報処理資格試験';
    config.map([ 
      {route: '', name: 'top', moduleId: 'exam/top', nav: true, title:'トップページ'},
      {route: 'exam/\:category/\:hour/\:year', name: 'exam', moduleId: 'exam/exam', nav: false, title:'試験'},
    ]);
    
    this.router = router;
  }
  
}