import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { CategoryComponent } from './components/category/category.component';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponent } from './components/success/success.component';
import { LandingPageBWComponent } from './components/landing-page-bw/landing-page-bw.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent,},
  {path: '', component: LandingPageBWComponent},
  {path: '', redirectTo: '/bw', pathMatch: 'full'},
  {path:'cadastro', component: TelaCadastroComponent},
  {path:'login', component: TelaLoginComponent},
  {path:'category', component: CategoryComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path: 'payment', component: PaymentComponent,},
  {path: 'success', component: SuccessComponent,},
  {path: 'sobre', component: SobreComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
