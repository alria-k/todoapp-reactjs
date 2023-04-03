### Hi there! This is my first README file in GitHub Repository!

Also, this is my first project which i made by using **React JS & Vite**!

###### _(Sorry if my English bad, I'm trying to do not using Translator, only to fix errors in words, and check if my structure of sentence are right)_

# A Few words about this project :)

This is obviously **_TodoApp_** (haha).

A decided to do some little menu in order to move through the site and see what Task did you
Completed and which are uncompleted. I did want to change just interface when user click on
buttons, i decided to use React-Router-DOM. I thought it would be very interesting and this is the major
thing in SPA (i guess). And i was right! It was an interesting and thought-provoking experience.

Also, i learned when you're using **\<Outlet />** you can pass some context inside components
which appears in instead of **\<Outlet />**, and you can use it in components by using  
React-Router-DOM hook - **useOutletContext()**.

And i used the approach when in **\<Outlet />** context i pass value like object where i put function to make the
task marked or unmarked and the array of objects with tasks, and in order
to show in completed URL - completed tasks, uncompleted URL - uncompleted tasks, i needed to check
only one boolean value in object of task. In FormList (task element) component, i didn't make
some new constant, i just pass **\<Outlet />** context as props in components and define it **useOutletContext()**
as a default. And after in Completed and Uncompleted i made new array of objects where i pushed all tasks which
approve the condition (completed == false || true) and return the FormList component and pass this new array of object as props (I felt genius :D)

# What did i learn?

React-router-DOM, useOutletContext(), Link, BrowserRouter, improved right file structure, Markdown language
