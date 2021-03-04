import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../servicios/api/api.service'

@Component({
  selector: 'app-grabado-listar',
  templateUrl: './grabado-listar.component.html',
  styleUrls: ['./grabado-listar.component.css']
})
export class GrabadoListarComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getGrabados().subscribe(data => {
      console.log(data)
    })
  }

}
