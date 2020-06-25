import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({ // {} pass an object to configure the directive
  selector: '[appBasicHighLight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
