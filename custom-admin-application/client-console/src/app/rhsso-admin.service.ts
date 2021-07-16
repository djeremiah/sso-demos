import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { switchMap, map, filter, mergeMap, first, take, catchError } from 'rxjs/operators';
import { from, Observable, of } from 'rxjs';


interface Realm {
    id: string;
}

interface Client {
    id: string;
    clientId: string;
}

interface Role {
    id: string;
    name: string;
    containerId: string;
}

@Injectable({
    providedIn: 'root'
})
export class RHSSOAdminService {

    constructor(private http: HttpClient) { }

    getRealms(): Observable<Realm[]> {
        return this.http.get<Realm[]>(environment.ssoConfig.url + "/admin/realms" );
    }

    getRealm(realm: string): Observable<Realm> {
        return this.http.get<Realm>(environment.ssoConfig.url + "/admin/realms/" + realm + "/components");
    }

    getClients(realm: string): Observable<Client[]> {
        return this.http.get<Client[]>(environment.ssoConfig.url + "/admin/realms/" + realm + "/clients")
    }

    getClientRoles(realm: string, clientId: string): Observable<Role[]> {
        return this.http.get<Role[]>(environment.ssoConfig.url + "/admin/realms/" + realm + "/clients/" + clientId + "/roles")
    }

    createClient(realm: string, client: string, roles: string[]) {
        let body = {
            "clients": [
                {
                    "clientId": client,
                    "fullScopeAllowed": false
                }
            ],
            "roles": {
                "client": {
                    [client]: roles.map(r => { return { "name": r } })
                }
            }
        }

        return this.http.post(environment.ssoConfig.url + "/admin/realms/" + realm + "/partialImport", body);
    }

    addUserToClientRole(realm: string, clientId: string, userId: string, roles: string[]){
        this.getRealm('dev').subscribe(data => console.log(data))
    }


}
