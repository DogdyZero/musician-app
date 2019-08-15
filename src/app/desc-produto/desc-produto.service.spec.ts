import { TestBed } from '@angular/core/testing';

import { DescProdutoService } from './desc-produto.service';

describe('DescProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DescProdutoService = TestBed.get(DescProdutoService);
    expect(service).toBeTruthy();
  });
});
