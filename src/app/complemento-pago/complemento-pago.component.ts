import { Component, OnInit } from '@angular/core';
import {GridOptions} from 'ag-grid';

@Component({
  selector: 'app-complemento-pago',
  templateUrl: './complemento-pago.component.html',
  styleUrls: ['./complemento-pago.component.css']
})
export class ComplementoPagoComponent implements OnInit {

  cfdiRel: GridOptions;

  constructor() {
    this.cfdiRel = <GridOptions>{
      rowSelection: 'single',
      enableColResize: true,
      enableSorting: true,
      enableFilter: true
    };

    this.cfdiRel.columnDefs = [
      {headerName: 'UUID', field: ''},
      {headerName: 'Folio', field: ''},
      {headerName: 'Fecha', field: ''},
      {headerName: 'Total', field: ''},
      {headerName: 'Saldo', field: ''},
      {headerName: 'Monto Pagado', field: ''}
    ];
  }

  ngOnInit() {
  }

  onGridCfdiRelReady(evento: any) {
    this.cfdiRel.rowData = null;
  }

  onSeletedCfdiRelRow(evento: any) {}

}
