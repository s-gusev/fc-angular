import { TruncatePipe } from './truncate.pipe';

describe('Service: News', () => {
  let truncatePipe: TruncatePipe;

  beforeEach(() => {
    truncatePipe = new TruncatePipe();
  });

  it('should create', () => {
    expect(truncatePipe).toBeTruthy();
  });

  it('should truncate', () => {
    expect(truncatePipe.transform('abcdef', 3)).toEqual('abc ...');
  });

  it('should not truncate', () => {
    expect(truncatePipe.transform('abcdef', 10)).toEqual('abcdef');
  });
});
