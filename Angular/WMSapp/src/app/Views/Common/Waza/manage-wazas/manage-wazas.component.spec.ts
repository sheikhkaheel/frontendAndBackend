import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWazasComponent } from './manage-wazas.component';

describe('ManageWazasComponent', () => {
  let component: ManageWazasComponent;
  let fixture: ComponentFixture<ManageWazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageWazasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageWazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
