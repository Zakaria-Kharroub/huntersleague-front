import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Import HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule), // Add HttpClientModule here
    ...appConfig.providers, provideAnimationsAsync(),  // Spread existing providers from appConfig
  ]
}).catch((err) => console.error(err));
