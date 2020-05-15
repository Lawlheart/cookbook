import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NavbarComponent,
  InternProfileComponent,
  InternFormComponent,
  NexusComponent,
  TailwindDemoComponent,
} from './component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InternProfileComponent,
    InternFormComponent,
    NexusComponent,
    TailwindDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
