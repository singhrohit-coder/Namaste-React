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
  7.  https://webpack.js.org/guides/hot-module-replacement/

3. What is **.parcel-cache**
- This file stores information about our project when parcel builds it, so that when it rebuilds our project, it doesn't have to re-parse(re- visiting) and re-analyse everything from scratch.
- It's a key reason why parcel can be so fast.
- Commiting this file to .git is a very bad idea bcz it would add a large number(unnecessary) of changes in your commit history.

4. What is **npx** ? 
- The npx stands for ***(Node Package Execute)*** and it comes with the npm, when we installed npm above 5.2.0 version the automatically npx will be installed.
- It is an ***npm package runner*** that can execute any package.
**Features of npx**
- Runs commands without globally installing the package.

5. What is difference between **dependencies** vs **devDependencies**
- ***Dependencies***  These are the packages your project needs to run. They are essential for your app to function in production. For example, if you’re building a web app with React, React itself would be a dependency because your app can’t run without it.
- ***DevDependencies*** These are the packages needed only for development. They help you build, test, and maintain your app but aren’t required in production. For instance, tools like Webpack or Babel, which you use to bundle and transpile your code, are devDependencies because they are only used during development.

6. What is ***Tree Shaking***? 
- It is a way to clean up our code by removing parts that aren't being used.

7. What is ***Hot Module Replacement***? 
- Hot Module Replacement (HMR) is a feature in development tools like Webpack that allows you to update modules in your application without a full page reload. This means you can see changes instantly as you code, making the development process faster and more efficient. It's like having a magic wand that updates your app in real-time as you make changes. 🪄


8. What is **.gitignore**? What should we add and not add into it? 
- A .gitignore file tells Git which files or folders to ignore in a project. This helps keep your repository clean and free of unnecessary files.

***What to Add***:
Node_modules: This folder contains all your project’s dependencies and can be very large.

Build files: Files generated during the build process, like dist or build folders.

Environment files: Files like .env that contain sensitive information such as API keys.

Log files: Files that store logs, like *.log.

***What Not to Add***:
Source code: Your actual code files should not be ignored.

Configuration files: Files like package.json or webpack.config.js that are essential for your project setup.

In short, add files that are generated or contain sensitive information, and keep files that are essential for your project’s functionality. 📁🚫

9. What is the difference between **package.json** and **package-lock.json**
- ***package.json*** This file lists the edependencies your project needs, along with other metadata like the project name, version, and scripts.
- It's like th eshopping list for your project.
- ***package-lock.json*** This file locks the versions of the dependencies listed in ***package.json***.
-  It ensures that everyone working on the project install the exact same versions of the dependencies, making the project more stable and predictable. 

10. Why should I not modify **package-lock.json**?
- You should not modify package-lock.json because it keeps track of the exact versions of dependencies used in your project. Changing it manually can cause version conflicts and make your project unstable.

11. What is **node_modules** ? Is it a good idea to push that on git?
- node_modules is a folder that contains all the ***dependencies*** (packages) your project needs to run. When you install packages using npm (Node Package Manager), they are stored in this folder.

***Should You Push It to Git***?
**No**, it's not a good idea to push node_modules to Git. Here’s why:

***Size***: The folder can be very large, making your repository unnecessarily bulky.

***Reproducibility***: The dependencies are already listed in your package.json file.
- Anyone cloning your repository can install them using npm install, ensuring they get the exact versions specified.

12. What is the **dist** folder?
- The dist folder (short for "distribution") contains the final, optimized version of your project files that are ready for deployment.
- It includes all the compiled code, minified assets, and other resources needed to run your application in production. 📂🚀

13. What is **browserlists**
- ***Browserslist*** is a tool that helps you specify which browsers your project should support.
- It allows you to define a list of browsers and versions that your code should be compatible with. T
- his is useful for tools like Babel and Autoprefixer, which can then ensure your code works correctly across the specified browsers.

***For example***, you can specify that your project should support the last two versions of all major browsers, or only browsers with more than 1% market share. 
- This helps in optimizing your code and ensuring compatibility without supporting outdated or less-used browsers.


## Project Assignment - Completion Log

To make our application production-ready, I've completed the following tasks:

1. Initialized **npm** into the repo.
2. Removed CDN links of React.
3. Installed Parcel.
4. Ignited the app with Parcel.
5. Added scripts for “start” and “build” with Parcel commands.
    - Inside `package.json`, created a script for starting our project in development mode and for production.
6. Added a `.gitignore` file.
7. Added `browserlists`.
8. Built a production version of the code using `parcel build`.

With these steps done, our application is now geared up for production!
