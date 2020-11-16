import {Component,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {Data} from '../models/data'
import { randomInt } from 'crypto';


/**
 * @title Table with sorting
 */
@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent{

  data: Data[] = [
    {
      Id: 0,
      Nome: 'Beltrano EIRELLI',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2019,
    },
    {
      Id: 1,
      Nome: 'Fulana S/A',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2019,
    },
    {
      Id: 2,
      Nome: 'Ciclano Ltda',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2019,
    },
    {
      Id: 3,
      Nome: 'Lorem Ipsum MEI',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2019,
    },
    {
      Id: 4,
      Nome: 'Beltrano EIRELLI',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2018,
    },
    {
      Id: 5,
      Nome: 'Lorem Ipsum MEI',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2019,
    },
    {
      Id: 6,
      Nome: 'Fulana S/A',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2018,
    },
    {
      Id: 7,
      Nome: 'Ciclano Ltda',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2018,
    },
    {
      Id: 8,
      Nome: 'Lorem Ipsum MEI',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2018,
    },
    {
      Id: 9,
      Nome: 'Lorem Ipsum MEI',
      Entrada: this.getRandomInt(0,1000000),
      Saida: this.getRandomInt(0,1000000),
      Ano: 2017,
    },
  ];
  

  isSelected: boolean = false;
  companyName: string = '';
  companyProfit: number = 0;
  count: number = 0;
  ano: number = 0;
  displayedColumns: string[] = ['Id', 'Nome', 'Entrada', 'Saida', 'Ano'];
  dataSource = new MatTableDataSource(this.data);
  @ViewChild(MatSort) sort: MatSort;

  getElement(element)
  {
    //console.log(element.name);
    this.companyName = element.Nome;
    this.companyProfit = (element.Entrada - element.Saida);
    this.ano = element.Ano;
    this.isSelected = true;
    this.count++;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
