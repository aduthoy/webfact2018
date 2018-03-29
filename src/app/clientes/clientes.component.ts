import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';
import {DomiciliosService} from '../services/domicilios.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientesGrid: GridOptions;
  public accion: number;

  constructor(private svrDomicilios: DomiciliosService) {
    this.clientesGrid = <GridOptions> {
      rowSelection: 'single',
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    };

    this.clientesGrid.columnDefs = [
      {headerName: 'No. CLiente', field: '', width: 130},
      {headerName: 'RFC', field: '', width: 130},
      {headerName: 'Nombre / Razón Social', field: '', width: 250},
      {headerName: 'Estatus', field: '', width: 90},
      {headerName: 'email', field: '', width: 200},
      {headerName: 'Envio CFDi', field: '', width: 130},
    ];

    this.svrDomicilios.getAllPaises();

  }

  ngOnInit() {
    this.accion = 0;
  }

  onSeletedRow(evento: any) {}

  onGridReady(evento: any) {
    this.clientesGrid.rowData = [];
  }

  newClic() {
    this.accion = 1;
  }

  ediClick() {
    this.accion = 2;
  }

  inactivarClic() {}

  cancelFrm() {
    this.accion = 0;
    this.clientesGrid.rowData = null;
  }

}
