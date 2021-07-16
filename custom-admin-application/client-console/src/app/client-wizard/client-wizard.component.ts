import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, switchMap, map, pluck, startWith } from 'rxjs/operators';
import { of as observableOf, Observable } from 'rxjs';
import { KeyValue } from '@angular/common';

interface Step {
  index: number;
  name: string;
  path: string;
}

export const STEPS = {
  getStarted: { index: 1, name: 'Get Started', path: 'get-started' },
  configureClient: { index: 2, name: 'Configure Client', path: 'configure-client' },
  defineRoles: { index: 3, name: 'Define Roles', path: 'define-roles' },
  reviewClient: { index: 4, name: 'Review Client', path: 'review-client' },
  uploadUsers: { index: 5, name: 'Upload Users', path: 'upload-users' }
};

@Component({
  selector: 'client-wizard',
  templateUrl: './client-wizard.component.html',
  styleUrls: ['./client-wizard.component.css']
})
export class ClientWizardComponent implements OnInit {

  readonly steps = STEPS;
  navOpen = false;
  activeStep$: Observable<Step>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeStep$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        switchMap(
          () =>
            (this.route.firstChild && this.route.firstChild.url) ||
            observableOf([{}]),
        ),
        map(a => a[0]),
        pluck('path'),
        map(path => STEPS[Object.keys(STEPS).find(i => STEPS[i].path === path)]),
        filter(x => x !== undefined),
        startWith(STEPS.getStarted)
      );
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  byIndex = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return 0;
  }

}
