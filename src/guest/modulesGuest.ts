export interface ModuleGast {
  moduleId: number
  moduleName: string
  dateCreated: string
  stackName: string
  img: string
  cards: []
  username: string
}

export interface CardGast {
  cardId: number
  question: string
  answer: string
  level: string
  moduleId: number
  moduleName: string
  dateCreated: string
}

export const allModulesGast = {
  data: [
    {
      moduleId: 0,
      moduleName: "Java",
      dateCreated: "2024-05-16T08:15:49.234297",
      stackName: "Java",
      img: "/assets/home/java.svg",
      cards: [
        {
          cardId: 1,
          question: "What is the Java programming language?",
          answer:
            " Java is a high-level, class-based, object-oriented programming language that is widely used for developing a variety of applications. It was developed by Sun Microsystems (now owned by Oracle Corporation) and released in 1995. Java is designed to have as few implementation dependencies as possible, which is why it is often referred to as a 'write once, run anywhere' (WORA) language. This means that compiled Java code can run on all platforms that support Java without the need for recompilation.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What is the Java Virtual Machine (JVM)?",
          answer:
            "The JVM is a part of the Java Runtime Environment (JRE) that executes Java bytecode. It provides a platform-independent way of executing code.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "What is the Java Development Kit (JDK)?",
          answer:
            "The JDK is a software development environment used for developing Java applications and includes tools such as the Java compiler, Javadoc, Jar, and debugger.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What is the difference between JDK and JRE?",
          answer:
            "JDK is used for development of Java applications and includes tools for development, while JRE is used for running Java applications and includes the JVM and libraries.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "What is the Java Runtime Environment (JRE)?",
          answer:
            "The JRE is the software required to run Java applications on a computer. It includes the JVM and Java libraries.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is the Java compiler?",
          answer:
            "The Java compiler (javac) is a tool that translates Java source code into Java bytecode, which is then executed by the JVM.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question:
            "What is the significance of the 'Write Once, Run Anywhere' (WORA) concept in Java?",
          answer:
            "WORA means that compiled Java code can run on all platforms that support Java without the need for recompilation.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question: "What is a Java package?",
          answer:
            "A Java package is a mechanism for organizing classes and interfaces in a hierarchical structure, which helps in managing the complexity of large software systems.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question: "What is an object in Java?",
          answer:
            " An object in Java is an instance of a class, which encapsulates data and methods that manipulate this data.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 10,
          question: "What is the Java garbage collector?",
          answer:
            "The Java garbage collector is a part of the JVM that automatically manages memory by reclaiming objects that are no longer in use, thus preventing memory leaks.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "german*35",
    },
    {
      moduleId: 1,
      moduleName: "Python",
      dateCreated: "2024-05-16T10:28:04.615205",
      stackName: "Python",
      img: "/assets/home/i2.svg",
      cards: [
        {
          cardId: 1,
          question: "What is Python?",
          answer:
            "Python is a high-level, interpreted programming language known for its simplicity and readability, widely used for web development, data analysis, artificial intelligence, and more.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What are the key features of Python?",
          answer:
            "Key features include its simplicity, readability, extensive standard library, and support for multiple programming paradigms (procedural, object-oriented, and functional).",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "Why is Python popular for data science?",
          answer:
            "Python is popular in data science due to its powerful libraries like NumPy, Pandas, and Matplotlib, which facilitate data manipulation, analysis, and visualization.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "Can Python be used for web development?",
          answer:
            "Yes, Python is used in web development through frameworks like Django and Flask, which simplify the creation of web applications.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "What is the Python interpreter?",
          answer:
            "The Python interpreter is a program that executes Python code. It reads the code, interprets it, and performs the actions specified in the code.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "How does Python handle memory management?",
          answer:
            "Python uses an automatic garbage collector to manage memory, freeing developers from manual memory management.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "What is PEP 8 and why is it important?",
          answer:
            "PEP 8 is a style guide for Python code. It provides guidelines and best practices for writing readable and consistent Python code.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question: "What are decorators in Python?",
          answer:
            "Decorators are a way to modify or enhance functions and methods in Python without changing their source code. They are denoted by the @ symbol.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question: "What is the difference between Python 2 and Python 3?",
          answer:
            "Python 3 is the current version and is not backward-compatible with Python 2. Python 2 has been officially discontinued, and Python 3 includes improvements and new features.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 10,
          question: "How does Python support object-oriented programming?",
          answer:
            "Python supports object-oriented programming (OOP) through classes and objects. It allows encapsulation, inheritance, and polymorphism, which are fundamental OOP concepts.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Python",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "arnold-48",
    },
    {
      moduleId: 2,
      moduleName: "SQL",
      dateCreated: "2024-05-16T10:28:26.414393",
      stackName: "Data bases",
      img: "/assets/home/mysql.svg",
      cards: [
        {
          cardId: 1,
          question: "What is SQL?",
          answer:
            "SQL (Structured Query Language) is a standard language for managing and manipulating databases.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What is SQL used for?",
          answer:
            "SQL is used to query, insert, update, and manipulate data in relational databases.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "Can SQL be used with non-relational databases?",
          answer:
            "SQL is primarily designed for relational databases and may not be directly applicable to non-relational (NoSQL) databases.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What are the basic SQL commands?",
          answer:
            "Basic SQL commands include SELECT, INSERT, UPDATE, DELETE, CREATE, and DROP.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "How do you retrieve data from a database using SQL?",
          answer:
            "Data is retrieved using the SELECT statement, followed by the columns you want to retrieve and the table name.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is a JOIN in SQL?",
          answer:
            "A JOIN is used to combine rows from two or more tables based on a related column between them.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "What is the difference between SQL and MySQL?",
          answer:
            "SQL is a language, while MySQL is a database management system that uses SQL as its language.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question: "What is a primary key in SQL?",
          answer:
            "A primary key is a unique identifier for each record in a table.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question: "How do you update data in a SQL database?",
          answer:
            "Data is updated using the UPDATE statement, specifying the table, column, and new values.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 10,
          question: "What is normalization in SQL?",
          answer:
            "Normalization is a process to eliminate redundancy and improve data integrity in a database.",
          level: "EASY",
          moduleId: 1,
          moduleName: "SQL",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "li_22",
    },
    {
      moduleId: 3,
      moduleName: "Java script",
      dateCreated: "2024-05-16T11:07:47.451326",
      stackName: "JS",
      img: "/assets/home/javascript.svg",
      cards: [
        {
          cardId: 1,
          question: "What is JavaScript?",
          answer:
            "JavaScript is a high-level, interpreted programming language primarily used for enhancing web interactivity and functionality.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "Where is JavaScript primarily used?",
          answer:
            "JavaScript is mainly used in web browsers to create dynamic and interactive web pages.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "Can JavaScript be used on the server-side?",
          answer:
            "Yes, JavaScript can be used on the server-side through platforms like Node.js.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What is the difference between JavaScript and Java?",
          answer:
            "JavaScript and Java are distinct languages; JavaScript is primarily used for web scripting, while Java is a general-purpose programming language often used for building large applications.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "What is ECMAScript?",
          answer:
            "ECMAScript is the standardized specification on which JavaScript is based, ensuring compatibility and consistency across different environments.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What are JavaScript frameworks?",
          answer:
            "JavaScript frameworks are pre-written JavaScript code that provides a structure for building web applications, such as React, Angular, and Vue.js.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "What is AJAX in JavaScript?",
          answer:
            "AJAX (Asynchronous JavaScript and XML) is a technique that allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question: "What is the DOM in JavaScript?",
          answer:
            "The DOM (Document Object Model) is a programming interface for HTML and XML documents, allowing scripts to dynamically access and update the content, structure, and style of a document.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question: "What is JSON in JavaScript?",
          answer:
            "JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 10,
          question: "What is the purpose of JavaScript libraries?",
          answer:
            " JavaScript libraries, like jQuery, provide a collection of pre-written JavaScript functions that simplify common web development tasks, such as event handling and animation.",
          level: "EASY",
          moduleId: 1,
          moduleName: "Java script",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "maks_02",
    },
    {
      moduleId: 4,
      moduleName: "C#",
      dateCreated: "2024-05-16T11:09:01.460155",
      stackName: "C#",
      img: "/assets/home/csharp.svg",
      cards: [
        {
          cardId: 1,
          question: "What is the purpose of the using statement in C#?",
          answer:
            "The using statement in C# is used to create a scope where objects that implement IDisposable are guaranteed to have their Dispose method called, ensuring resources like file handles or database connections are properly cleaned up.",
          level: "EASY",
          moduleId: 4,
          moduleName: "C#",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "How do you handle exceptions in C#?",
          answer:
            "In C#, exceptions are handled using a combination of try, catch, and finally blocks. The try block contains the code that might throw an exception, the catch block handles the exception, and the finally block contains code that is executed regardless of whether an exception was thrown or not.",
          level: "EASY",
          moduleId: 4,
          moduleName: "C#",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "What is LINQ in C#?",
          answer:
            "LINQ (Language Integrated Query) is a feature in C# that allows developers to write SQL-like queries against data sources like collections, XML, and databases directly in C# code. It provides a consistent programming model for data manipulation and supports various operators for filtering, ordering, and grouping data.",
          level: "EASY",
          moduleId: 4,
          moduleName: "C#",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What is the difference between class and struct in C#?",
          answer:
            "In C#, a class is a reference type that is passed by reference and can be inherited from other classes. A struct, on the other hand, is a value type that is passed by value and does not support inheritance. Structs are typically used for small data structures that contain only data.",
          level: "EASY",
          moduleId: 4,
          moduleName: "C#",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "How can you implement multithreading in C#?",
          answer:
            "Multithreading in C# can be implemented using the Thread class or the Task class from the System.Threading and System.Threading.Tasks namespaces, respectively. The Thread class is used for creating and managing threads directly, while the Task class provides a higher-level abstraction for asynchronous operations and is often preferred for its ease of use and better support for parallel programming constructs like Parallel.For and Parallel.ForEach.",
          level: "EASY",
          moduleId: 4,
          moduleName: "C#",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "olaf_68",
    },
    {
      moduleId: 5,
      moduleName: "React",
      dateCreated: "2024-05-16T11:15:39.513229",
      stackName: "React",
      img: "/assets/home/i1.svg",
      cards: [
        {
          cardId: 1,
          question: "What is React?",
          answer:
            "React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What are React components?",
          answer:
            "React components are the building blocks of a React application's UI. They are reusable pieces of code that return a React element to be rendered to the page.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "What is JSX?",
          answer:
            "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It's not a necessity to use React, but it makes the code more readable and easier to understand.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What is the virtual DOM?",
          answer:
            "The virtual DOM is a lightweight copy of the actual DOM (Document Object Model). React creates a virtual DOM in memory where it does all the necessary manipulations and then updates the browser's DOM with the minimal set of changes, which makes the application faster and more efficient.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "What is state in React?",
          answer:
            "State is a built-in React object that is used to contain data or information about the component. A component's state can change over time, usually as a result of user events, and when it does, the component re-renders.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is a controlled component in React?",
          answer:
            "A controlled component is a component where React is in control and is the single source of truth for the data. It means that the form's data is handled by the React component state.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "What is a higher-order component (HOC)?",
          answer:
            "A higher-order component is a function that takes a component and returns a new component. It's a pattern that is used for reusing component logic.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question: "What is Redux and why would you use it with React?",
          answer:
            "Redux is a state management library that can be used with React. It helps you write applications that behave consistently and are easy to test. It's particularly useful for large applications where many components need to share and manipulate the same data.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question: "What is the purpose of the `key` prop in React lists?",
          answer:
            "The key prop is used to give each node a stable identity in the list. React uses these keys to match components when the list is re-rendered, which helps to optimize performance and prevent unnecessary re-renders.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 10,
          question: "What is the difference between `props` and `state`?",
          answer:
            "Props (short for properties) are read-only inputs to a component. They are used to pass data from parent to child components. State is a data structure that starts with a default value when a component mounts. It is managed by the component itself and can be changed by the component over time.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 11,
          question: "What is React Hooks?",
          answer:
            "React Hooks are functions that let you 'hook into' React state and lifecycle features from function components. They were introduced in React 16.8 to allow developers to use state and other React features without writing a class.",
          level: "EASY",
          moduleId: 5,
          moduleName: "React",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "paul_98",
    },
    {
      moduleId: 6,
      moduleName: "Vue JS",
      dateCreated: "2024-05-16T11:19:43.115228",
      stackName: "Vue",
      img: "/assets/home/i6.svg",
      cards: [
        {
          cardId: 1,
          question: "What is Vue.js?",
          answer:
            "Vue.js is a progressive JavaScript framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
          level: "EASY",
          moduleId: 6,
          moduleName: "Vue JS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What are Vue components?",
          answer:
            " Vue components are the core building blocks of Vue applications. Each component consists of a template (what to display), a script (the logic), and a style (how it should look).",
          level: "EASY",
          moduleId: 6,
          moduleName: "Vue JS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "How do you create a new Vue instance?",
          answer:
            "You create a new Vue instance using the new Vue() constructor, typically with an options object that includes data, methods, and lifecycle hooks.",
          level: "EASY",
          moduleId: 6,
          moduleName: "Vue JS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What is Vuex and when should it be used?",
          answer:
            "Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It is recommended for larger applications or when you need a single source of truth for your state.",
          level: "EASY",
          moduleId: 6,
          moduleName: "Vue JS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "How does Vue handle data binding?",
          answer:
            "Vue uses a system called 'reactivity' to handle data binding. When data changes, the view automatically updates. This is achieved through a dependency tracking setup and a watcher mechanism that triggers updates.",
          level: "EASY",
          moduleId: 6,
          moduleName: "Vue JS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is the purpose of the v-model directive in Vue?",
          answer:
            "The v-model directive is used for creating two-way data bindings on form input, textarea, and select elements. It automatically picks the correct way to update the element based on the input type.",
          level: "EASY",
          moduleId: 6,
          moduleName: "Vue JS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question:
            "How can you optimize the performance of a Vue.js application?",
          answer:
            "Performance optimization in Vue can be achieved through techniques like lazy loading components with Webpack's dynamic import(), using the v-show directive instead of v-if for frequent toggling, and enabling production mode for build. Additionally, optimizing the re-rendering of components by using shouldComponentUpdate or React.memo for functional components can be beneficial.",
          level: "EASY",
          moduleId: 6,
          moduleName: "Vue JS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "luchiano11",
    },
    {
      moduleId: 7,
      moduleName: "HTML",
      dateCreated: "2024-05-16T11:20:30.436434",
      stackName: "HTML",
      img: "/assets/home/i3.svg",
      cards: [
        {
          cardId: 1,
          question: "What is HTML?",
          answer:
            "HTML stands for HyperText Markup Language and is the standard markup language for creating web pages.",
          level: "EASY",
          moduleId: 7,
          moduleName: "HTML",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What is the purpose of HTML tags?",
          answer:
            "HTML tags are used to structure content on a webpage, defining elements such as headings, paragraphs, links, and other components.",
          level: "EASY",
          moduleId: 7,
          moduleName: "HTML",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "Can HTML be used to create interactive websites?",
          answer:
            "HTML alone is not sufficient for creating interactive websites; it needs to be combined with CSS for styling and JavaScript for interactivity.",
          level: "EASY",
          moduleId: 7,
          moduleName: "HTML",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What is the latest version of HTML?",
          answer:
            "The latest version of HTML is HTML5, which includes new features like video playback and drag-and-drop.",
          level: "EASY",
          moduleId: 7,
          moduleName: "HTML",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "How do you create a hyperlink in HTML?",
          answer:
            "A hyperlink is created using the `<a>` tag with the `href` attribute specifying the URL to link to.",
          level: "EASY",
          moduleId: 7,
          moduleName: "HTML",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is the difference between HTML and XHTML?",
          answer:
            "XHTML is a stricter and cleaner version of HTML, following XML syntax rules, whereas HTML is more lenient with syntax.",
          level: "EASY",
          moduleId: 7,
          moduleName: "HTML",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "Can HTML5 be used to create mobile applications?",
          answer:
            "HTML5 can be used to create mobile applications when combined with frameworks like PhoneGap or Cordova, which allow HTML5 apps to be wrapped in a native container for deployment on mobile platforms.",
          level: "EASY",
          moduleId: 7,
          moduleName: "HTML",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "kat/08",
    },
    {
      moduleId: 8,
      moduleName: "CSS",
      dateCreated: "2024-05-16T11:21:40.236498",
      stackName: "CSS",
      img: "/assets/home/i5.svg",
      cards: [
        {
          cardId: 1,
          question: "What is CSS and what is its primary function?",
          answer:
            "CSS stands for Cascading Style Sheets and it is used to style and layout web pages by applying visual properties to HTML elements.",
          level: "EASY",
          moduleId: 8,
          moduleName: "CSS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "Can CSS be used to create animations?",
          answer:
            "Yes, CSS3 introduced several properties that allow for the creation of animations, such as `@keyframes` and animation properties.",
          level: "EASY",
          moduleId: 8,
          moduleName: "CSS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question:
            "What is the difference between `em` and `rem` units in CSS?",
          answer:
            "`em` units are relative to the font size of the parent element, while `rem` units are relative to the root or the html element's font size.",
          level: "EASY",
          moduleId: 8,
          moduleName: "CSS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "How can you link a CSS file to an HTML document?",
          answer:
            "You can link a CSS file to an HTML document using the `<link>` tag in the HTML document's `<head>` section.",
          level: "EASY",
          moduleId: 1,
          moduleName: "CSS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "What is the purpose of the `box-sizing` property in CSS?",
          answer:
            "The `box-sizing` property defines how the width and height of an element are calculated, whether they include padding and border, or not.",
          level: "EASY",
          moduleId: 8,
          moduleName: "CSS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is the CSS `flexbox` layout?",
          answer:
            "The `flexbox` layout is a CSS layout model that allows for easy alignment of items in one dimension, either on the container or the child elements, and can handle different screen sizes and different numbers of items.",
          level: "EASY",
          moduleId: 8,
          moduleName: "CSS",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "Piter_96",
    },
    {
      moduleId: 9,
      moduleName: "UI/UX",
      dateCreated: "2024-05-16T11:24:02.120292",
      stackName: "UI/UX",
      img: "/assets/home/xamarin.svg",
      cards: [
        {
          cardId: 1,
          question: "What is UI/UX design?",
          answer:
            "UI (User Interface) design focuses on the visual aspects and interactivity of a product, while UX (User Experience) design is about enhancing user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with the product.",
          level: "EASY",
          moduleId: 9,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "Why is UI/UX important in product development?",
          answer:
            "UI/UX is crucial for ensuring that products are user-friendly, efficient, and enjoyable to use, which can lead to higher user satisfaction, increased customer retention, and better overall business outcomes.",
          level: "EASY",
          moduleId: 1,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "What are the key principles of good UI design?",
          answer:
            "Key principles include consistency, simplicity, clarity, feedback, aesthetics, and user control.",
          level: "EASY",
          moduleId: 9,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "What tools are commonly used in UI/UX design?",
          answer:
            "Common tools include Sketch, Adobe XD, Figma, InVision, and Axure for design and prototyping, and tools like UserTesting.com for user research.",
          level: "EASY",
          moduleId: 9,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "How does user research impact UI/UX design?",
          answer:
            "User research helps designers understand the needs, behaviors, and motivations of users, which informs design decisions and ensures that the final product meets user expectations.",
          level: "EASY",
          moduleId: 1,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is the role of wireframes in UI/UX design?",
          answer:
            "Wireframes are basic visual guides used to suggest the layout and structure of a website or application without focusing on aesthetics. They help designers and stakeholders understand the functionality and hierarchy of content.",
          level: "EASY",
          moduleId: 9,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "How do you conduct usability testing in UI/UX?",
          answer:
            "Usability testing involves observing users as they interact with a product to identify any issues or areas for improvement. This can be done through moderated or unmoderated sessions, often using screen-sharing tools or specialized software.",
          level: "EASY",
          moduleId: 1,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question:
            "What is the difference between responsive design and adaptive design in UI/UX?",
          answer:
            "Responsive design adjusts the layout based on the screen size dynamically, while adaptive design uses predefined layouts for specific device sizes.",
          level: "EASY",
          moduleId: 9,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question: "How does accessibility play a role in UI/UX design?",
          answer:
            "Accessibility ensures that products can be used by people with a wide range of abilities and disabilities. It involves designing with considerations such as color contrast, text size, and keyboard navigation.",
          level: "EASY",
          moduleId: 9,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 10,
          question:
            "What are common UX metrics to measure the success of a product?",
          answer:
            "Common UX metrics include task success rate, time on task, error rate, user satisfaction (measured through surveys like the System Usability Scale), and Net Promoter Score (NPS).",
          level: "EASY",
          moduleId: 9,
          moduleName: "UI/UX",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "lida_33",
    },
    {
      moduleId: 10,
      moduleName: "GO",
      dateCreated: "2024-05-16T11:46:40.273297",
      stackName: "GO",
      img: "/assets/home/go.svg",
      cards: [
        {
          cardId: 1,
          question: "What is Go?",
          answer:
            "Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It features concurrent programming, garbage collection, and dynamic typing capabilities.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What are the main features of Go?",
          answer:
            "Key features include simplicity, efficiency, strong standard library, built-in concurrency (goroutines), and garbage collection.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "Why is Go popular for concurrent programming?",
          answer:
            "Go is popular for concurrent programming due to its lightweight goroutines and channels, which allow for easy and efficient communication between concurrent processes.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question: "Can Go be used for web development?",
          answer:
            "Yes, Go is suitable for web development. It provides libraries like net/http for building web servers and applications.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "What is a goroutine in Go?",
          answer:
            "A goroutine is a lightweight thread managed by the Go runtime, allowing for concurrent execution of functions.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "How does Go handle errors?",
          answer:
            "Go encourages explicit error handling by returning errors as part of function return values, typically using the error interface type.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "What are channels in Go?",
          answer:
            "Channels are a way for goroutines to communicate with each other and synchronize their execution, providing a mechanism for safe data exchange.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question: "Is Go suitable for large-scale applications?",
          answer:
            "Yes, Go is designed to scale well with large codebases and is used in many large-scale applications due to its performance and simplicity.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question: "What is the standard build tool for Go?",
          answer:
            "The standard build tool for Go is the go command, which handles building, testing, and managing Go projects.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 10,
          question:
            "How does Go compare to other languages like Python or Java?",
          answer:
            "Go is often faster than Python and has a simpler syntax. Compared to Java, Go has a smaller standard library but excels in simplicity and performance, especially in concurrent environments.",
          level: "EASY",
          moduleId: 10,
          moduleName: "GO",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "roman99",
    },
    {
      moduleId: 11,
      moduleName: "PHP",
      dateCreated: "2024-05-16T12:17:43.520634",
      stackName: "PHP",
      img: "/assets/home/php.svg",
      cards: [
        {
          cardId: 0,
          question: "What is PHP?",
          answer:
            "PHP is a server-side scripting language used for web development to create dynamic web pages.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 1,
          question: "Can PHP be used for command-line scripting?",
          answer:
            "Yes, PHP can be used for command-line scripting and can also be used to develop desktop applications.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 2,
          question: "What is the primary use of PHP in web development?",
          answer:
            "PHP is primarily used for server-side scripting to generate dynamic web page content.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 3,
          question: "How does PHP interact with databases?",
          answer:
            "PHP interacts with databases by using specific extensions or libraries, such as MySQLi or PDO, to connect, query, and manipulate data.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 4,
          question:
            "What is the difference between GET and POST methods in PHP?",
          answer:
            "GET is used to retrieve data and appends data to the URL, while POST is used to send data to a server to create/update a resource, and the data is included in the body of the request.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 5,
          question: "Can PHP be embedded in HTML?",
          answer:
            "Yes, PHP code can be embedded within HTML files, and the PHP interpreter processes the PHP code within the HTML.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 6,
          question: "What is the role of the PHP include statement?",
          answer:
            "The include statement allows you to include and process the content of another file within the current PHP file.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 7,
          question: "How does PHP handle errors?",
          answer:
            "PHP handles errors through error reporting levels and error handling functions, which can be configured to display or log errors.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 8,
          question: "What is the purpose of sessions in PHP?",
          answer:
            "Sessions in PHP are used to store user data across multiple pages, allowing for a more personalized user experience.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
        {
          cardId: 9,
          question:
            "What is the difference between a function and a method in PHP?",
          answer:
            "A function is a standalone piece of code that can be reused, while a method is a function that is part of a class and can access the properties and behaviors defined in that class.",
          level: "EASY",
          moduleId: 11,
          moduleName: "PHP",
          dateCreated: "2024-05-16T08:17:11.389448",
        },
      ],
      username: "rabindranath_105",
    },
  ],
  current_page: 0,
  total_elements: 12,
  total_pages: 1,
}
