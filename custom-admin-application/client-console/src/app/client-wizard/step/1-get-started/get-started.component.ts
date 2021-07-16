import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WizardService } from '../../wizard.service';

interface ClientType {
    key: string;
    name: string;
    icon: string;
    description: string;
}

@Component({
    selector: 'client-wizard-get-started',
    templateUrl: './get-started.component.html',
    styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {

    types: ClientType[] = [
        { key: 'public', name: 'Client-side', icon: 'pf-icon-applications', description: 'Applications written in frameworks like Angular and React, as well as any application that may be making calls to Resource Servers directly from the browser' },
        { key: 'confidential', name: 'Server-side', icon: 'pf-icon-cluster', description: 'Most Resource Server (Spring Boot) applications, as well as client-server architectures like Express.js and JEE/JSF where the User session is stored on the server side' },
        { key: 'mobile', name: 'Mobile', icon: 'fa fa-mobile-alt', description: 'What it says on the tin, innit?' },
    ];

    constructor(
        private wizardService: WizardService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    startClientConfiguration(type: string) {
        this.wizardService.type = type;
        this.router.navigate(['../configure-client'], { relativeTo: this.route });
    }
}
