import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-consula-cfdi',
  templateUrl: './consula-cfdi.component.html',
  styleUrls: ['./consula-cfdi.component.css']
})
export class ConsulaCfdiComponent implements OnInit {

  searchCfdiGrid: GridOptions;

  constructor() {

    this.searchCfdiGrid = <GridOptions>{
      enableFilter: true,
      enableSorting: true,
      enableColResize: true,
      rowSelection: 'single'
    };

    this.searchCfdiGrid.columnDefs = [
      {headerName: 'Folio', field: '', width: 80},
      {headerName: 'No. Ctrl', field: '', width: 90},
      {headerName: 'T. Docto.', field: '', width: 100},
      {headerName: 'Fecha', field: '', width: 100},
      {headerName: 'RFC', field: '', width: 150},
      {headerName: 'Cliente', field: '', width: 250},
      {headerName: 'Subtotal', field: '', width: 100},
      {headerName: 'Dcto.', field: '', width: 100},
      {headerName: 'Imp. Tras.', field: '', width: 130},
      {headerName: 'Imp. Ret.', field: '', width: 130},
      {headerName: 'Total', field: '', width: 150},
      {headerName: 'Sucursal', field: ''}
    ];
  }

  ngOnInit() {
  }

  onSeletedRow(evento: any) {}

  onGridReady(evento: any) {
    this.searchCfdiGrid.rowData = null;
  }
}
