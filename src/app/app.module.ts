import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './profile/profile.component';
import { DateCountPipe } from './date-count.pipe';
import { BorderDirective } from './border.directive';
import { ProfileComponent } from './profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DateCountPipe,
    BorderDirective,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
