import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulaCfdiComponent } from './consula-cfdi.component';

describe('ConsulaCfdiComponent', () => {
  let component: ConsulaCfdiComponent;
  let fixture: ComponentFixture<ConsulaCfdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulaCfdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulaCfdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
