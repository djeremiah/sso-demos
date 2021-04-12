import { Component } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  templateUrl: './start.component.html'
})
export class StartComponent{

  constructor(private router: Router){}

  startNewApplication(){
    this.router.navigate(['forms','new']);
  }
}