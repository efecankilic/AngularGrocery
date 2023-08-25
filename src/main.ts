// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';

import { HomeComponent } from './app/home/home.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

import { provideHttpClient } from '@angular/common/http';
bootstrapApplication(HomeComponent, {
  providers: [provideRouter(routeConfig), provideHttpClient()],
});
