import { AppComponent } from './app.component';
import { JobOfferListComponent } from './job-offer-list/job-offer-list.component';
import { JobOfferFormComponent } from './job-offer-form/job-offer-form.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/module.d-CnjH8Dlt';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent,
    JobOfferListComponent,
    JobOfferFormComponent,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
