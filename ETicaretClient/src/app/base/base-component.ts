import {NgxSpinnerService} from "ngx-spinner";
import {AlertifyService, Position} from "../admin/service/alertify.service";

export class BaseComponent {

  constructor(private spinner: NgxSpinnerService) {
  }
  showSpinner(type : SpinnerType){
    this.spinner.show(type);
    setTimeout(() => this.spinner.hide(type), 3000)
  }
  hideSpinner(type : SpinnerType){
    this.spinner.hide(type)
  }
}
export enum SpinnerType{
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockWiseFadeRotating = "s3"
}
