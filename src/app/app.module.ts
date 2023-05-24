import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Ionic
import { IonicModule } from '@ionic/angular';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { CountryService } from './services/country.service';
import { IonicStorageModule, Storage } from '@ionic/storage-angular'; // Import the module and the Storage interface

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), // initialize Ionic
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // initialize Firebase
    AngularFireAuthModule,
    IonicStorageModule.forRoot(), // initialize IonicStorageModule
  ],
  providers: [CountryService, Storage], // Provide the service and Storage interface here
  bootstrap: [AppComponent],
})
export class AppModule {}
