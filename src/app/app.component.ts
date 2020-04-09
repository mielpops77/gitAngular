import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularGit';
  secondes : number;
  counterSubscription: Subscription;



  ngOnInit() {
    const counter = Observable.interval(1000);

    this.counterSubscription =counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) =>
      {
        console.log("Uh-oh, an error occurred !:"+error);
      },
      ()=>
      {
        console.log("observable complete !");
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }



  
}
