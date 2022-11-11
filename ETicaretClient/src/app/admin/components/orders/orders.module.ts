import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import {Router, RouterModule} from "@angular/router";
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [
    OrdersComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: "", component: OrdersComponent}
        ]),
        NgxSpinnerModule
    ]
})
export class OrdersModule { }
