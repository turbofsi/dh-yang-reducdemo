import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UsersModule } from './users/users.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
   {path: 'welcome', component: WelcomeComponent},
   {path: 'contact', component: ContactComponent},
   {path: 'posts', loadChildren: 'app/users/users.module#UsersModule'},
   {path: '', redirectTo: 'welcome', pathMatch: 'full'},
   {path: '**', component: NotfoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
