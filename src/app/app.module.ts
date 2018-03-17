import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { SignComponent } from './sign/sign.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    DictionaryComponent,
    SignComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
