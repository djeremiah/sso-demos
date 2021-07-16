import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'div[client-role-badge]',
    templateUrl: './role-badge.component.html',
    styleUrls: ['./role-badge.component.css'],
})
export class RoleBadgeComponent {

    @ViewChild('roleInput') roleInput: ElementRef;
    edit = false;
    value = 'enter a Role name';

    @Input() control: FormControl;
    @Output() deleted = new EventEmitter<boolean>();

    toggleEdit() {
        this.edit = !this.edit;

        if (this.edit) { // focus on edit
            setTimeout(() => { this.roleInput.nativeElement.focus(); this.roleInput.nativeElement.select(); }, 0);
        }
    }

    save() {
        this.value = this.control.value;
        this.edit = false;
    }

    cancel() {
        this.control.setValue(this.value);
        this.edit = false;
    }

    discard() {
        this.deleted.emit(true);
    }

}
