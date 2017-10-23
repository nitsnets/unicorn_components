import { UnicornComponentsTestModule } from './test.module';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(UnicornComponentsTestModule).catch(err => console.log(err));

