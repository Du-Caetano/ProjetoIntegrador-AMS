import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
ProductList : any ;
filterCategory: any;
searchKey:string ="";
public searchTerm: string = "";
public searchT = new BehaviorSubject<string>("");
// public carrinhoCompras! : CarrinhoComponent

  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {

    this.api.getProduct()
    .subscribe(res=>{
      this.ProductList = res;
      this.filterCategory = res;
      console.log(res);
      

      this.ProductList.forEach((a: any) => {
        if (a.idCategory === "") {
          a.idCategory === ""
        }
      });
      console.log(res);
    })

  this.searchT.subscribe((val: any) => {
    this.searchKey = val;
  })
}

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.searchT.next(this.searchTerm);
  }

  filter(category: string) {
    this.filterCategory = this.ProductList
      .filter((a: any) => {
        if (a.idCategory === category || category === '') {
          return a;
        }
      })
  }
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
}