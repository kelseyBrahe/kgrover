import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  burger: any;
  currentColor: any;
  elements: any;
  windowHeight: any;
  colorTriggers: any;
  check: any;
  text: any;

  constructor() { 
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => {this.scroll()}, true);
  }

  ngOnInit() {
    this.spinner();
  }

  /**
   * This method changes the color of the menu toggler when it reaches a given point on the screen.
   * @param top The start point for the color change.
   * @param bottom The end point for the color change.
   * @param color1 The original color.
   * @param color2 The color to change to.
   */
  scroll = (): void => {
    if (!this.check.checked) {
      this.colorTriggers.forEach((trigger: any) => {
        let top = trigger.getBoundingClientRect().top + window.scrollY;
        let bottom = top + trigger.getBoundingClientRect().bottom + window.scrollY;
        if(window.scrollY >= top && window.scrollY <= bottom) {
          this.burger.style.backgroundColor = trigger.getAttribute("togglerColor");
          this.currentColor = trigger.getAttribute("togglerColor");
        }
      })
    }
  }

  /**
   * This method reverts the color of the menu when the user closes the expanded navigation.
   */
  revert = (): void => {
    console.log("revert called");
    if (this.check.checked) {
      this.burger.style.backgroundColor = "transparent";
    } else {
      this.burger.style.backgroundColor = this.currentColor;
    }
  }

  initPositions = (): void => {
    this.check = document.getElementById("menu-checkbox") as HTMLInputElement;
    this.burger = document.getElementById("menu-toggler");

    this.elements = Array.from(document.querySelectorAll('.hidden'));
    this.colorTriggers = Array.from(document.querySelectorAll('.changeToggler'));
    this.windowHeight = window.innerHeight;
  }

  checkPosition = (): void => {
    for(let i=0; i < this.elements.length; i++){
      let element = this.elements[i];
      let positionFromTop = this.elements[i].getBoundingClientRect().top;
      let animation = element.getAttribute("animate_me");
      let delay = element.getAttribute("animation_delay");
      if (positionFromTop - this.windowHeight <= 0) {
        if(delay !== null){
          setTimeout(() => {
            element.classList.add(animation);
            element.classList.remove('hidden');
          }, delay);
        } else {
          element.classList.add(animation);
          element.classList.remove('hidden');
        }
      }
    }
  }

  spinner() {
    const width = window.innerWidth;
    var TO = 20;
    this.text = document.querySelector('.text p');

    if (width > 913 && width < 1199) {
        TO = 25;
    } else if (width > 767 && width <= 913) {
        TO = 26;
    } else if (width > 500 && width <= 767) {
        TO = 35;
    } else if (width > 0 && width <= 500) {
        TO = 45;
    } else {
        TO = 20;
    }

    this.text.innerHTML = this.text.innerText.split("").map(
        (char:any, i:any) => 
            `<span style="
                transform: rotate(${i * 6}deg); 
                position: absolute; 
                left: 50%;
                transform-origin: 0 ${TO}vw;
            ">${char}</span>`
    ).join("");
  }
}

