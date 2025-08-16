import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelDataByCityComponent } from './excel-data-by-city.component';

describe('ExcelDataByCityComponent', () => {
  let component: ExcelDataByCityComponent;
  let fixture: ComponentFixture<ExcelDataByCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcelDataByCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelDataByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
