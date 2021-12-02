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


- User Login
<img width="583" alt="Screen Shot 2021-10-04 at 8 48 56 AM" src="https://user-images.githubusercontent.com/56912648/135864882-772a5792-512f-4fda-97ef-bf6ab2e8db6c.png">

- User Register

<img width="604" alt="Screen Shot 2021-10-04 at 8 49 01 AM" src="https://user-images.githubusercontent.com/56912648/135865399-0ab00ab1-2e68-4e22-9f82-810b44c7d659.png">

- Garage
<img width="722" alt="Screen Shot 2021-10-15 at 12 26 20 PM" src="https://user-images.githubusercontent.com/56912648/137529036-ebea8d81-d70b-4882-8d05-f390e50dcf23.png">


- Add Car

<img width="702" alt="Screen Shot 2021-10-04 at 8 49 27 AM" src="https://user-images.githubusercontent.com/56912648/135865566-ca8a898b-b1af-4290-af4c-5191645b50f6.png">


- AfterMarket Parts

<img width="577" alt="Screen Shot 2021-10-04 at 8 49 38 AM" src="https://user-images.githubusercontent.com/56912648/135865613-9f2ae988-d9bf-4cba-88cc-8dfe6b252d9a.png">


- Parts

<img width="581" alt="Screen Shot 2021-10-04 at 8 49 46 AM" src="https://user-images.githubusercontent.com/56912648/135865636-256fbf2d-e2da-4a07-b574-01c49b7a0028.png">

- Edit

<img width="581" alt="Screen Shot 2021-10-04 at 8 49 53 AM" src="https://user-images.githubusercontent.com/56912648/135865707-12c96e3f-6892-4a56-a628-156c377e346a.png">


- Add parts

<img width="583" alt="Screen Shot 2021-10-04 at 8 50 03 AM" src="https://user-images.githubusercontent.com/56912648/135865731-2a6c0228-a974-43bd-95ea-43eccb1fc58d.png">


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
| Add Contact Form    |    L     |     1 hrs      |     x hrs     |     TBD     |
| Backend Structure   |    H     |     3 hrs      |     x hrs     |     TBD     |
| Authentication      |    H     |     3 hrs      |     x hrs     |     TBD     |
| Models Association  |    H     |     3 hrs      |     x hrs     |     TBD     |
| Routes Association  |    H     |     3 hrs      |     x hrs     |     TBD     |
| Controllers         |    H     |     3 hrs      |     x hrs     |     TBD     |
| Seed File           |    H     |     1 hrs      |     x hrs     |     TBD     |
| Gemfile / Cors Setup|    H     |     1 hrs      |     x hrs     |     TBD     |
|  React Structure    |    H     |     1 hrs      |     x hrs     |     TBD     |
| Services Files      |    H     |     3 hrs      |     x hrs     |     TBD     |
| App JSX             |    H     |     3 hrs      |     x hrs     |     TBD     |
| MainContainer       |    H     |     3 hrs      |     x hrs     |     TBD     |
| Login and Register  |    H     |     3 hrs      |     x hrs     |     TBD     |
| Componenets/Screens |    H     |     7 hrs      |     x hrs     |     TBD     |
| Deployment          |    H     |     3 hrs      |     x hrs     |     TBD     |
| Testing             |    H     |     3 hrs      |     x hrs     |     TBD     |
| Landing CSS         |    H     |     3 hrs      |     x hrs     |     TBD     |
| TOTAL               |          |     47 hrs     |     x hrs     |     TBD     |



<br>

### Server (Back End)

#### ERD Model

<img width="636" alt="Screen Shot 2021-10-04 at 8 25 59 AM" src="https://user-images.githubusercontent.com/56912648/135859637-d927a2d4-056f-4726-9ad7-78fcc4229c0e.png">

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


