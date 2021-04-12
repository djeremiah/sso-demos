import { Component, OnInit } from "@angular/core";
import { IdentityService } from "../identity.service";


@Component({
  templateUrl: './application-form.component.html'
})
export class ApplicationFormComponent implements OnInit{

  private _uuid: string
  user:string

  constructor(private identityService: IdentityService){}

  ngOnInit() {
    this._uuid = "abcdefgh-abcdefgh-abcdefgh-abcdefgh"
    this.user = this.identityService.getUserId();
  }

  saveForLater(){
    this.identityService.register(this._uuid)
  }



}