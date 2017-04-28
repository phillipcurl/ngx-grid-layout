import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGridLayoutModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, NgxGridLayoutModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}