import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import BoardItem from '../src/components/boards-list/board-item.jsx';

describe("BoardItem", function() {
  const wrapper = mount(<BoardItem name={'Sample board'} members={[ {name: 'Ivan', avatar: 'some/useless/path.jpg'} ]}/>);

  it("should render board title", function() {
    expect(wrapper.find('h3.board-title')).to.have.length(1);
    expect(wrapper.find('.board-title').text()).to.equal('Sample board');
  });

  it('should render board options menu button', () => {
    expect(wrapper.find('.menu-button')).to.have.length(1);
  });

  it('should render board progress bar', () => {
    expect(wrapper.find('.board-progress')).to.have.length(1);
  });

  it('should render member avatars', () => {
    expect(wrapper.find('.member-avatar')).to.have.length(1);
  })


 });
