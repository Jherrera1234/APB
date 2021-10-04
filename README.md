# APB AutoMotive-Parts-Builder


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview
The user will be able to add cars to their garage/home page. The user then goes to the after markets page where they select an aftermarket part category and be directed to the parts page where they can edit, add and delete parts from their parts. The user can sign in, sign out and register within the app.


<br>

## MVP


_The **APB** MVP will be to give users a full CRUD experience and build a full stack app for this app. The app will also allow users to sign in, sign out and register an account in order to keep track of their car builds and organize it.
<br>

### Goals

- User create account
- User authentication and sign out
- Create and update cars in garage
- Full CRUD access to Parts


<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Made for cards,links, advanced CSS.        |
|   React Router   | Navigational components.                   |
| React SemanticUI | Promise based HTTP client for browser.     |
|     Ruby Cors    | Rack Middleware for Cross Origin Resource sharing. |
|      Bcrypt      | Ruby binding for password hashing algorithm.|


<br>

### Client (Front End)

#### Wireframes



![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

#### Component Tree



[Component Tree Sample] <img width="1185" alt="Screen Shot 2021-10-03 at 11 24 53 PM" src="https://user-images.githubusercontent.com/56912648/135859258-98cf55ab-f3e2-489c-8f97-b432fef10934.png">


#### Component Architecture


``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Footer.jsx
      |__ Layout.jsx
|__ containers/
      |__ MainContainer.jsx
|__ screens/
      |__ Garage
          |__ Garage.jsx 
          |__ Garage.css 
      |__ Login
          |__ Login.jsx 
          |__ Login.css 
      |__ Register
          |__ Register.jsx 
          |__ Register.css 
      |__ AfterMarket
          |__ AfterMarket.jsx 
          |__ AfterMarket.css 
      |__ PartsCreateEdit
          |__ PartsDetail.jsx 
          |__ PartsDetail.css 
      |__ PartsDetail
          |__ PartsDetail.jsx 
          |__ PartsDetail.css 
      |__ CarCreate
          |__ CarCreate.jsx 
          |__ CarCreate.css 
      |__ CarEdit
          |__ CarEdit.jsx 
          |__ CarEdit.css 
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ cars.js
      |__ parts.js

```

#### Time Estimates



| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

- Be able to share projects to other users
- Filter and Search
- Add Car manuels to each part and car
- Give suggestions on builds


***

## Code Showcase



## Code Issues & Resolutions


