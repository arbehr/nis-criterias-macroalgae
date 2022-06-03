import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacroalgaeComponent } from './macroalgae/macroalgae.component';
import { MacroalgaeVerifyComponent } from './macroalgae-verify/macroalgae-verify.component';
import { MacroalgaeDetailComponent } from './macroalgae-detail/macroalgae-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: MacroalgaeComponent },
  { path: 'verify', component: MacroalgaeVerifyComponent },
  { path: 'verify/:id', component: MacroalgaeVerifyComponent },
  { path: 'detail/:id', component: MacroalgaeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
