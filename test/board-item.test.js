import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BoardItem from '../src/components/boards-list/board-item.jsx';

describe("BoardItem", function() {
  it("should render three headers", function() {
    const wrapper = mount(<BoardItem name={'Sample board'}/>);
    expect(wrapper.find('h3')).to.have.length(3);
  });
 });
