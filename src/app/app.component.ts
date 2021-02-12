import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  menuItems: string[] = [];
  contentItems: string[] = [];
  sidenavIsOpen: boolean = true;

  constructor() {
    for (let i = 0; i < 12; i++) {
      this.menuItems.push(`Menu Item ${i}`);
    }

    for (let i = 0; i < 12; i++) {
      this.contentItems.push(`Content Item ${i}`);
    }
  }
}
