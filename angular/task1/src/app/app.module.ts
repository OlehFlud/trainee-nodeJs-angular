import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { CurrencyPipe } from './currency.pipe';
import { CreateHouseComponent } from './component/create-house/create-house.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ShowAllComponent } from './component/show-all/show-all.component';
import { SearchComponent } from './component/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPipe,
    CreateHouseComponent,
    LoginComponent,
    RegisterComponent,
    ShowAllComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
