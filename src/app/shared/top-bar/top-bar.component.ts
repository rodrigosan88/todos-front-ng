import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  opened : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.opened = !this.opened;
  }

}
