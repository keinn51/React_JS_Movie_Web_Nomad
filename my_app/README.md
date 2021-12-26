# It's the Code Challenge with Nomad Coder

Making my own movie web site!

you can enter the site in below link.
<https://keinn51.github.io/React_JS_Movie_Web_Nomad>

If you want to use my src code, i recommend you to just get "src" folder.
And make your own CRA files, and use it.

---

### How it looks like?

<img width="1348" alt="스크린샷 2021-12-19 오후 1 38 17" src="https://user-images.githubusercontent.com/79993356/146664057-c2ec96ef-9b9f-45bc-bbf7-3fb236f07409.png">


---

### What you can learn from this code challenge

* how to use useEffect, useState
* HTML / CSS
* How to Use Slide
* fontawesome in React
* css position
* css grid

---


### To use this repository

```
npm install
npm start
```

---


### file explaination

#### ► atom

* NavList : for global variable setting


#### ➤ component

useful codes

* Load : It is just a show loading..

* Navbar : a bar always above the screen

* Slide : Make Slide part for home. you can touch the button~


#### ➤ render

all the rendering codes in projects

* MovieDetail : Code giving detailed information about one movie

* MovieGroup : Classify the movies in group (Genre, Rating...)

* MovieSearch : Search the key word and get movie you wanna see

* MovieSlide : Make Slide for home.

#### ➤ router

routes codes are here. The codes download movie API, and send to 'render' the information. (like port)

all files are same function with "Movie..."

---

### How to get CRA (create-react-app)?


#### (1) enter the commands

```
npx create-react-app my-app
cd my-app
npm start
```


#### (2) edit the src folder

---

### How to publish?


#### (1) enter the commands

```
npm i gh-pages
npm run build
```


#### (2) enter below codes in package.json

you have to code it whole below the codes!

```
"homepage" : "https://keinn51.github.io/React_JS_Movie_Web_Nomad"
```

you have to change the homepage name! (your git name, git project name)


#### (3) enter below codes in package.json, "script" section

![Untitled](https://user-images.githubusercontent.com/79993356/146664273-c8499416-94c3-4c06-8d1a-babb2592ece0.png)

just like this

```
"deploy": "gh-pages -d build",
"predeploy": "npm run build"
```

#### (4) publish!

```
npm run deploy
```

---

### Release note

#### [1. Set ReactJS / 21.12.10](https://brash-wave-2cb.notion.site/1-React-js-1d904a011b92400e83a0dc88fc127996)

#### [2. HTML / CSS / 21.12.11](https://brash-wave-2cb.notion.site/2-HTML-CSS-d445f6147acc4a0d869f112fd5e4af45)

#### [3. Set Slide / 21.12.12](https://brash-wave-2cb.notion.site/3-Slide-604acd3a2e1146ce85caa543ab5a3ed3)

#### [4. Use Atom / 21.12.13](https://brash-wave-2cb.notion.site/4-atom-b458047fa78c487b92c0f8e12608038d)

#### [5. Search Bar / 21.12.16](https://brash-wave-2cb.notion.site/5-Search-Bar-For-Web-13a3a0f642644396a27165a4e5f40312)
