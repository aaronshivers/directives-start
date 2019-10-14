import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'inherit';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cornflowerBlue');
    this.backgroundColor = 'cornflowerBlue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'inherit');
    this.backgroundColor = 'transparent';
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cornflowerBlue');
  }
}
