import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'inherit';
  @Input('appBetterHighlight') highlightColor = 'cornflowerBlue';
  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cornflowerBlue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'inherit');
    this.backgroundColor = this.defaultColor;
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'cornflowerBlue');
  }
}
