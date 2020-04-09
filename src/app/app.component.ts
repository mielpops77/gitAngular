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
    
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilservice.appareils;
}

  onAllumer()
  {
    this.appareilservice.switchOnAll();
    console.log("On allume tout !!")
    
  }

  onEteindre()
  {
    if(confirm('Êtes-vous sur de vouloir éteindre tous vos appareisl ?'))
    {
      this.appareilservice.switchOfAll();
    } else{
      return null;
    }
    

    console.log("On éteint tout !!")
  }

}
