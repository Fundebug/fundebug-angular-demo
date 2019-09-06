import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as fundebug from 'fundebug-javascript';

fundebug.init({
  apikey: 'b351f9db1549fb2ecbbb79feece8ddb473f8f1dddf1090a68dc85db33075667a'
});

fundebug.test();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
