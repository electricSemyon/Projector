import {expect} from 'chai';
import validate from '../../src/utils/validate';

describe('validate(type, value)', () => {
  it('type should be boolean', () => {
    expect(validate()).to.be.a('boolean');
  })

  it('password should be at least 6 characters', () => {
    expect(validate('password', 'wrong')).to.be.equal(false);
    expect(validate('password', '')).to.be.equal(false);
    expect(validate('password', 'some-password')).to.be.equal(true);
  })

  it('email should be valid', () => {
    expect(validate('email', 'wrong')).to.be.equal(false);
    expect(validate('email', '')).to.be.equal(false);
    expect(validate('email', 'some-valid@email.com')).to.be.equal(true);
  })

  it('email should be valid', () => {
    expect(validate('email', 'wrong')).to.be.equal(false);
    expect(validate('email', '')).to.be.equal(false);
    expect(validate('email', 'some-valid@email.com')).to.be.equal(true);
  })

  it('username should at least 4 characters', () => {
    expect(validate('username', 'no')).to.be.equal(false);
    expect(validate('username', 'xXx-y3s-xXx')).to.be.equal(true);
  })
})