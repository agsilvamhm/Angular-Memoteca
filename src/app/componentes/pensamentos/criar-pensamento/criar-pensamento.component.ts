import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';


@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento : Pensamento = {
    id : 1 ,
    conteudo : 'Aprendendo Angular',
    autoria : 'Dev',
    modelo : 'Modelo1'
  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe()
  }

  cancelarPensamento(){
    alert("clicou no botão cancelar!")
  }

}
