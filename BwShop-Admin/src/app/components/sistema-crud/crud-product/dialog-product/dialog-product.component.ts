import { Categoria } from 'src/app/models/Categoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/components/sistema-crud/services/api.service';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-product.component.html',
  styleUrls: ['./dialog-product.component.css']
})

export class DialogProductComponent implements OnInit{
  public categories!: Categoria[];
  productForm !: FormGroup;
  actionBtn : string = "Salvar"
  arquivoSelecionado!: File | null
  public idSelect! : string;
  constructor(private formBuilder : FormBuilder,
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogProductComponent> ) { }

  ngOnInit(): void {
    this.getAllCategorys();
    this.productForm = this.formBuilder.group({
      name : ['' ,Validators.required],
      description : ['' ,Validators.required],
      idCategory : ['', Validators.required],
      amount : ['', Validators.required],
      price : ['', Validators.required],
      urlImage : [''],
    });
    console.log(this.editData);
    if(this.editData){
      this.actionBtn = "Atualizar";
      this.productForm.controls['name'].setValue(this.editData.name);
      this.productForm.controls['description'].setValue(this.editData.description);
      this.productForm.controls['idCategory'].setValue(this.editData.idCategory);
      this.productForm.controls['amount'].setValue(this.editData.amount);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['urlImage'].setValue(this.editData.urlImage);
      this.getProducts
    }
  }

  AddProduct(){
    if(!this.editData){
      if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Produto adicionada com sucesso");
          this.productForm.reset();
          this.dialogRef.close('Salvo');
          this.getProducts();
        },
        error:()=>{
          alert("Erro não foi possivel adicionar o Produto")
        }
      })
     }
    } else{
      this.updateProduct()
    }
  }

  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Produto atualizada com sucesso");
        this.dialogRef.close('Atualizado'),
        this.getProducts
      },
      error:()=>{
        alert("Erro não foi possivel atualizar o Produto")
      }
    })
  }


  getProducts(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        alert("Erro")
      }
    })
  }

  getAllCategorys() {
    this.api.getCategory()
      .subscribe(
        categories => {
          this.categories = categories
          console.log(this.categories)
        },
        (err) => {
          alert("Erro")
        },

      )
  }

  inputChanges(files : FileList) {
    console.log(files);
    console.log(files.item(0))
    console.log(files.item(0)?.name)

    this.arquivoSelecionado =files.item(0);
    this.api.enviarArquivo(this.arquivoSelecionado)

    .subscribe(
      nomeArquivo => {
        this.productForm.value.urlImage = nomeArquivo;
        console.log('nomeArquivo');
        console.log(nomeArquivo);
      },
      e =>{
        console.log(e.error);
      }
    )
  }
}
