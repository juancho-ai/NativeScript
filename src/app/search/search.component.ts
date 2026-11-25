import { Component } from '@angular/core';
import { Application } from '@nativescript/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
