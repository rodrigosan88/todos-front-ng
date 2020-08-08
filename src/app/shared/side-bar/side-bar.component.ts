import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input()
  opened : boolean = true;

  @Input()
  menuItems : MenuItem[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
