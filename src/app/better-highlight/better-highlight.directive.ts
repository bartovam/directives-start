import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  // tslint:disable-next-line:max-line-length
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'; /*we can pass a string defining to which property of hosting element we want to bind*/

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');*/
  }

/*  hostlistener decorator, execute method, this can be triggered when some event occured, event is specified as argument as a string
  hostlistener takes argument name as a input*/
  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');*/ /*po najeti kurzorem mysi se radek prebarvi na modro*/
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');*/
    this.backgroundColor = 'transparent';
  }

}
