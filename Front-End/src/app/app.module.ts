import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FilterPipe } from './shared/filter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PromoComponent } from './components/promo/promo.component';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SuccessComponent } from './components/success/success.component';
import { TypecategoryComponent } from './components/typecategory/typecategory.component';
import { LandingPageBWComponent } from './components/landing-page-bw/landing-page-bw.component';
import { SobreComponent } from './components/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    RodapeComponent,
    TelaCadastroComponent,
    TelaLoginComponent,
    CarouselComponent,
    FilterPipe,
    PromoComponent,
    CategoryComponent,
    CarrinhoComponent,
    PaymentComponent,
    SuccessComponent,
    TypecategoryComponent,
    LandingPageBWComponent,
    SobreComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPayPalModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
