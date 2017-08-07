import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Show from '../src/components/utils/show.jsx';

describe("Show", function() {
  it("should render children if 'IfTrue' === true", function() {
    const wrapper = mount(<Show ifTrue={true}>Hello</Show>);
    expect(wrapper.contains(<div>Hello</div>)).to.equal(true);
  });

  it("should return 'null' of 'ifTrue' === false", function() {
    const wrapper = mount(<Show ifTrue={false}>Hello</Show>);
    expect(wrapper.html()).to.equal(null);
  });
});
