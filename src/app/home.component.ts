import {Component} from '@angular/core';
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'ngc-home',
  template: `
              <h2>
                Home Content
              </h2>
              `
})
export class HomeComponent {

  /**
   * SharedService is available from the SharedModule
   */
  constructor(private sharedService: SharedService) {
    console.log('constructing HomeComponent, injecting sharedService', this.sharedService);
  }


}
