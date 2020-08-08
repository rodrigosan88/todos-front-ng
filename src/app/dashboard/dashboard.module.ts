import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PanelComponent } from './panel/panel.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { TodoCardComponent } from './todo-card/todo-card.component';
import { TodoFormComponent } from './todo-form/todo-form.component';


@NgModule({
  declarations: [
    PanelComponent,
    TodoCardComponent,
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    PanelComponent
  ]
})
export class DashboardModule { }
