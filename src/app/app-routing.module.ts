import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { BlankLayoutComponent } from './shared/components/layouts/blank-layout/blank-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
  },
  {
    path: 'user',
    component: UserLayoutComponent,
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
