import { Component, OnInit } from '@angular/core';
import { WizardService } from '../../wizard.service';
import { FormControl, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
    selector: 'client-wizard-define-roles',
    templateUrl: './define-roles.component.html',
    styleUrls: ['./define-roles.component.css']
})
export class DefineRolesComponent implements OnInit {

    roleControls = this.fb.group({
        roles: this.fb.array([])
    });

    get roles() {
        return this.roleControls.get('roles') as FormArray;
    }

    constructor(
        private wizardService: WizardService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
    }

    addRole() {
        this.roles.push(this.fb.control('enter a Role name'));
    }

    removeRole(i: number) {
        this.roles.removeAt(i);
    }

    saveRoles() {
        this.wizardService.roles = this.roles.value;
        this.router.navigate(['../review-client'], { relativeTo: this.route });
    }

}
