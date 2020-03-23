import { PagesModule } from './views/pages/pages.module';
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
    children: [{
      path: '',
      loadChildren: () => import('./views/pages/pages.module').then(m => m.PagesModule)
    }]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
    }]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [{
      path: 'notes',
      loadChildren: () => import('./views/notes/notes.module').then(m => m.NotesModule)
    }]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: 'posts',
      loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
