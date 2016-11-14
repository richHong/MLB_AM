import React       from 'react';
import { shallow } from 'enzyme';
import expect      from 'expect';
import Logo        from '../public/src/components/logo';

function logoSetup() {
  const enzymeWrapper = shallow(<Logo />);

  return {
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Logo', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = logoSetup();

      expect(enzymeWrapper.find('div').hasClass('container')).toBe(true);
      expect(enzymeWrapper.find('img').hasClass('logo')).toBe(true);
    });
  });
});