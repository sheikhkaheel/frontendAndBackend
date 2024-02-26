import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuParentComponent } from './menu-parent.component';

describe('MenuParentComponent', () => {
  let component: MenuParentComponent;
  let fixture: ComponentFixture<MenuParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
