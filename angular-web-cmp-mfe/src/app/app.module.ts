import { DoBootstrap, inject, Inject, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { APP_BASE_HREF } from '@angular/common';
import { ARouteComponent } from './components/a-route/a-route.component';
import { Router } from '@angular/router';
import { BRouteComponent } from './components/b-route/b-route.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //   {
    //   provide: APP_BASE_HREF, useValue: 'elt-mfe1'
    // }
],
  bootstrap: []
})
export class AppModule {
  private readonly injector = inject(Injector);
  private readonly router = inject(Router);

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('elt-mfe1', element);

    // this.router.initialNavigation();
    // this.router.navigate(['a-route']);
  }
 }
