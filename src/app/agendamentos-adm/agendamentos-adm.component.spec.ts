import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosAdmComponent } from './agendamentos-adm.component';

describe('AgendamentosAdmComponent', () => {
  let component: AgendamentosAdmComponent;
  let fixture: ComponentFixture<AgendamentosAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentosAdmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgendamentosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
