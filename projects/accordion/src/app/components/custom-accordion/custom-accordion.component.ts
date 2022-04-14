import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Faq } from '../../interfaces/accordion.types';

const BODY_PADDING = 32;

@Component({
  selector: 'dlg-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss'],
})
export class CustomAccordionComponent implements OnInit {
  @Input()
  faq: Faq;
  @ViewChild('content') public content: {
    nativeElement: { scrollHeight: number };
  };

  constructor() {}

  ngOnInit(): void {}

  isCollapsed: boolean = true;

  get height(): string {
    if (this.isCollapsed) return '0px';
    const height = this.content.nativeElement.scrollHeight + BODY_PADDING;
    return height + 'px';
  }

  public toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
