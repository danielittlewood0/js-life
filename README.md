This module was written as a JavaScript exercise. 
It consists of two pieces of functionality. 

# Game of Life
There is a JS implementation of Conway's Game of Life. 
The board is implmented as an `mxn` matrix of `0` and `1`s. 
It's written with the intention of being as clear and transparent as possible 
(as opposed to being performance or memory optimized). 

There are some tests, written in JUnit. 

# React Component
This project is included as a Git Submodule of another project, 
[my personal website](https://github.com/danielittlewood0/dbl28-website). 
The website is designed in React, and the project exports a React component, 
which I've called `<LifeBoard>`. At the time of writing, it isn't styled very
well, but it *is* functional. 
