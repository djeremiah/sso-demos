import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../wizard.service';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'client-wizard-configure-client',
    templateUrl: './configure-client.component.html',
    styleUrls: ['./configure-client.component.css']
})
export class ConfigureClientComponent implements OnInit {

    clientType: string;
    clientForm = this.fb.group({
        name: [''],
        realm: ['']
    });

    constructor(
        private wizardService: WizardService,
        private fb: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.clientType = this.wizardService.type;
        this.clientForm.get('name').setValue(this.wizardService.name);
        this.clientForm.get('realm').setValue(this.wizardService.realm);
    }

    onSubmit(formData) {
        this.wizardService.name = formData.name;
        this.wizardService.realm = formData.realm;
        this.router.navigate(['../define-roles'], { relativeTo: this.route });
    }
}
