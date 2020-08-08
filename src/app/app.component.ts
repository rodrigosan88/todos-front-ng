import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todos-frontend';

  menuItems : MenuItem[] = [
    new MenuItem("/dashboard", "dashboard", "Dashboard"),
    new MenuItem("/admin-area", "build", "Admin area"),
    new MenuItem("/logout", "run_circle", "Logout")
  ];

}
