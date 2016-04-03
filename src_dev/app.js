import 'bootstrap';
import {PM_NAVI} from "const/navi";

export class App {
  configureRouter(config, router){
    config.title = 'PM';
    config.map(PM_NAVI);
    
    this.router = router;
  }
  
}