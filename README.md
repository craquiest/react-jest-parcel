# Using parcel-bundler with react and jest

1. Clone this repository

2. If you haven't already, install node and npm.  

```
brew install node 
```

3. Run cmd.sh which include the following commands to install dependencies as well as dev dependencies. 

```
npm init -y
npm i --save react react-dom
npm i --save-dev react-test-renderer
npm i --save-dev parcel-bundler @babel/preset-env @babel/preset-react
npm i --save-dev jest babel-jest enzyme enzyme-adapter-react-16
```

4. Then, in package.json, add the following settings in for scripts, babel and jest. 

```
"scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest",
    "test-watch": "jest --watchAll"
  },
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
  "jest": {
    "verbose": true,
    "testURL": "http://localhost/",
    "notify": false
  },
  
```

5. Reset git in your folder by deleting the .git folder, .gitignore and README, by running `the following:

```
rm -rf .git .gitignore README.md
git init
```

6. Start the developing cycle! `run npm start` in one terminal, `npm test-watch` in another, to build and test automatically your application as you modify index.html, scripts in js/ folder, styles in css/ folder. And don't forget to add tests in __tests__/ folder. 
