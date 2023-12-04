import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent implements OnInit {

  public singupForm !: FormGroup
  constructor(private router: Router, private formBuilder : FormBuilder, private http : HttpClient) { }

  ngOnInit(): void {
    this.singupForm = this.formBuilder.group({
      nome:['',Validators.required],
      cpf:['',Validators.required],
      email:['',Validators.required],
      senha:['',Validators.required],
      telefone:['',Validators.required],
    })
  }

  singUp(){
    this.http.post<any>("http://localhost:5288/api/Client/", this.singupForm.value)
    .subscribe(res=>{
      alert("Cadastrado com sucesso");
      this.singupForm.reset();
      this.router.navigate(["/login"]);

    },err=>{
      alert("Não foi possivel concluir o cadastro")
    })
  }

  login(){
    this.router.navigate(["/login"])
  }
}