import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorLoadComponent } from './error-load.component';

describe('ErrorLoadComponent', () => {
  let component: ErrorLoadComponent;
  let fixture: ComponentFixture<ErrorLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
