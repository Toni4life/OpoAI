import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { TestPagePage } from './app/pages/test-page.page';

const routes: Routes = [
  { path: 'test', component: TestPagePage },
  { path: '', redirectTo: 'test', pathMatch: 'full' },
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(routes)
    )
  ]
});
