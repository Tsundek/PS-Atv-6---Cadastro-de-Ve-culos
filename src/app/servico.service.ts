import { Injectable } from '@angular/core';
import { VEICULO } from './veiculo';

@Injectable()
export class SERVICOService {
  public lista:VEICULO[] = [];
  public count: number = 0;
  constructor() { }

  add(veiculo:VEICULO): void{
    let aux: VEICULO = {
      marca: veiculo.marca,
      modelo: veiculo.modelo,
      valor: veiculo.valor
  };
  this.lista.push(veiculo);
  this.count+=1;
  }
}