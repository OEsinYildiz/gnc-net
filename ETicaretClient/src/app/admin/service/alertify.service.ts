import { Injectable } from '@angular/core';
declare var alertify : any

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  //message(message: string, messageType: MessageType, position: Position = Position.BottomRight, delay:number = 5)
  message(message: string, options : Partial<AlertifyOptions>){
    alertify.set("notifier", "delay", options.delay);
    alertify.set("notifier", "position", options.position);
    alertify[options.messageType](message);
  }

  dismiss() {
    alertify.dismissAll();
  }

}

export class AlertifyOptions{
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay : number = 3;
}

export enum MessageType {
  Error = "error",
  Success = "success",
  Warning = "warning",
  Notify = "notify",
  Message = "message"
}

export enum Position {
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left",
  BottomRight = "bottom-right",
  TopCenter = "top-center",
  TopLeft = "top-left",
  TopRight = "top-right"
}
