import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path:'product-list',component:ProductListComponent
  },
  {
    path:"product-details/:id",component:ProductDetailsComponent
  },
  {
    path:"cart-list",component:CartComponent
  },
  {
    path:"",component:ProductListComponent
  }
  ,{
      path:"confermation/:name/:totalPrice",component:ConfirmationComponent
  },
  {
    path:'',redirectTo: '/product-list', pathMatch: 'full'
  },
  {
    path:"**", redirectTo: '/product-list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
