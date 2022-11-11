import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {ComponentsModule} from "./components/components.module";
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule, // Header-Footer-Sideber ın baglı oldugu component.module
    RouterModule,
    MatSidenavModule
  ]
})
export class LayoutModule { }
