import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialUiModule } from './shared/material-ui.module';
import { RouterModule, Routes } from '@angular/router';
import { BikeComponent } from './bikes/bikes.component';
import { BikeInfoComponent } from './bikesinfo/bikesinfo.component';
import { BikeService } from './bike.service';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[ BrowserModule,MaterialUiModule ,FormsModule,AppRoutingModule],
  declarations: [ AppComponent ,BikeComponent,BikeInfoComponent],
  providers:[BikeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
