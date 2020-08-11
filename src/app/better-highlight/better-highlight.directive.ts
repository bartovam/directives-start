import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent'; /*property binding*/
  @Input('appBetterHighlight') highlightColor = 'blue';
  /*bind this from outside - from template app.component.html bind to defaultColor*/
  // tslint:disable-next-line:max-line-length
  @HostBinding('style.backgroundColor') backgroundColor: string; /*= this.defaultColor;*/ /*we can pass a string defining to which property of hosting element we want to bind*/

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');*/
  }

/*  hostlistener decorator, execute method, this can be triggered when some event occured, event is specified as argument as a string
  hostlistener takes argument name as a input*/
  @HostListener('mouseenter') mouseover(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');*/ /*po najeti kurzorem mysi se radek prebarvi na modro*/
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');*/
    /*this.backgroundColor = 'transparent';*/
    this.backgroundColor = this.defaultColor;
  }

}
