import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { EmployeComponent } from './employe/employe.component';
import { NompersoPipe } from './nomperso.pipe';
import { ListmaterielComponent } from './listmateriel/listmateriel.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    EmployeComponent,
    NompersoPipe,
    ListmaterielComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
