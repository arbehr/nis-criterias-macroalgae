import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroalgaeComponent } from './microalgae/microalgae.component';
import { MicroalgaeDetailComponent } from './microalgae-detail/microalgae-detail.component';
import { MicroalgaeVerifyComponent } from './microalgae-verify/microalgae-verify.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    MicroalgaeComponent,
    MicroalgaeDetailComponent,
    MicroalgaeVerifyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
