import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento : Pensamento = {
    id :  0,
    conteudo : '',
    autoria : '',
    modelo : ''
  }

  formulario!: FormGroup

  constructor(private service: PensamentoService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['Fomulário reativo'],
      autoria: [''],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelarPensamento(){
    this.router.navigate(['/listarPensamento'])
  }

}
