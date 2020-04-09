import { Component, OnInit, Input } from '@angular/core';
import {appareilService} from '../service/appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

 

@Input() appareilName : string;
@Input() appareilStatus : string;


constructor( private appareilservice : appareilService) 
{
}
  ngOnInit(): void {
   
  }
  getColor()
  {
    if (this.appareilStatus === 'allumé')
    {
      return 'green'

    }

    else if(this.appareilStatus === 'éteint') {
    
      return 'red'
      
    }
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

}
