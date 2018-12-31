import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverStyle]'
})
export class HoverStyleDirective implements OnInit {

  @HostBinding('style.color') color: string;
  //@HostBinding('font.style') style: string;

  constructor() { }

  ngOnInit() {
  
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.color = 'red';
    //this.style = 'bold';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.color = 'black';
    //this.style = 'normal';
  }
}
