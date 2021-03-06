import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacroalgaeComponent } from './macroalgae/macroalgae.component';
import { MacroalgaeVerifyComponent } from './macroalgae-verify/macroalgae-verify.component';
import { MacroalgaeDetailComponent } from './macroalgae-detail/macroalgae-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: MacroalgaeComponent },
  { path: 'verify', component: MacroalgaeVerifyComponent },
  { path: 'verify/:id', component: MacroalgaeVerifyComponent },
  { path: 'detail/:id', component: MacroalgaeDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
