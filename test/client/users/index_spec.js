// /* global describe, it, before, after, beforeEach */
//
// import React from 'react';
// import { expect } from 'chai';
// import Promise from 'bluebird';
// import axios from 'axios';
// import sinon from 'sinon';
// // shallow is for functional and mount for classical wrappers
// import { mount } from 'enzyme';
// import { MemoryRouter as Router } from 'react-router-dom';
// import UsersIndex from '../../../src/components/users/Index';
//
// const UserData = [{
//   name: 'Matt',
//   email: 'm@m.com',
//   age: 32,
//   password: 'm',
//   passwordConfirmation: 'm',
//   gender: 'Male',
//   seeking: 'Women',
//   bio: 'Even though he is married he is looking for a fling',
//   dateRequests: 'none',
//   image: 'https://www.petmd.com/sites/default/files/guide-to-guinea-pigs.jpg'
// },{
//   name: 'Bridget',
//   age: 26,
//   email: 'b@b.com',
//   password: 'b',
//   passwordConfirmation: 'b',
//   gender: 'Female',
//   seeking: 'Men',
//   bio: 'Do you like small australians? If you do come on down!',
//   dateRequests: 'loads',
//   image: 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/monster_primary.png?itok=QWN7T3o-&resize=1100x619'
// }];
//
// describe('UsersIndex', () => {
//   let wrapper;
//   let promise;
//
//   before(done => {
//     // giving a pretend response to "axios" to avoid actually making a http request
//     promise = Promise.resolve({ data: UserData });
//     sinon.stub(axios, 'get').returns(promise);
//     done();
//   });
//
//   after(done => {
//     axios.get.restore();
//     done();
//   });
//
//   beforeEach(done => {
//     wrapper = mount(
//       <Router>
//         <UsersIndex />
//       </Router>
//     );
//     done();
//   });
//
//
//   it('should display the correct image, name and seeking for each user', done => {
//     promise.then(() => {
//       // updating the wrapper changes the html
//       wrapper.update();
//       UserData.forEach((user, index) => {
//         expect(wrapper.find('.title').at(index).text()).to.eq(user.name);
//         expect(wrapper.find('.subtitle').at(index).text()).to.eq(user.seeking);
//         expect(wrapper.find('className').at(index).prop('style').backgroundImage)
//           .to.include(user.image);
//       });
//       done();
//     });
//   });
//
//
//   it('should create a link for each user', done => {
//     promise.then(() => {
//       wrapper.update();
//       UserData.forEach(user => {
//         expect(wrapper.find({ href: `/users/${user._id}`}).length).to.eq(1);
//       });
//       done();
//     });
//   });
//
//
// });
