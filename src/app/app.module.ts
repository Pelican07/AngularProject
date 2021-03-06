import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayGuestsDirective } from './display-guests.directive';
import { HoverStyleDirective } from './hover-style.directive';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    MenuComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    HoverStyleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
