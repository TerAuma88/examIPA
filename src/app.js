import 'bootstrap';
import {PM_NAVI} from "navi";

export class App {
  configureRouter(config, router){
    config.title = 'PM';
    config.map(PM_NAVI);
    
    this.router = router;
  }
  
}