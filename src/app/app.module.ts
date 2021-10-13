import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUI/navbar/navbar.component';
import { HomeComponent } from './sharedUI/home/home.component';
import { AddTeacherComponent } from './Teacher/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './Teacher/list-teacher/list-teacher.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateTeacherComponent } from './Teacher/update-teacher/update-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddTeacherComponent,
    ListTeacherComponent,
    UpdateTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
