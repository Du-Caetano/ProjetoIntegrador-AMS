import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postCategory (data : any) {
    return this.http.post<any>("http://localhost:5288/api/Category", data);
  }

  getCategory(){
    return this.http.get<any>("http://localhost:5288/api/Category");
  }

  putCategory(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5288/api/Category/"+ id ,info);

  }

  deleteCategory(id:string){
    return this.http.delete<any>("http://localhost:5288/api/Category/"+id);
  }

  //Separação

  postClient(data : any) {
    return this.http.post<any>("http://localhost:5288/api/Client/", data);
  }

  getClient(){
    return this.http.get<any>("http://localhost:5288/api/Client/");
  }

  putClient(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5288/api/Client/"+ id ,info);
  }

  deleteClient(id:string){
    return this.http.delete<any>("http://localhost:5288/api/Client/"+id);
  }

  //Separação

  postAdmin(data : any) {
    return this.http.post<any>("http://localhost:5288/api/Admin/", data);
  }

  getAdmin(){
    return this.http.get<any>("http://localhost:5288/api/Admin/");
  }

  putAdmin(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5288/api/Admin/"+ id ,info);
  }

  deleteAdmin(id:string){
    return this.http.delete<any>("http://localhost:5288/api/Admin/"+id);
  }

  //Separação

  postProduct(data : any) {
    return this.http.post<any>("http://localhost:5288/api/Product/", data);
  }

  getProduct(){
    return this.http.get<any>("http://localhost:5288/api/Product/");
  }

  putProduct(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5288/api/Product/"+ id ,info);
  }

  deleteProduct(id:string){
    return this.http.delete<any>("http://localhost:5288/api/Product/"+id);
  }

  enviarArquivo(files: File | null){
    return this.http.post("http://localhost:5288/api/Product/", files)
  }

  //Separação


  postProvider(data : any) {
    return this.http.post<any>("http://localhost:5288/api/Provider/", data);
  }

  getProvider(){
    return this.http.get<any>("http://localhost:5288/api/Provider/");
  }

  putProvider(data:any,id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>("http://localhost:5288/api/Provider/"+ id ,info);
  }

  deleteProvider(id:string){
    return this.http.delete<any>("http://localhost:5288/api/Provider/"+id);
  }

}




