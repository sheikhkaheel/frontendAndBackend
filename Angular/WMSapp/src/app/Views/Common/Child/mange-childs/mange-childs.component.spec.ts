import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangeChildsComponent } from './mange-childs.component';

describe('MangeChildsComponent', () => {
  let component: MangeChildsComponent;
  let fixture: ComponentFixture<MangeChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MangeChildsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MangeChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
