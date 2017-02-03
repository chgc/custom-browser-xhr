import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BrowserXhr } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CustomBrowserXhrService } from './custom-browser-xhr.service';
import { ProgressService } from './progress.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProgressService,    
    { provide: BrowserXhr, useClass: CustomBrowserXhrService },
  ],
  bootstrap: [AppComponent,
  ]
})
export class AppModule { }
