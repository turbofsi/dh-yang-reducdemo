import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { PostReducer } from './core/store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './core/store/effects/posts.effects.service';
import { UserService } from './api/api/users.service';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    WelcomeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({posts: PostReducer}),
    EffectsModule.forRoot([PostEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
