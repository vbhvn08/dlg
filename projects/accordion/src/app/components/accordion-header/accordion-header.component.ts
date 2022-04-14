import { Component, Input, OnInit } from '@angular/core';
import { Faq } from '../../interfaces/accordion.types';

@Component({
  selector: 'dlg-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss'],
})
export class AccordionHeaderComponent implements OnInit {
  @Input()
  faq: Faq;

  constructor() {}

  ngOnInit(): void {}
}
