// /* global describe, it */
//
// import React from 'react';
// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import Home from '../../../src/components/Home';
//
// describe('Login', () => {
//   it('Should render 3 input fields, 1 textarea and 1 select field', done => {
//     const state = {
//       errors: {}
//     };
//
//     const component = shallow(<Home data={state} errors={state.errors} />);
//     expect(component.find('input').length).to.eq(2);
//     done();
//   });
//
//   const component = shallow(<Home data={this.state} errors={state.errors} />);
//   expect(component.find({ value: 'email', name: 'email' }).length).to.eq(1);
//   expect(component.find({ value: 'password', name: 'password' }).length).to.eq(1);
//   done();
// });
