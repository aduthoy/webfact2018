import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productosGrid: GridOptions;

  public accion = 0;

  constructor() {

    this.productosGrid = <GridOptions> {
      rowSelection: 'single',
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    };

    this.productosGrid.columnDefs = [
      {headerName: 'Clave', field: '', width: 130},
      {headerName: 'Descripcion', field: '', width: 250},
      {headerName: 'Clave SAT', field: '', width: 130},
      {headerName: 'Prod/Serv SAT', field: '',},
      {headerName: 'UM', field: '', width: 90},
      {headerName: 'UM SAT', field: '', width: 200},
      {headerName: 'UMD SAT', field: ''},
      {headerName: 'Envio CFDi', field: '', width: 130},
    ];

  }

  ngOnInit() {
  }

  onSeletedRow(evento: any) { }

  onGridReady(evento: any) {
    this.productosGrid.rowData = null;
  }

  newClick() {
    this.accion = 1;
  }

  ediClick() {
    this.accion = 2;
  }

  cancelFrm() {
    this.productosGrid.rowData = null;
    this.accion = 0;
  }

}
