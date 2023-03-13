import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos=[
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo2'
      },
      {
        conteudo: 'Minha propriedade é decorada com @Input()',
        autoria: 'Componente filho',
        modelo: 'modelo3'
        },
        {
          conteudo: 'Vigie seus pensamentos, pois eles se tornam palavras. Vigie suas palavras, pois elas se tornam ações. Cuidado com suas ações, porque elas se tornam hábito. Cuidado com seus hábitos, porque eles se tornam seu caráter.',
          autoria: 'Componente filho',
          modelo: 'modelo3'
          },
          {
            conteudo: 'Extenso é o pensamento, imensurável sentimento da dor que cobre o mundo e você diz que não ta vendo, espero mil respostas as feridas estão expostas, o ser humano no abandono a juventude vira as costas reflexão cruel, o gosto amargo do fel, a alienação por aqui passou e fez o seu papel, perdidos sem perspectiva a humanidade assim caminha a beira do abismo ignorando a auto-estima',
            autoria: 'Componente filho',
            modelo: 'modelo3'
            },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
