// /* global describe, it */
//
// import React from 'react';
// import { expect } from 'chai';
// import { shallow } from 'enzyme';
// import UsersEdit from '../../../src/components/users/Edit';
//
// describe('Form', () => {
//   it('Should render 3 input fields, 1 textarea and 2 select fields', done => {
//     const state = {
//       errors: {}
//     };
//
//     const component = shallow(<UsersEdit data={state} errors={state.errors} />);
//     expect(component.find('input').length).to.eq(3);
//     expect(component.find('textarea').length).to.eq(1);
//     expect(component.find('select').length).to.eq(2);
//     done();
//   });
//
//   it('should populate the form', done => {
//     const state = {
//       name: 'name',
//       gender: 'gender',
//       bio: 'bio',
//       seeking: 'seeking'
//     };
//
//     const component = shallow(<UsersEdit data={state} errors={state.errors} />);
//     expect(component.find({ value: 'name', name: 'name' }).length).to.eq(1);
//     expect(component.find({ value: 'gender', name: 'gender' }).length).to.eq(1);
//     expect(component.find({ value: 'bio', name: 'bio' }).length).to.eq(1);
//     expect(component.find({ value: 'seeking', name: 'seeking' }).length).to.eq(1);
//     done();
//   });
// });
