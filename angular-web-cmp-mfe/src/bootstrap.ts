import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// if (!customElements.get('app-root')) {
  // platformBrowserDynamic().bootstrapModule(AppModule)
  // .catch(err => console.error(err));
// }

import { bootstrap } from '@angular-architects/module-federation-tools';

bootstrap(AppModule, {
  production: true,
  appType: 'microfrontend',
});
