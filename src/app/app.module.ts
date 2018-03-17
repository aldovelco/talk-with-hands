import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { SignComponent } from './sign/sign.component';
import { SignsService } from './signs.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DictionaryComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SignsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
