import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DomiciliosService {

  constructor(private http: HttpClient) { }

  getAllPaises() {
    return this.http.get('http://172.16.1.66:7260/wswebfact33/service1.asmx/GetPaisesList').toPromise().then((a: any) => console.log(a));
  }
}
