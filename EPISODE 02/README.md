# Contents

## Theory Assignment
1. What is **NPM**? 
- The *npm* is originally stood for *Node Package Manager* but over the time, it has evolved to mean much more.
- It's the ***default package manager*** for Javascript's runtime ***Nodejs***.

2. What is **Parcel/Webpack**? Why do we need it? 
- Parcel and Webpack are both javascript module bundlers that help developers manage and optimize their code for production.
- They take all the various assets in your project -> javascript files, css files , images , html files and bundled them into a single optimised file.
- Here are some reasons why we need them:
  1.  Both parcel and webpack bundles your Javascript module into a single file(or a set of files).
  2.  They split our code into smaller chunks that can be loaded on demand.  This means that only the necessary parts of our application loaded initially, which sppeds up the initial load time.
  3.  Both tools gives us features like ***Hot Module Replacement*** this means that it can refresh our website automatically whenever we made changes.
  4.  Both Parcel and Webpack provide us various optimisation techniques like -> ***minification*** , ***tree shaking*** and ***code splitting*** which help to reduce the size of our final build and improves the performance of the application.
  5.  And a lot more ......
  6.  https://parceljs.org/

3. What is **.parcel-cache** 
4. What is **npx** ? 
5. What is difference between **dependencies** vs **devDependencies** 
6. What is Tree Shaking? 
7. What is Hot Module Replacement? 
8. List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words. 
9. What is **.gitignore**? What should we add and not add into it? 
10. What is the difference between **package.json** and **package-lock.json**
11. Why should I not modify **package-lock.json**?
12. What is **node_modules** ? Is it a good idea to push that on git?
13. What is the **dist** folder?
14. What is **browserlists**

## Read about dif bundlers: vite, webpack, parcel 
- Read about:  ^ - caret and ~ - tilda 
- Read about Script types in html (MDN Docs) 

## Project Assignment
1. Intialize **npm** into your repo
2. remove CDN links of react 
3. install parcel 
4. ignite your app with parcel 
5. add scripts for “start” and “build” with parcel commands 
6. add `.gitignore` file 
7. add `browserlists` 
8. build a production version of your code using `parcel build`
