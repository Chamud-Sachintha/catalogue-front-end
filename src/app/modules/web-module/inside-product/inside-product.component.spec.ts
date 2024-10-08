import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideProductComponent } from './inside-product.component';

describe('InsideProductComponent', () => {
  let component: InsideProductComponent;
  let fixture: ComponentFixture<InsideProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsideProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsideProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
