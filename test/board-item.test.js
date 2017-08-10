import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BoardItem from '../src/components/boards-list/board-item.jsx';

describe("BoardItem", function() {
  it("should render a board card", function() {
    const wrapper = mount(<BoardItem name={'Sample board'}/>);
    expect(wrapper.find('h3')).to.have.length(3);
    expect(wrapper.find('.menu-button')).to.have.length(1);
    expect(wrapper.find('.board-progress')).to.have.length(1);
  });
 });
