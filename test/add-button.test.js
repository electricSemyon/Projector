import 'jsdom-global/register';
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import AddButton from '../src/components/fab-buttons/add-fab-button.component.jsx';

describe("AddButton", function() {

  it("should execute callback on click", function(done) {
    const wrapper = shallow(<AddButton onClick={done}/>);
    wrapper.simulate('click');
  });

});
