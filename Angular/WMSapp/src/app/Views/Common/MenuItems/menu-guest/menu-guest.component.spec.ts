import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGuestComponent } from './menu-guest.component';

describe('MenuGuestComponent', () => {
  let component: MenuGuestComponent;
  let fixture: ComponentFixture<MenuGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuGuestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
