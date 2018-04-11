import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {ListingsComponent} from './listings/listings.component';
import {ListingService} from './services/listing/listing.service';

@NgModule({
    declarations: [
        AppComponent,
        ListingsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [ListingService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
