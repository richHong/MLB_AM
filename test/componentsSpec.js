import React        from 'react';
import { shallow, 
        mount }     from 'enzyme';
import { expect }   from 'chai';
import sinon        from 'sinon';
import App          from '../public/src/components/app';
import { Calendar } from '../public/src/components/calendar';
import Focus        from '../public/src/components/focus';
import Game         from '../public/src/components/game';
import List         from '../public/src/components/list';
import Logo         from '../public/src/components/logo';
import DetailModal  from '../public/src/components/modal';
import NoGames      from '../public/src/components/noGames';
import Spinner      from '../public/src/components/spinner';

describe('components', () => {
  // describe('App', () => {
  //   it('should render self and subcomponents', () => {
  //     const enzymeWrapper = shallow(<App />)

  //   });
  // });
  describe('Calendar', () => {
    it('should render self and subcomponents', () => {
      const props = {date: new Date()};
      const enzymeWrapper = mount(<Calendar {...props}/>);

      expect(enzymeWrapper.find('div')).to.have.length(2);
      expect(enzymeWrapper.find('div.calendar-container')).to.have.length(1);
    });
    it('calls componentWillMount', () => {
      const calendarSpy = sinon.spy(Calendar.prototype, 'componentWillMount');
      const props = {date: new Date()};
      const enzymeWrapper = mount(<Calendar {...props} />);
      expect(calendarSpy.calledOnce).to.equal(true);
    });
  });
  // describe('Focus', () => {
  //   it('should render self and subcomponents', () => {
  //     const enzymeWrapper = shallow(<Focus />)

  //   });
  // });
  // describe('Game', () => {
  //   it('should render self and subcomponents', () => {
  //     const enzymeWrapper = shallow(<Game />)

  //   });
  // });
  // describe('List', () => {
  //   it('should render self and subcomponents', () => {
  //     const enzymeWrapper = shallow(<List />)

  //   });
  // });
  describe('Logo', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = shallow(<Logo />)
      expect(enzymeWrapper.find('div').hasClass('container')).to.be.true;
      expect(enzymeWrapper.find('img').hasClass('logo')).to.be.true;
    });
  });
  // describe('DetailModal', () => {
  //   it('should render self and subcomponents', () => {
  //     const enzymeWrapper = shallow(<DetailModal />)

  //   });
  // });
  describe('NoGames', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = shallow(<NoGames />)
      expect(enzymeWrapper.find('div').hasClass('no-games')).to.be.true;
    });
  });
  describe('Spinner', () => {
    it('should render self and subcomponents', () => {
      const enzymeWrapper = shallow(<Spinner />)
      expect(enzymeWrapper.find('div').hasClass('spinner-container')).to.be.true;
      expect(enzymeWrapper.find('img').hasClass('spinner')).to.be.true;
    });
  });
});