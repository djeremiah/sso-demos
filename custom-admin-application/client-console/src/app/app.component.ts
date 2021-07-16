import { Component } from '@angular/core';

@Component({
    selector: 'client-app-root',
    templateUrl: './app.component.html'
})
export class AppComponent{
    sidebarOpen = true;

    toggleNav(){
        this.sidebarOpen = !this.sidebarOpen;
    }

}
