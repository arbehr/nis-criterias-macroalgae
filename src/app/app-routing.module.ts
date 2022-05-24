import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicroalgaeComponent } from './microalgae/microalgae.component';
import { MicroalgaeVerifyComponent } from './microalgae-verify/microalgae-verify.component';
import { MicroalgaeDetailComponent } from './microalgae-detail/microalgae-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: MicroalgaeComponent },
  { path: 'verify', component: MicroalgaeVerifyComponent },
  { path: 'detail/:id', component: MicroalgaeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
