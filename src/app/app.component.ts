import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title='my-first-app';
  public name="Decorator";
  public message="";
  twoway= " ";
  event=" ";
  out=true;

  onclick()
{
  this.event="eventbinding";
}
  show()
  {
    this.out=true;
  }
  dis()
  {
    this.out=false;
  }
  
}
