import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { TitleComponent } from './app/components/title/title.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
