import {Component} from '@angular/core';
import {CustomToastrService, ToastrMessageType, ToastrPosition} from "./services/ui/custom-toastr.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini ETicaret Client';

  constructor(private toastrService : CustomToastrService) {
    /*this.toastrService.message("Yıldız", "Omer", {
      messageType : ToastrMessageType.Success,
      position : ToastrPosition.BottomCenter
    })*/
  }
}

