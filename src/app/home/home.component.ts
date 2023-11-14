import { Component, ElementRef, ViewChild } from '@angular/core';

declare function spinner(text:Element | null): void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('spinnerT') spinnerT: ElementRef;

  constructor() {
    const p = "HTML - CSS - JS - Angular JS - Python - Linux - SQL - Git -";

    document.addEventListener("DOMContentLoaded", () => {
        var text:Element | null;
        if (document.querySelector('.text p') !== null) {
          text = document.querySelector('.text p');
        } else {
          text = null;
        }

        spinner(text);
    });
  
    window.onresize = () => {
      this.spinnerT.nativeElement.innerHTML = p;
      const text = document.querySelector('.text p');
      spinner(text);
    }
  }
}
