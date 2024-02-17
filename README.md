# Bookshelf [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![landing-page](/public/landing-page.png)

## Description
A dynamic and immersive Book searching application that creates a user interface that is simple yet inviting to users. Using the application is easy yet provides users with all the necessary features to save and add books they have read, would like to read and are reading to a digital bookshelf. They can also set reading goals and track them using the app.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Links](#tests)
* [Credits](#credits)
* [License](#license)

### Installation
Click on the following link to access the URL: https://jocular-empanada-a9fae2.netlify.app/

### Libraries, Packages, APIs

* [Node.Js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
* [Vite](https://vitejs.dev/guide/)
* [React-Bootstrap]()
* [Axios]()
* [React-Dom]()
* [React-Router-Dom]()
* [Bootstrap]()
* [Swiper]()
* [FontAwesome]()
* [React-ChartJs-2]()
* [DayJs]()
* [Google Books API]()
* [New York Times Books API]()


### Usage

# SEARCH 

* As seen in the image below, you can search for books by title or by author, by using the search bar.
* When you search, cards will be returned with book information on them.
* Click the "add to bookshelf button" to add books to you bookshelf
  
![search](/public/search.png)

* When you click the "More Info" button a model will appear with further book information.
  
 ![search-modal](/public/search-modal.png)

# BOOK TINDER

 ![book-tinder ](/public/book-tinder.png)

* If you're not sure what book or author you're looking for you can also find new books by playing "Book Tinder".
* To start, click on an icon for the category of your choice.
* Then swipe left and right to toggle through book cards.
* Clicking the i icon will being up a modal with more information.
* Clicking the book icon will add the book to your bookshelf. 

# BOOKCASE

 ![bookshelf](/public/bookshelf.png)

* Clicking on the bookcase tab in the nav bar will bring you to your bookcase , where you can view all your added books.
* You can remove books by clicking the remove button 
* Clicking the "finished" button will bring up the modal below, where you can input information about how long it took you to read the book.
* Clicking on "finished" will also add the book to the "your reads" of the reading goal section and update your reading stats for the progress bars and reading tracker. 

 ![bookshelf-modal](/public/bookcase-modal.png)
 
# READING GOALS

 ![reading-goals](/public/reading-goals.png)

 * Clicking on the reading goals tab in the nav bar will bring you to your reading goals.
 * The progress bars show your progress regarding your monthly and yearly reading goals.
 * The "Your Reads" section shows all the books you've finished. 
 * You can set or change your reading goals by clicking on the "Set your reading goals" button, which will being up the modal in the image below.

 ![reading-goals-modal](/public/reading-goals-modal.png)

 * Clicking on the reading tracker button will bring your reading tracker, as seen in the image below.
 * Here you can see your reading stats including a pie chart of your reading pace, the total minutes you've spent reading, and how many pages you've read this year.
 * You can click on the "Reading Milestone Unlocked" button to see your reading milestones and rewards.
 * For example, the milestone of being in the top 10% of readers unlocks the reward of "Dragon Reader".

 ![reading-tracker](/public/reading-tracker.png)
 
### Tests

We manually tested this app, ensuring that: 
* search results were correct for search bar 
* results were correct for when categories were selected
* books were being added to and removed from the bookshelf
* reading goals functionality was working correctly
* modals were working correctly across the website
* mobile responsivess was working correctly


### Links
Nicoding 2.0 Presentation: [Presentation](https://docs.google.com/presentation/d/1i6IL4zutpDUDC3nJ_EFuF2kTjc06cBKPwA7TEvVxb8w/edit#slide=id.p1)

Netlify Deployment: [Nicoding](https://jocular-empanada-a9fae2.netlify.app/)

### Credits
* Jess [Github Profile](https://github.com/jessi994)
* Sarah [Github Profile](https://github.com/shemlock)
* Kyle [Github Profile](https://github.com/KyloGG88)
* Mikael [Github Profile](https://github.com/Mikaelcope)

* We'd also like to thank TA's Nirav and Tikto for their help and guidance with this project. 

EdX front end web developement course. <br>
React Boostrap. <br>
Font Awesome. <br>
Visme. <br>

### License
This application is cover under the [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

MIT License

Copyright (c) [2024] [Jessica Dennis, Kyle Goliath, Sarah Hemlock and Mikael Cope]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses    [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



