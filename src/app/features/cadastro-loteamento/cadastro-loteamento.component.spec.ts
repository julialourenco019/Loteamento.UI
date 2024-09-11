import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLoteamentoComponent } from './cadastro-loteamento.component';

describe('CadastroLoteamentoComponent', () => {
  let component: CadastroLoteamentoComponent;
  let fixture: ComponentFixture<CadastroLoteamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroLoteamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroLoteamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
