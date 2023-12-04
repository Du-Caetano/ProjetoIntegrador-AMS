import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],
})
export class SuccessComponent implements OnInit {
  constructor(
    private router: Router,
    private productservice: ProductService
  ) {}

  ngOnInit(): void {}

  goBackToHome() {
    this.productservice.clearProducts();
    this.router.navigate(['/']);
  }
}
