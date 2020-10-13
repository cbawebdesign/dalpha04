import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StrategyComponent} from './strategy/strategy.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {DisclaimersComponent} from './disclaimers/disclaimers.component';
import {OurteamComponent} from './ourteam/ourteam.component';
import { DalphateamComponent } from './dalphateam/dalphateam.component';
import { DalphaportfolioComponent } from './dalphaportfolio/dalphaportfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import {ResponsibilityComponent} from 'src/app/pages/responsibility/responsibility.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
//import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { VerifyComponent } from 'src/app/pages/verify/verify.component';
import {  VerifieduserComponent } from 'src/app/pages/verifieduser/verifieduser.component';
import { GetverifiedComponent } from './getverified/getverified.component';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  {path:'strategy', component: StrategyComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'disclaimers', component: DisclaimersComponent},
  {path:'ourteam', component: OurteamComponent},
  {path:'dalphateam', component: DalphateamComponent},
  {path:'dalphaportfolio', component: DalphaportfolioComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'responsibility', component: ResponsibilityComponent},
  { path: 'dashboard', component: DashboardComponent,  },
  //{path: 'sign-up', component: SignUpComponent},
  { path: 'verify', component: VerifyComponent,  },
  { path: 'verifieduser', component: VerifieduserComponent,  },
  { path: 'getverified', component: GetverifiedComponent,  },

  {path: 'login', component: LoginComponent,


  data: {
    externalUrl: "https://dashboard-bd4c8.web.app/pages/dashboard"
  }}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
