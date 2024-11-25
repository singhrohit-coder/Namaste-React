# Contents
-  Building your first Hello World program using, 
-  Using just HTML 
-  Using JS to manipulate the DOM 
##  Using React 
-  use CDN Links 
-  Create an Single React Element 
-  Create Nested React Elements 
-  Use root.render

# Assignment


## THEORY

---

1.Introduction of **React.js**


React, also known as ReactJS, is a popular and powerful JavaScript library used for building dynamic and interactive user interfaces, primarily for single-page applications (SPAs). It was developed and maintained by Facebook and has gained significant popularity due to its efficient rendering techniques, reusable components, and active community support.

---

2.What is **Emmet** ?
<br>
**Emmet** is a web developer's toolkit that can improve our HTML and CSS.Emmet is a plugin for many popular text editord ehich helps in writing HTML code for our webpage.
<br>
For more information go to website:
https://www.geeksforgeeks.org/emmet-in-visual-studio-code/

---

3.Difference between a **Library** and **Framework**.
<br>

### Framework (School/College)
Think of a framework as a school or college. When you enroll in a school, you follow a structured curriculum, attend classes at specific times, and adhere to the school's rules and regulations. The school provides a predefined structure and environment for learning, and you operate within that structure. Similarly, a framework provides a structured environment for developing software. It dictates the flow of control and provides a set of rules and guidelines that you must follow. You build your application within the framework's structure.

### Library (Home/House)
Now, think of a library as your home. At home, you have the freedom to do things your way. You can arrange your furniture, decorate your rooms, and follow your own schedule. You have the flexibility to use your home as you see fit. Similarly, a library in programming is a collection of pre-written code that you can use as needed. You have the freedom to call functions from the library whenever you want, without being constrained by a predefined structure. You can use the library's functions in your own way to build your application.

### Key Differences
- **Control Flow**: In a framework, the control flow is dictated by the framework itself. In a library, you control the flow of your application and call the library functions as needed.
- **Structure**: A framework provides a structured environment with rules and guidelines, much like a school. A library offers flexibility and can be used in various ways, much like your home.
- **Usage**: Frameworks are used to build the entire structure of an application, while libraries are used to perform specific tasks within an application.

---

4.What is **CDN**? Why do we use it?

<br>

CDN(Content Delivery Network).It is a network that helps us to speed up webpage loading for web users.It is spread all over the world as usage of the internet is everywhere.It is a network of distributed servers that work together to deliver the content to users based on their geographical location.

Let's understand with the help of **Example**

**Example Scenario**: A website in India with global users.
<br>
A website hoisted in *India* with users spread around the world, such as *USA*,*Brazil*, *Germany*, and *Australia*.
<br>
**Without CDN**:
<br>
- User from USA: The user in the USA would request content from the server located in India. The data has to travel a long distance (thousands of kilometers), leading to high latency and slower load times.

- User from Brazil: Similarly, the user in Brazil would experience delays because the content needs to travel from India.

- User from Europe: European users may have a better experience than users from the USA or Brazil, but still, the distance from India impacts the speed.
<br>

**With CDN**
<br>

- User from USA: The CDN has an edge server in the USA. When the user requests the content, the CDN serves the content from the USA server. This reduces the time it takes to retrieve the content.

- User from Brazil: Similarly, the CDN serves the content from an edge server in Brazil or a nearby region, reducing latency and speeding up load times.

- User from Europe: The content for European users will be fetched from the European edge servers, resulting in faster load times.

- User from India: For Indian users, the CDN will serve content from the origin server (or a nearby edge server), ensuring the fastest response.

---

5.Why is **React** known as **React**?
<br>
React is called "React" because it helps create user interfaces that react to changes in data. 

**Example**: Imagine you have a list of items on a webpage. If you add a new item, React updates the list automatically without reloading the whole page. This makes the user experience smooth and dynamic. 

It's like having a smart assistant that keeps everything up-to-date for you!

---

6.What is **crossorigin** in script tag?
<br>
The crossorigin attribute in the [script] tag tells the browser how to handle cross-origin requests (requests for files from a different website).

---

7.What is the difference **React** and **ReactDOM**.

<br>

*React*
- It is a javascript library for building user interfaces,especially for single-package applications.
- Responsible for building and managing UI components.
- can be used for web, mobile, and other platforms.
<br>

*ReactDOM*
*ReactDOM is a separate package that enables/possible [React] to update and render/process [UI components] -> **Examples**:  like buttons, checkboxes, sliders and etc... on the web browser by diorectlyinteracting with the browser's Document Object Model[DOM].
*Specifically used for web applications, integrating with the browser.

---

8.What is the difference between **react.development.js** and **react.production.js** files via CDN?
<br>

- **Development Build**: Used during the development phase. It includes tools like *Source Maps* for debugging, and often *hot reloading* to see changes instantly without refreshing the page.
- **Production Build**: Used when deploying the application to users. It optimizes the code by minimizing files, extracting CSS and images, and removing development-specific features like hot reloading. The goal is to make the application run efficiently on users machines.

- **Hot Reloading** -> means this is a feature that allows you to see changes in your code instantly without refreshing the entire page. When you make changes to your code, only the parts of the application that changed are updated, which speeds up the development process and provides immediate feedback.

- **Source Maps** -> Think of source maps as a translator for your code. When you write code, it's usually in a readable format. But for the web, this code often gets transformed into a more compact, less readable version to make it load faster. This transformation can make debugging difficult because the code you see in the browser isn't the same as the code you wrote.

- A source map helps by linking the transformed code back to your original code. So, if there's an error, you can see exactly where it happened in your original code, making it much easier to fix. It's like having a map that shows you the way back to your starting point!
