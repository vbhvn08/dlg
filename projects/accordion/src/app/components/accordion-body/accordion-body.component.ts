import { Component, Input, OnInit } from '@angular/core';
import { Faq } from '../../interfaces/accordion.types';

@Component({
  selector: 'dlg-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss'],
})
export class AccordionBodyComponent implements OnInit {
  @Input()
  faq: Faq;

  constructor() {}

  ngOnInit(): void {}
}
