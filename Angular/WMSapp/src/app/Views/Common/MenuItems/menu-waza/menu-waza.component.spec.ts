import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuWazaComponent } from './menu-waza.component';

describe('MenuWazaComponent', () => {
  let component: MenuWazaComponent;
  let fixture: ComponentFixture<MenuWazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuWazaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuWazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
