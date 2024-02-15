import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWazaComponent } from './add-waza.component';

describe('AddWazaComponent', () => {
  let component: AddWazaComponent;
  let fixture: ComponentFixture<AddWazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWazaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
