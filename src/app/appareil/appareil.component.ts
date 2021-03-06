import { Component, OnInit, Input } from '@angular/core';
import {AppareilService} from '../service/appareil.service';
@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

 

@Input() appareilName : string;
@Input() appareilStatus : string;
@Input() appareilIndex: number;


constructor( private appareilService : AppareilService) 
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

  allume()
  {
    this.appareilService.switchOn(this.appareilIndex);

  }

  eteint()
  {
    this.appareilService.switchOff(this.appareilIndex);

  }



}
