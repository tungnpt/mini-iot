import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePiDataComponent } from './device-pi-data.component';

describe('DevicePiDataComponent', () => {
  let component: DevicePiDataComponent;
  let fixture: ComponentFixture<DevicePiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicePiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicePiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
