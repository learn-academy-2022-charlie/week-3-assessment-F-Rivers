# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: It is a way of referencing class properties and methods, it's invoked by using dot notation. It can be used multiple times as a base for a class.   

  Researched answer: The `this` variable is attached to functions. Whenever you invoke a function, `this` is given a certain value, depending on how you invoke the function. `this` is often called the invocation pattern. You can invoke the function containing `this` as a method, function, constructor, and with apply.



2. What is React? Why would you use it?

  Your answer: React is a library of components, users can reuse the components instead of writing out their code from scratch. I would use it because it can be used in small projects as well as larger scaled projects.  

  Researched answer: React is a JavaScript UI development library. Meta (formerly Facebook) and an open-source developer community maintain it. The library first appeared in May 2013 as part of the news feed feature on Facebook and is now one of the most commonly used frontend libraries for web development. Although React is a library rather than a language, it is widely used in web development through its JSX, lifecycle methods, virtual DOM and many more features.


3. Which lifecycle method is required in a React class component?

  Your answer: Render, every time a component is modified, it updates and returns JSX

  Researched answer: The render method is the only required method in a class component. When called, it should examine this.props and this.state and return one of the following types: 
        - React Elements, Arrays and Fragments, Portals, Strings and Numbers, Booleans or Null. 


4. What is JSX? What is one syntax difference between HTML and JSX?

  Your answer: One example of the syntax differences between HTML and JSX is the invocation of `class` for HTML, and `className` for JSX.

  Researched answer: Another example of syntax differences is need to write all HTML attributes and event references in camelCase while writing JSX. Therefore, `onclick` becomes `onClick`, `onmouseover` becomes `onMouseOver`, and so on.



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: YARN is an acronym for Yet Another Resource Negotiator, the software manages the codes you share with other developers. 

  Researched answer: Yarn is a JavaScript package manager that creates the file structure of a React app and manages the dependencies. 
    <!-- could not find a reliable source for second part of the question. I will follow up on this later -->


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: An anonymous function in JS is one that has no name and therefore cannot be called upon

  Researched answer: An anonymous function is a function that is not stored in a program file, but is associated with a variable whose data type is function_handle . Anonymous functions can accept multiple inputs and return one output. They can contain only a single executable statement.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering in React is what conditions are in JavaScript. Conditional rendering describes the ability to render different user interface markup if a condition is true or false

2. Object-oriented programming: Object-oriented programming is a programming model that organizes software architecture around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

3. Ruby: An open source, OOP language, that has a reputation for being simple with a style that is easy to write and read. Ruby is a server-side, dynamic, interpreted, general purpose language. 

4. Ruby blocks: Anonymous functions are to JS to what Ruby blocks are to Ruby. Blocks are created with `do/end` or with curlys, {}.

5. Ruby hashes: A Hash is a dictionary-like collection of unique keys and their values. A Hash has certain similarities to an Array but an Array index is always an integer while a Hash key can be almost any object.
