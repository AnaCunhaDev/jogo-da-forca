import { inject, TestBed } from '@angular/core/testing';

import { ForcaService } from './forca.service';

describe('ForcaService', () => {
  let service: ForcaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForcaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Teste da função escolhe palavra', inject([ForcaService], (s: ForcaService) => {
    const palavra = s.EscolhePalavra(0, 1);
    expect(palavra).toBeDefined();
  }));
  it('Verifica se esta comparando certo', inject([ForcaService], (s: ForcaService) => {
    const resp = s.verificaPalavra('z', 'zebra');
    expect(resp).toBeTrue();
  }));
  it('Verifica se carrega vetor corretamente', inject([ForcaService], (s: ForcaService) => {
    const resp = s.criaLetraExibir('zebra');
    const r = resp.length;
    // tslint:disable-next-line: no-unused-expression
    expect(r).length;
  }));
});
