import { StringCustomPipe } from './string-custom.pipe';

describe('StringCustomPipe', () => {
  it('create an instance', () => {
    const pipe = new StringCustomPipe();
    expect(pipe).toBeTruthy();
  });
});
