import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { OtherFirstComponent } from './other-first/other-first.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent,
    OtherFirstComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { 
        path: 'first-component', 
        component: FirstComponent,
        children: [
          {
            path: 'child-a', // child route path
            component: ChildAComponent, // child route component that the router renders
          },
          {
            path: 'child-b',
            component: ChildBComponent, // another child route component that the router renders
          },
        ],
      },
      { path: 'second-component', component: SecondComponent },
      // { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
