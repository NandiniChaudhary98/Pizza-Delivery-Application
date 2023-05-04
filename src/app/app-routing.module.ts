import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdGuard } from './auth-gaurd.guard';
import { AuthGaurdService } from './auth-gaurd.service';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PizzaCartComponent } from './pizza-cart/pizza-cart.component';
import { PizzaViewComponent } from './pizza-view/pizza-view.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:"",
    component: DashboardComponent
  },
  {
    path:"home",
    component: PizzaViewComponent
  },
  {
    path:"register",
    component:RegistrationComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"pizzas",
    component:PizzaViewComponent
  },
  {
    path:"pizzas/:pizzaId",
    
    component:PizzaCartComponent,
    canActivate:[AuthGaurdGuard]
  },
  {
    path:"cart",
    component: CartComponent
  },
  {
    path:"**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
