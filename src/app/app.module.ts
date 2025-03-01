import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { CardComponent } from './card/card.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';
import { ApartmentsByResidenceComponent } from './apartments-by-residence/apartments-by-residence.component';
import { AddApartmentComponent } from './add-apartment/add-apartment.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceFormComponent } from './residence-form/residence-form.component';
import {httpClientModule}from '@angular/common/HTTP'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResidencesComponent,
    HomeComponent,
    NotFoundComponent,
    ResidenceDetailsComponent,
    ApartmentsComponent,
    CardComponent,
    AddResidenceComponent,
    ApartmentsByResidenceComponent,
    AddApartmentComponent,
    FooterComponent,
    ResidenceFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    httpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
