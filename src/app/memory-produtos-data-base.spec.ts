import { MemoryProdutosDataBase } from './memory-produtos-data-base';

describe('MemoryProdutosDataBase', () => {
  it('should create an instance', () => {
    expect(new MemoryProdutosDataBase()).toBeTruthy();
  });
});
