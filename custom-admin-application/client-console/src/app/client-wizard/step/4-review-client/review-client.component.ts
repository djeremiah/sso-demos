import { Component } from '@angular/core';
import { WizardService } from '../../wizard.service';
import { RHSSOAdminService } from 'src/app/rhsso-admin.service';

@Component({
    selector: 'client-wizard-review-client',
    templateUrl: './review-client.component.html'
})
export class ReviewClientComponent {

    client = {
        type: this.wizardService.type,
        realm: this.wizardService.realm,
        name: this.wizardService.name,
        roles: this.wizardService.roles

    };

    constructor(
        private wizardService: WizardService,
        private rhssoAdminService: RHSSOAdminService
    ) { }

    createClient(){
        this.rhssoAdminService.createClient(this.client.realm, this.client.name, this.client.roles)
        .subscribe((response)=>{
            console.log(response)
        });
    }

}
