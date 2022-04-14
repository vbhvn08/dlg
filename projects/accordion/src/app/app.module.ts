import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomAccordionComponent } from './components/custom-accordion/custom-accordion.component';
import { AccordionHeaderComponent } from './components/accordion-header/accordion-header.component';
import { AccordionBodyComponent } from './components/accordion-body/accordion-body.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CustomAccordionComponent,
    AccordionHeaderComponent,
    AccordionBodyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
