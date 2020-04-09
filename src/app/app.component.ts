import { Component } from '@angular/core';
import {appareilService} from './service/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGit';
  isAuth :boolean = false;

  appareils : any [];

  constructor( private appareilservice : appareilService) {
    this.appareils = this.appareilservice.appareils;
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer()
  {
    console.log("On allume tout !!")
    
  }

}
