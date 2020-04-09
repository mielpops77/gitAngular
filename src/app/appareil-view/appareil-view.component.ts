import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../service/appareil.service';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {

  isAuth :boolean = false;

  appareils : any [];

  constructor( private appareilService : AppareilService) {
    
    
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
}

  onAllumer()
  {
    this.appareilService.switchOnAll();
    console.log("On allume tout !!")
    
  }

  onEteindre()
  {
    if(confirm('Êtes-vous sur de vouloir éteindre tous vos appareisl ?'))
    {
      this.appareilService.switchOfAll();
    } else{
      return null;
    }
    

    console.log("On éteint tout !!")
  }


}
