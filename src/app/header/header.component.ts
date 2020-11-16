import { Component, OnInit, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isSelected: boolean = false;
  @Input() companyName: string = '';
  @Input() companyProfit: number = 0.0;
  @Input() ano: number = 0;

  buttonName: string = 'Mostrar Selecionado.';
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.companyName);
  }

  showElement()
  {
    this.isSelected = !this.isSelected;
    if (this.isSelected) 
    {
      this.buttonName = 'Ocultar Selecionado.';
    } else
    {
      this.buttonName = 'Mostrar Selecionado.';
    }
  }

}
