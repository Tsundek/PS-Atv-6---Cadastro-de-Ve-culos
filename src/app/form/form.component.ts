import { Component, OnInit } from '@angular/core';
import { SERVICOService } from '../servico.service';
import { VEICULO } from '../veiculo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FORMComponent implements OnInit {
  private marcas:string[] = ['','Fiat','Ford','GM','Volkswagen'];
  private veiculo:VEICULO;

  constructor(private servico: SERVICOService) { }

  ngOnInit() {
    this.reset();
  }

  salvar():void{
    this.servico.add(this.veiculo);
    this.reset();
  }

  reset():void{
    this.veiculo = {
      marca: undefined,
      modelo: undefined,
      valor: undefined
    };
  }
}