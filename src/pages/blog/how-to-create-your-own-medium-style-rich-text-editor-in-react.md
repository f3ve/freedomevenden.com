---
title: How to Create Your Own Medium-Style Rich Text Editor in React
description: Learn how to create a custom text editor from scratch using React and JavaScript
datePublished: 2020-06-25T00:00:00
dateUpdated: 2023-09-21T00:00:00
---

> _Note: This is tutorial is intended as practice to improve your JavaScript and React skills. I would not recommend using this in a production application. The way we are inserting html into the DOM is not secure and can lead to potential security vulnerabilities. There are some great libraries for building custom text editors that would be more suitable for a production application_

[Slate.js](https://github.com/ianstormtaylor/slate) - is popular library for building text editors similar to medium.

[React Markdown](https://github.com/remarkjs/react-markdown) - React Component to render Markdown.

[Markdown-it](https://github.com/markdown-it/markdown-it) - Framework agnostic markdown parser that a lot of Markdown components and built on top of. Has a robust plugin system and is highly customizable.

Recently I was building a blog similar to Medium as a personal project and I needed to build a WYSIWYG text editor. I considered using a framework but I figured it would be a better learning experience to actually build it from scratch. It was easier than I expected it to be, but I did find that text editors are very finicky and hard to get right. The text editor we will build here is not perfect, but it works and it is a good starting point to build on top of. Setting Up

To get started make sure you have Node.js installed on your machine and run this in the terminal:

`npx create-react-app sample-text-editor`

Once it finishes installing make sure all the dependencies are installed by running:

`npm i`

Then go ahead and clear all the boilerplate so we have a fresh start.

`rm -rf ./src/logo.svg ./src/serviceWorker.js`

And then you can copy and paste this into your App.js:

```jsx
import React from 'react';
import './App.css';

function App() {
  return <div className="app"></div>;
}

export default App;
```

Finally, open the project in your browser and you should see a blank page. From here we are going to create two components: editor and toolbar.

```bash
    mkdir ./src/editor
    mkdir ./src/toolbar
    touch ./src/components/editor/Editor.js
    touch ./src/components/editor/Editor.css
    touch ./src/components/toolbar/Toolbar.js
    touch ./src/components/toolbar/Toolbar.css
```

To start we are going to create the toolbar and import it into the editor; next, we will import the editor into App.js to render it in the browser.

## Create Toolbar.js

Toolbar.js should look like this:

```jsx
import React from 'react';
import './Toolbar.css';

export default function Toolbar() {
  function format() {}

  function addLink() {}

  function setUrl() {}

  function setHeader() {}

  function addCodeBlock() {}

  function handleSubmit() {}

  return (
    <div className="toolbar">
      <button onClick={(e) => format('bold')}>Bold</button>
      <button onClick={(e) => format('italic')}>Italics</button>
      <button onClick={(e) => format('insertUnorderedList')}>List</button>
      <button onClick={(e) => addLink()}>Link</button>
      <div id="url-input" className="hidden">
        <input id="txtFormatUrl" placeholder="url" />
        <button onClick={(e) => setUrl(e)}>Create Link</button>
      </div>
      <button onClick={(e) => setHeader()}>Header</button>
      <button onClick={(e) => addCodeBlock()}>CodeBlock</button>
      <button onClick={(e) => handleSubmit()}>Submit</button>
    </div>
  );
}
```

Here we have created a `<div>` element that will act as a container for all of the formatting buttons. Each button will trigger one of the functions we defined above. Later we will add some actual code but for now we’ll just leave them empty.

Here is Toolbar.css:

```css
toolbar {
  border: solid 1px #ddd;
  background: #f4f4f4;
  padding: 5px;
  border-radius: 3px;
  position: fixed;
  top: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.hidden {
  display: none;
}
```

## Create Editor.js

Now import Toolbar.js into Editor.js and set it up like so:

```jsx
import React from 'react';

import Toolbar from '../toolbar/Toolbar';

import './Editor.css';

export default function Editor() {
  function paste(e) {}

  return (
    <React.Fragment>
      <Toolbar />

      <div
        id="title"
        contentEditable="true"
        data-placeholder="Title..."
        className="title"
      ></div>

      <div
        className="editor"
        id="editor"
        contentEditable="true"
        data-placeholder="Body..."
        onPaste={(e) => paste(e)}
      ></div>
    </React.Fragment>
  );
}
```

Inside of `<React.Fragment>` we render `<ToolBar />` and then create two `<div>` elements. Each `<div>` has an attribute called `contentEditable` that we have set to true. This allows the `<div>` elements to act as inputs in which the user can write. The reason we created two is for one to act as the title of the blog and the other to act as the body.

The other thing we did here is create an attribute called data-placeholder on each <div> That, with a little CSS, will act as a placeholder for our input areas. Here is the CSS to make it happen:

```css
#title:empty:before,
.editor:empty:before {
  content: attr(data-placeholder);
  color: gray;
}
```

The result should be gray text specifying title and body. Here is the whole Editor.css file:

```css
.editor {
  width: 95%;
  max-width: 700px;
  min-height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  font-size: 20px;
}

.editor > li {
  list-style: square;
  margin: initial;
}

#title {
  width: 95%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 135px;
  font-size: 40px;
}

.editor:focus,
#title:focus {
  outline: none;
}

#title:empty:before,
.editor:empty:before {
  content: attr(data-placeholder);
  color: gray;
}

.codeBlock {
  background-color: rgb(21, 34, 75);
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  height: auto;
  min-height: 39px;
  font-family: 'Courier New', Courier, monospace;
  overflow: auto;
  color: white;
  padding: 8px;
}
```

Be sure you have imported Editor.js into App.js:

```jsx
import React from 'react';
import Editor from './editor/Editor';
import './App.css';
function App() {
  return (
    <div className="app">
      <Editor />
    </div>
  );
}

export default App;
```

Now that we have the editor and toolbar rendered in the browser with some basic styling, we can start adding some functionality.

### Toolbar.js Functions

These functions should all be written inside Toolbar.js

### execCommand()

First, let's talk about `execCommand()` . This becomes available when you set an HTML element’s `contenteditable` attribute to true. It basically allows you to run commands that manipulate the editable area. Be aware that MDN shows an obsolete warning for this method so it’s possible that it might not work the way you expect between browsers, so be sure to try your text editor in different browsers. It might be better to figure out your own way to implement certain features instead of relying on `.execCommand()`; for the purpose of this post we will stick with `execCommand()`.

```js
// Basic syntax
element.execCommand(command, boolean, value);
```

The boolean value determines whether or not a default interface is shown. It should always be set to false because some browsers do not support it.

### format()

The first function we will implement is `format()`. This will be a generic function that formats `.execCommand()` so we don’t have to worry about writing out the whole thing every time we use it. Write this inside Toolbar.js:

```js
function format(com, val) {
  document.execCommand(com, false, val);
}
```

```js
function addLineAfterBlock(id) {
  const block = document.getElementById(`${id}`);
  const div = document.createElement('div');
  const br = document.createElement('br');
  div.appendChild(br);
  if (!block) {
    return;
  } else {
    block.after(div);
  }
}
```

### addLink()

Now let’s set up `addLink()`. This function is going to show or hide the input that allows us to add a URL link to a word or line.

```js
function addLink() {
  const show = document.getElementById('url-input');

  if (show.classList.contains('hidden')) {
    show.classList.remove('hidden');
  } else {
    show.classList.add('hidden');
  }
}
```

### setUrl()

Next let’s set up `setUrl()`.

```js
function setUrl(e) {
  e.preventDefault();
  const url = document.getElementById('txtFormatUrl').value;
  const show = document.getElementById('url-input');
  const text = document.getSelection();

  format('insertHTML', `<a href='${url}' target='_blank'>${text} </a>`);

  document.getElementById('txtFormatUrl').value = '';
  show.classList.add('hidden');
}
```

Here we are getting the value from the URL input in our toolbar and then, using our format function, we insert a link directly into the DOM of our app.

### setHeader()

Next up is `setHeader()`.

```js
function setHeader() {
  const target = document.getSelection();
  format('insertHTML', `<h2>${target}</h2>`);
}
```

Here we are targeting the current selection and wrapping it in <h2> tags and inserting it into the DOM.

### addCodeBlock()

Next, we have `addCodeBlock()`.

```js
function addCodeBlock() {
  const codeBlock = document.createElement('pre');
  const target = document.getSelection();

  if (
    target.focusNode.nodeName.includes('#text') ||
    target.focusNode.classList.contains('title') ||
    target.focusNode.className.includes('codeBlock')
  ) {
    return;
  }
  const id = `codeBlock-${
    document.getElementsByClassName('codeBlock').length + 1
  }`;
  codeBlock.classList.add('codeBlock');

  format('insertHTML', `<pre class='codeBlock' id='${id}'>${target}</pre>`);
  addLineAfterBlock(id);
}
```

There is a lot going on here. First, we create a `pre` element and find where we want to place the block using `document.getSelection();` this will find the current selection and assign that value to the variable “target”. We then check that it is a valid location to place a code block. If it is, we create an ID for the code block which is done by counting all of the existing code blocks in the DOM and adding 1. Next we add the class `‘codeBlock’` to the `pre` element. Finally we use our format function to insert the html. At the end we call `addLineAfterBlock(id)`. This is a function we are going to create.

### addLineAfterBlock()

We have to create `addLineAfterBlock()` because as `addCodeBlock()` currently functions there will be no empty space after the code block, which means the user won’t be able to continue typing outside of the code block.

```js
function addLineAfterBlock(id) {
  const block = document.getElementById(`${id}`);
  const div = document.createElement('div');
  const br = document.createElement('br');

  div.appendChild(br);

  if (!block) {
    return;
  } else {
    block.after(div);
  }
}
```

Here we find the code block we just created in `addCodeBlock()` . We’ll create a `<div>` element and a `<br>` element and append it as a child of `<div>` . Then we’ll check that the block actually exists; if it does, we’ll use the `after()` method to insert `div` after the code block in the DOM. The reason we are using a `<div>` with a `<br>` child is because that is currently how browsers add new lines on `contentEditable` elements. It’s possible to change this behavior using `execCommand` but that can cause issues between browsers so it’s best to leave it alone.

### handleSubmit()

Finally, let’s talk about how we might handle submit. For this example, I did not build a database but I will show you how you can actually pull all of the data from the inputs and format it into an object that you could send off to a database.

```js
function handleSubmit() {
  const content = document.getElementById('editor').innerHTML;
  const title = document.getElementById('title').textContent;
  const post = {
    title,
    content,
  };

  console.log(post);
  // do an api post request here, save to state, etc...
}
```

What we do here is find the value of content and title with `document.getElementById()` and assign them to keys in an object called post. We can then do something with that object, send it to a database, save it to state etc. In this case, I just `console.log()` it so you can see that it did in fact save all of your input including all HTML code and formatting. The format will stay the same once it is posted somewhere for others to read as long as you keep your CSS and class names consistent throughout your app

## Editor.js Functions

These functions should all be written inside of Editor.js

### paste()

We have to create our own paste function because the default behavior of paste will retain all the styling and HTML of whatever you are copying, which can have unexpected results. Here’s how we can prevent this:

```js
function paste(e) {
  e.preventDefault();
  const open = new RegExp('<', 'gi');
  const close = new RegExp('>', 'gi');
  const text = (e.originalEvent || e).clipboardData
    .getData('text/plain')
    .replace(open, '&lt')
    .replace(close, '&gt');
  document.execCommand('insertHTML', false, text);
}
```

First we prevent the default. Then we create two new RegExp that will be used to convert HTML into a format that will be displayed for us to read instead of added into the DOM. We then get the data that was copied in the clipboard and convert it to a string. After that we’ll use `.replace()` to covert the HTML and finally `.execCommand()` to insert the copied data into the selected area. I want to touch on Bold, Italicize, and List. All three are actually built into `.execCommand()` so all we have to do is set `format()` as the `onClick` function with the corresponding command.

```jsx
<>
  <button onClick={(e) => format('bold')}>Bold</button>
  <button onClick={(e) => format('italic')}>Italics</button>
  <button onClick={(e) => format('insertUnorderedList')}>List</button>
</>
```

This is a good starting point for building a WYSIWYG text editor. There are many more features you could implement on top of this build. I hope this helps someone.
