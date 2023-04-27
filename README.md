# Yet Another Tech Blog 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [Questions](#questions)

## Description
This assignment is to build a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The site will be completely built from scratch and deployed to Heroku. The app will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Installation

The user will need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) and [Sequelize](https://www.npmjs.com/package/sequelize) to connect to a MySQL database for Models, and create an Express.js API for the Controllers. The user will also need teh [dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables, the [bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords, and the [express-session](https://www.npmjs.com/package/express-session) and [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.
 
## Usage
**User Story** </br>
AS A developer who writes about tech</br>
I WANT a CMS-style blog site</br>
SO THAT I can publish articles, blog posts, and my thoughts and opinions</br>
**Acceptance Criteria**</br>
GIVEN a CMS-style blog site</br>
WHEN I visit the site for the first time</br>
THEN I am presented with the homepage, which includes existing blog posts if </br>
any have been posted; navigation links for the homepage and the dashboard; and the option to log in</br>
WHEN I click on the homepage option</br>
THEN I am taken to the homepage</br>
WHEN I click on any other links in the navigation</br>
THEN I am prompted to either sign up or sign in</br>
WHEN I choose to sign up</br>
THEN I am prompted to create a username and password</br>
WHEN I click on the sign-up button</br>
THEN my user credentials are saved and I am logged into the site</br>
WHEN I revisit the site at a later time and choose to sign in</br>
THEN I am prompted to enter my username and password</br>
WHEN I am signed in to the site</br>
THEN I see navigation links for the homepage, the dashboard, and the option to log out</br>
WHEN I click on the homepage option in the navigation</br>
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created</br>
WHEN I click on an existing blog post</br>
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment</br>
WHEN I enter a comment and click on the submit button while signed in</br>
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created</br>
WHEN I click on the dashboard option in the navigation</br>
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post</br>
WHEN I click on the button to add a new blog post</br>
THEN I am prompted to enter both a title and contents for my blog post</br>
WHEN I click on the button to create a new blog post</br>
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post</br>
WHEN I click on one of my existing posts in the dashboard</br>
THEN I am able to delete or update my post and taken back to an updated dashboard</br>
WHEN I click on the logout option in the navigation</br>
THEN I am signed out of the site</br>
WHEN I am idle on the site for more than a set time</br>
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments</br>

## Contributors
To contribute to the Another Tech Blog Project, clone this repo locally and commit your code on a separate branch.
  

## Technology Used
- MySQL
- Express.js
- bcrypt
- Connect-Session-Sequelize

## Questions/Links
Any questions can be directed to me at https://github.com/jrwesch

The repository is found at: https://github.com/jrwesch/tech-blog
  
[Link to app on Heroku](https://tech-blog-2237.herokuapp.com/)
