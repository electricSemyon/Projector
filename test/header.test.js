import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';

import Header from '../src/components/header/header.component.jsx';

describe("Header", function () {
  it("should render app title", () => {
    const wrapper = render(<Header />);

    expect(wrapper.find('.header-toolbar h2')).to.have.length(1);
    expect(wrapper.find('.header-toolbar h2').text()).to.equal('Projector');
  });

  it("should render mail badge", () => {
    const wrapper = shallow(<Header user={ {name: 'Ivan'} }/>);

    expect(wrapper.find('.mail-badge')).to.have.length(1);
  });

  it("should render project dropdown", () => {
    const wrapper = shallow(<Header user={ {name: 'Ivan'} }/>);

    expect(wrapper.find('.dropdown-wrapper')).to.have.length(1);
  });

});
