import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-admin-lte-starter';
  addclass: boolean = false;

  ngOnInit(): void {
    if (window.innerWidth < 658) {
      this.addclass = true
    } else {
      this.addclass = false
    }
  }


}
