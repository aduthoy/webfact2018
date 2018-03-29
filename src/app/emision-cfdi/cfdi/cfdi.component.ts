import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';


@Component({
  selector: 'app-cfdi',
  templateUrl: './cfdi.component.html',
  styleUrls: ['./cfdi.component.css']
})
export class CfdiComponent implements OnInit {

  impustosGrid: GridOptions;
  cfdiDet: GridOptions;

  constructor() {
    this.impustosGrid = <GridOptions>{
      rowSelection: 'singe',
      enableColResize: true
    };

    this.impustosGrid.columnDefs = [
      {headerName: 'Tipo Impuesto', field: 'tipoImpuesto'},
      {headerName: 'Impuesto', field: 'impuesto'},
      {headerName: 'Tipo Factor', field: 'tipoFactor'},
      {headerName: 'Tasa/Cuota', field: 'tasaCuota'},
      {headerName: 'Importe', field: 'importe'}
    ];

    this.cfdiDet = <GridOptions> {
      rowSelection: 'single',
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    };

    this.cfdiDet.columnDefs = [
      {headerName: 'Cant', field: ''},
      {headerName: 'Prod/Serv SAT', field: ''},
      {headerName: 'UM SAT', field: ''},
      {headerName: 'Concepto', field: ''},
      {headerName: 'UM', field: ''},
      {headerName: 'P. Unit.', field: ''},
      {headerName: 'Importe', field: ''}
    ];

  }

  ngOnInit() {
  }

  onSeletedRow(evento: any) {}

  onGridReady(evento: any) {
    this.impustosGrid.rowData = null;
  }

  onSeletedCfdiRow(evento: any) {}

  onGridCfdiReady(evento: any) {
    this.cfdiDet.rowData = null;
  }

}
