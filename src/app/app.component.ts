import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    })
  }

  private _isMenuOpen = false;
  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    document.body.style.overflow = value ? "hidden" : "";
  }

  toggleMenu(e: MouseEvent) {
    if (window.outerWidth <= 1280) {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  isDropDownOpen: boolean = false;

  toggleDropdown() {
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  isDropDownOpen2: boolean = false;

  toggleDropdown2() {
    this.isDropDownOpen2 = !this.isDropDownOpen2;
  }

  ngOnInit() {
    document.addEventListener("keydown", (e) => {
      if (e.code && e.code.toLocaleLowerCase() === "escape") {
        this.isMenuOpen = false;
      }
    });
  }
}
