// /* global describe, it */
//
// import React from 'react';
// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import Login from '../../src/components/auth/Login';
//
// describe('Login', () => {
//   it('Should render 3 input fields, 1 textarea and 1 select field', done => {
//     const state = {
//       errors: {}
//     };
//
//     const component = shallow(<Login data={state} errors={state.errors} />);
//     expect(component.find('input').length).to.eq(2);
//     done();
//   });
//
//     const component = shallow(<Login data={state} errors={state.errors} />);
//     expect(component.find({ value: 'email', name: 'email' }).length).to.eq(1);
//     expect(component.find({ value: 'password', name: 'password' }).length).to.eq(1);
//     done();
//   });
