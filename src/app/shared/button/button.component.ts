import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"]
})
export class ButtonComponent {
  @Input() class: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter();

  onClickButton(event) {
    this.onClick.emit(event);
  }
}
