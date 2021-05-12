import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// import { Diagnostic } from '@ionic-native/diagnostic/ngx';
// import { File } from '@ionic-native/file/ngx';
// import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { FileTransfer } from '@ionic-native/file-transfer/ngx';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    // InAppBrowser, 
    // Diagnostic,
    // FileOpener,
    // FileTransfer,
    // File,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
