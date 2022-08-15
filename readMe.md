# Typescript 101 

Everything you need to know about building with typescript

### Overview 
  1. Basics
  2. Types
  3. Functions
  4. Object Types
  5. Type Manipulation
  6. Classes
  7. Modules


[Official TypeScript Doc](https://www.typescriptlang.org/docs/)

[TypeScript For Node Devs](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)



# Add Typescript to a project

1. create a folder with two folders within it src && dist
2. within the folder run tsc --init
3. within the config file specify value for key target to "ES2016" or "es6"
4. specify value for rootDir key as "./src"
5. specify value for outDir key as "./dist"
6. Create index.ts file within src folder and start coding
7. When you want to compile just execute the tsc cmd and your js file will appear in the dist folder.

Sidenote : execute TypeScript files from the command line
 execute  ts-node filename