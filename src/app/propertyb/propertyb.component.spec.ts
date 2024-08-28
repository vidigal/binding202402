import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybComponent } from './propertyb.component';

describe('PropertybComponent', () => {
  let component: PropertybComponent;
  let fixture: ComponentFixture<PropertybComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertybComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
