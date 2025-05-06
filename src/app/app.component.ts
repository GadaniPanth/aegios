import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private _isMenuOpen = false;
  get isMenuOpen(): boolean {
    return this._isMenuOpen;
  }

  set isMenuOpen(value: boolean) {
    this._isMenuOpen = value;
    document.body.style.overflow = value ? 'hidden' : '';
  }

  toggleMenu(e: MouseEvent){
    this.isMenuOpen = !this.isMenuOpen;
  }

  isDropDownOpen: boolean = false;

  toggleDropdown(){
    this.isDropDownOpen = !this.isDropDownOpen;
  }
  isDropDownOpen2: boolean = false;

  toggleDropdown2(){
    this.isDropDownOpen2 = !this.isDropDownOpen2;
  }

  ngOnInit(){
    document.addEventListener('keydown', (e)=>{
      if(e.code.toLocaleLowerCase() == 'escape'){
        this.isMenuOpen = false;
      }
    })
  }

}
