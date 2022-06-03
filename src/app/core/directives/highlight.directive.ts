import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() fragment: string;

  constructor(
    private _el: ElementRef,
  ) { }

  
  ngOnChanges(): void {
    const div = this._el.nativeElement as HTMLDivElement;
    const text = this._highlightSelectedText(div.innerHTML, this.fragment);
    div.innerHTML = text;
  }

  private _highlightSelectedText(html: string, fragment: string): string {
    const newHtml = html.split(' ')

    newHtml.forEach(word => {
      if(word.includes(fragment)) {
        const index = newHtml.indexOf(fragment);
        newHtml[index] = `<mark>${fragment}</mark>`
      }
    })
    
    return newHtml.join(' '); 
  };

}
