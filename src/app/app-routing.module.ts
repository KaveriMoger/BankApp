import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { SavingsAdvisorComponent } from './savings-advisor/savings-advisor.component';
import { AuthService } from './auth.service';


const routes: Routes = [
 {path: '', redirectTo: '/login',pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent},
 {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
 {path: 'savings_advisor', component: SavingsAdvisorComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
