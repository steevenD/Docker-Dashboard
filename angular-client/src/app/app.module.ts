import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { ConteneursComponent } from './conteneurs/conteneurs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreerConteneurComponent } from './creer-conteneur/creer-conteneur.component';
import { VariablesEnvComponent } from './variables-env/variables-env.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { VariableEnvComponent } from './variable-env/variable-env.component';
import { ModalLogsComponent } from './modal-logs/modal-logs.component';
import { ModalDetailsComponent } from './modal-details/modal-details.component';
import { ModalErreurComponent } from './modal-erreur/modal-erreur.component';

const appRoutes: Routes = [
  {path: 'images', component: ImagesComponent },
  {path: 'conteneurs', component: ConteneursComponent },
  {path: 'creerConteneur', component: CreerConteneurComponent },
  { path: '', component: ConteneursComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ConteneursComponent,
    CreerConteneurComponent,
    VariablesEnvComponent,
    VariableEnvComponent,
    ModalLogsComponent,
    ModalDetailsComponent,
    ModalErreurComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,    
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),    
  ],
  exports : [
    BrowserAnimationsModule,    
    MatProgressSpinnerModule,
    MatDialogModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalLogsComponent, ModalDetailsComponent, ModalErreurComponent]
})
export class AppModule { }
