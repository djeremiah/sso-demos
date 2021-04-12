import { Injectable } from "@angular/core";
import * as Keycloak from "../assets/keycloak";


@Injectable({
  providedIn: "root"
})
export class IdentityService {

  private _instance: Keycloak.KeycloakInstance;
  loggedIn: boolean;

  init(): Promise<any> {
    console.log("init keycloak");
    this._instance = Keycloak(
      {
        clientId: "redirect-after-registration",
        realm: "dafm",
        url: "http://localhost:8080/auth"
      }
    );
    return this._instance.init({});

  }

  register(formUuid: string): void {
    this._instance.register({
      redirectUri: "http://localhost:4200/forms/" + formUuid
    }).then(data => {
      console.log(data);
    })
  }

  getUserId(): string{
    return this._instance.subject;
  }
}