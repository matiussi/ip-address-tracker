# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location


### Links

- Solution URL: [Add solution URL here](https://github.com/matiussi/ip-address-tracker)
- Live Site URL: [Add live site URL here](https://matiussi-ip-address-tracker.netlify.app)



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Context API
- Mobile-first workflow
- [Axios](https://github.com/axios/axios) - For fetching data
- [is-ip](https://github.com/sindresorhus/is-ip#readme) - For validating IP addresses
- [is-valid-domain](https://github.com/miguelmota/is-valid-domain) - For validating domain names
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [SASS](https://sass-lang.com/) - SASS for styles
- [Typescript](https://www.typescriptlang.org/) - Typescript
- [Tostify](https://fkhadra.github.io/react-toastify) - For displaying warnings and erros


### What I learned

- My main goal in this project was to learn Typescript, developing this challenge helped me understand how simple and useful Typescript can be.
- How to fetch data (client side) and handle errors using Next.js.
- 'vw' and 'vh' CSS units can be very useful sometimes, but they don't solve every problem by themselfs.
- Wrapping all of your code in a try/catch block isn't a good ideia, when I was developing this challenge I decided to create a simple loading state using Context API. I had the brilliant ideia to wrap my setLoading in a try/catch block, everything was working fine until a response error happened and froze the website... I spent a lot of time trying to fix it, and I thought that my problem was related to data fetching, after searching for a couple minutes I found an awesome tutorial written by ROBIN WIERUCH (link below). He also used a loading state, but no wrapped with try/catch. In the end I realize my mistake and I felt really stupid. Sorry, I just needed to vent.


### Continued development

- Typescript is an awesome language, I'll definitelly use in my future projects.
- Responsive layouts, I still have problems scaling my websites to big screens (>2K).


### Useful resources

- [How to fetch data with react hooks?](https://www.robinwieruch.de/react-hooks-fetch-data) - This tutorial helped me a lot! One of the bests tutorials I ever read.


## Author

- Frontend Mentor - [@matiussi-2035](https://www.frontendmentor.io/profile/matiussi-2035)


## Acknowledgments

