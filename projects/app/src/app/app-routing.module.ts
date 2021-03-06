import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent, DynamicLayoutComponent, MainLayoutComponent} from '@labs/common';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: DashboardComponent },
      {
        path: 'settings',
        loadChildren: () => import('projects/settings/src/lib/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'module/:id', component: DynamicLayoutComponent,
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
