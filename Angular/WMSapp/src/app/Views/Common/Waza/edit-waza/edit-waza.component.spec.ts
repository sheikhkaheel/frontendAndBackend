import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWazaComponent } from './edit-waza.component';

describe('EditWazaComponent', () => {
  let component: EditWazaComponent;
  let fixture: ComponentFixture<EditWazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditWazaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditWazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
