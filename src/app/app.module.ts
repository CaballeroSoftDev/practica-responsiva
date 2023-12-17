import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Interface1Component } from './pages/interface1/interface1.component';
import { Interface2Component } from './pages/interface2/interface2.component';
import { MenuComponent } from './layout/menu/menu.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModules} from "./app-routing.module";
import {NgOptimizedImage} from "@angular/common";
import { Interface3Component } from './pages/interface3/interface3.component';
import { Interface4Component } from './pages/interface4/interface4.component';
import { Interface5Component } from './pages/interface5/interface5.component';

@NgModule({
  declarations: [
    AppComponent,
    Interface1Component,
    Interface2Component,
    MenuComponent,
    Interface3Component,
    Interface4Component,
    Interface5Component
  ],
    imports: [
      BrowserModule,
      RouterOutlet,
      RouterLink,
      AppRoutingModules,
      NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
