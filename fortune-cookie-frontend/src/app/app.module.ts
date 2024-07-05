import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuoteService } from './quote.service';

@NgModule({
    declarations: [
        AppComponent,
        QuoteDisplayComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        QuoteDisplayComponent
    ],
    providers: [
        QuoteService,
        //provideHttpClient(withInterceptorsFromDi())
        HttpClient
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }