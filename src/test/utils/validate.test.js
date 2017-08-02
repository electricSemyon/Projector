import {expect} from 'chai';
import validate from '../utils/validate';

describe('validate', () => {
  it('password should be at least 6 characters', () => {
    expect(validate('passwprd', 'wrong')).to.be(false);
  })
})