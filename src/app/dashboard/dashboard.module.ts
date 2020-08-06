import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  exports: [
    WrapperComponent
  ]
})
export class DashboardModule { }
