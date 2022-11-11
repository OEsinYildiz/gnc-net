import {Component, OnInit} from '@angular/core';
import {AlertifyService, MessageType, Position} from "../service/alertify.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private alertify : AlertifyService) { }

  ngOnInit(): void {
   /* this.alertify.message("Selamlar", {
      messageType : MessageType.Success,
      position : Position.TopCenter,
      delay : 3})*/
  }

}


//Bu component bizim admin layout component. admin panelin layoutu
