import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmisionCfdiComponent } from './emision-cfdi.component';

describe('EmisionCfdiComponent', () => {
  let component: EmisionCfdiComponent;
  let fixture: ComponentFixture<EmisionCfdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmisionCfdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmisionCfdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
