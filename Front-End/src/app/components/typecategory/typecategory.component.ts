import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-typecategory',
  templateUrl: './typecategory.component.html',
  styleUrls: ['./typecategory.component.css']
})
export class TypecategoryComponent implements OnInit {
ProductList : any ;
filterCategory: any;
searchKey:string ="";
public searchTerm: string = "";
public searchT = new BehaviorSubject<string>("");
// public carrinhoCompras! : CarrinhoComponent

  constructor(private api : ApiService, private cartService : CartService) { }

  ngOnInit(): void {

    this.api.getCategory()
    .subscribe(res=>{
      this.filterCategory = res;
      console.log(res);
    })

  
  }}