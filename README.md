# WDI Project 4 - Destination Love <img style='float: right' src='https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png'>
---
<a href='https://destination-love.herokuapp.com/'>
<img style='width: 100%;' src='/screenshots/desintationLoveLogo.png' alt='logo screenshot'></a>

### Project Overview and Motivation
Destination Love is a dating site which solves the dilemma of deciding where you and a potential partner can go on your first date.  


This was our fourth project as part of the General Assembly Web Development Immersive course. The objective was to build a full stack web application using React.


### Contributors
<table>
  <thead>
    <th><img src='/screenshots/MHK.jpg' width=70px /></th>
    <th><img src='/screenshots/bt.png' width=90px /></th>
  </thead>
  <tbody>
    <td>
    <strong>Matt Hunter-King</strong>
    <p>Web Development</p>
    </td>
    <td>
    <strong>Bridget Turnbull</strong>
    <p>Web Development</p>
    </td>
  </tbody>
</table>

### Timeframe
10 days (June 2018)

--------------


### Technologies used

* React
* Javascript (ECMAScript6)
* SCSS
* Bulma
* GitHub
* bcrypt
* mongoose
* filestack-js
* Heroku
* Trello
* Balsamiq
* Yarn
* Chai
* Mocha
* nyc
* supertest


### API's used
* Google Maps
* Google Maps Place Autocomplete
* Filestack

---

### User Journey

On entering the site users can either log in or if they are a new user register for the site.

![screenshot1](/screenshots/screenshot1.png)

When registering users can upload a profile picture via file stack and can answer a series of multiple choice questions which are used to compare their compatibility with potential matches.

![screenshot2](/screenshots/screenshot2.png)

Once they have logged in or registered users can view potential matches which they can filter by gender and age. The number of hearts below each profile indicates their compatibility.

![screenshot3](/screenshots/screenshot4.png)

Clicking on a profile provides more information and gives the user the option to send a request to connect.

![screenshot5](/screenshots/screenshot5.png)

The 'My Profile' page allows users to edit/delete their profile and manage match requests. They can also plan dates with confirmed matches.

![screenshot6](/screenshots/screenshot6.png)

Clicking on the 'Plan a date' button on a confirmed match opens the date page which calculates the central point between the two users and shows bars and restaurants in the surrounding area.

![screenshot7](/screenshots/screenshot7.png)

Users can also message confirmed matches in the messaging screen.

![screenshot8](/screenshots/screenshot8.png)

---

### Approach

After we discovered a mutual love of trashy dating shows we decided to build a dating app. Starting with some basic wireframes we then moved onto creating a Trello board and worked out what our MVP and additional fetaures would be. Below are some early wireframes for the project:

![planning](/screenshots/planning.png)

### Switching Between Message Threads

The private messages section of the site is made up of an overall messaging component which has two child components one which is a panel with all of the users matches and the other which displays the message threads. By clicking on different matches in the panel the message thread component has to update with the new messages. To achieve this I created this `handleSelection` function inside the messaging component which gets the data for the match the user clicked on and then user the `getMessages` function to filter the users messages to only include messages from or to that user.

```
handleSelection = (e) => {
  axios
    .get(`/api/users/${e.target.id}`)
    .then(res => this.setState({ selectedMatch: res.data }, () => {
      const filteredmessages = this.getMessages(this.state.currentUser.messages);
      this.setState({ messages: filteredmessages }, () => {
        console.log(this.state);
      });
    }));
}

getMessages = (messages) => {
  const user1 = this.state.currentUser._id.toString();
  const user2 = this.state.selectedMatch._id.toString();
  const allmessages = messages.concat(this.state.selectedMatch.messages);
  const filteredmessages = allmessages.filter(message => {
    return (message.from._id === user1 && message.to._id === user2) || (message.from._id === user2 && message.to._id === user1);
  }).sort((a, b) => a.sentAtRaw < b.sentAtRaw);
  return filteredmessages;
}
```

---

### Challenges

Creating a system for sending and accepting matches and messaging were big challenges. We decided not to use external packages for both of these features so creating models and controllers for both these processes was difficult and in hindsight we would have built these differently if we were to do the project again.

### Wins

The messaging inbox was a lot of work however users being able to switch between sets of messages by clicking into the user list was a really nice  feature. Incorporating Google Places into the map element and calculating the middle point between users was also a great achievement.

---

### Future features

If we had more time we would like to have added more personalisation to the plan a date feature so that users could be shown different types of locations. We would have liked to add log in with Facebook and email notifications.
