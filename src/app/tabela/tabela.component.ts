import { Component, OnInit } from '@angular/core';
import { SERVICOService } from '../servico.service';
import { VEICULO } from '../veiculo';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TABELAComponent implements OnInit {

  constructor(private s: SERVICOService) { }

  ngOnInit() {
  }

}