import { Component, OnInit } from '@angular/core';
import { RHSSOAdminService } from '../rhsso-admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private rhssoAdminService: RHSSOAdminService
  ) { }

  ngOnInit(): void {
  }

  uploadUsers(){
    this.rhssoAdminService.addUserToClientRole('dev', 'aviancheck',null,['steve', 'admin', 'nothing']);
  }

}
