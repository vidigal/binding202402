import { Component } from '@angular/core';
import { OnInit } from '../../../node_modules/@angular/core/index';

@Component({
  selector: 'app-propertyb',
  templateUrl: './propertyb.component.html',
  styleUrl: './propertyb.component.scss'
})
export class PropertybComponent implements OnInit {

  urlDaImagem: string = "https://4.bp.blogspot.com/-F2J-i2wKiwk/V843WYclPXI/AAAAAAAAW8Q/B9WjwBLgDW0YLrg5_k0XyQaLuUHZ1-F2wCLcB/s1600/s.jpg";

  marcado: boolean = false;

  ngOnInit(): void {
    setInterval(() => {
      this.marcado = !this.marcado;
    }, 1000)
  }
}
