import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { ChildComponent } from './child/child.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
    declarations: [
        AppComponent,
        CribListingComponent,
        ChildComponent,
        DynamicComponentComponent,
        AlertComponent
    ],
    entryComponents: [AlertComponent],

    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
