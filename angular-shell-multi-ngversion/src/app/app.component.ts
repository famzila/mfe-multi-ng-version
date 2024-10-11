import { Component } from '@angular/core';
import packageJson from '../../package.json';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell-multi-ng-version';
  ngVersion = packageJson.dependencies['@angular/core'];
   item: WebComponentWrapperOptions = {
    type: 'module',
    remoteEntry: `http://localhost:4202/cej/remoteEntry.js`,
    exposedModule: './web-components',
    elementName: 'mfe-cej',
  };
}
