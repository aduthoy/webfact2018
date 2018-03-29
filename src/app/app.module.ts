import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmisionCfdiComponent } from './emision-cfdi/emision-cfdi.component';
import { CfdiComponent } from './emision-cfdi/cfdi/cfdi.component';
import { AgGridModule} from 'ag-grid-angular';
import { ConsulaCfdiComponent } from './consula-cfdi/consula-cfdi.component';
import { RouterModule, Routes} from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { DomiciliosService } from './services/domicilios.service';
import { ProductosComponent } from './productos/productos.component';
import { ComplementoPagoComponent } from './complemento-pago/complemento-pago.component';

const appRouter: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'emision-cfdi', component: EmisionCfdiComponent},
  {path: 'consulta-cfdi', component: ConsulaCfdiComponent},
  {path: 'clientes', component: ClientesComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'complemento-pago', component: ComplementoPagoComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    EmisionCfdiComponent,
    CfdiComponent,
    ConsulaCfdiComponent,
    ClientesComponent,
    ProductosComponent,
    ComplementoPagoComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot(appRouter),
    HttpClientModule
  ],
  providers: [DomiciliosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
