import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialUiModule } from './material-ui.module';
@NgModule({
  imports:      [ 
    CommonModule,
    RouterModule,   
    ],
  exports: [ 
    CommonModule, 
    MaterialUiModule,  
  ],
  declarations:[
  ],
  
})
export class SharedModule { }