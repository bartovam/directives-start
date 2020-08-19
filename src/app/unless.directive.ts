import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) { // bind property unless and execute method set
    if (!condition) { // if condition is not true
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear(); // to remove everything from this DOM
    }
  }
  // template can be injected by templateRef type TemplateRef - any is a generic type; is a what
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }
  // is a where - private vcRef
}
