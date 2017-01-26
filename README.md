# Mason Example
This project serves as a boilerplate configuration of a Mason application

## Usage
#### Install required packages
`npm install -g mason.cli@0.1.0`

`npm install`

#### Create a simple class:
`mason scaffold class src/simple.js --classname=SimpleClass`

#### Create a class that extends another:
`mason scaffold class src/complex.js --classname="ComplexClass extends SimpleClass"`
