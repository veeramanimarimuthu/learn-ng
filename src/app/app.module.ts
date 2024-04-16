import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

@NgModule({ //NgModule: decorator function
  declarations: [ //declarations: This property is an array of the components, directives, and pipes that belong to this module.
    AppComponent, HomeComponent, AboutComponent, BlogComponent, ContactComponent, ServicesComponent // Component is nothing but div
  ],
  imports: [ //his property is an array of other modules whose exported classes are needed by component templates declared in this module.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //This property is an array of dependency injection providers for services that the module contributes to the global collection of services.
  bootstrap: [AppComponent]
})
export class AppModule { }
