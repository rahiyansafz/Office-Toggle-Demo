import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  withEgg = false;
  LightOn = false;
  TextOn = false;
  OnLightOn(): void {
    this.LightOn = !this.LightOn;
  }

  OnTextOn(): void {
    this.TextOn = !this.TextOn;
  }

  myEgg(): void {
    this.withEgg = !this.withEgg;
  }
}
