---
title: How to Create Your Own Medium-Style Rich Text Editor in React
description: Learn how to create a custom text editor from scratch using React and JavaScript
datePublished: 2020-06-25T00:00:00
dateUpdated: 2023-09-20T00:00:00
---

> _Note: This is tutorial is intended as practice to improve your JavaScript and React skills. I would not recommend using this in a production application. The way we are inserting html into the DOM is not secure and can lead to potential security vulnerabilities. There are some great libraries for building custom text editors that would be more suitable for a production application_

[Slate.js](https://github.com/ianstormtaylor/slate) is popular library for building text editors similar to medium.

[React Markdown](https://github.com/remarkjs/react-markdown) This is an excellent and highly customizable markdown renderer.

Recently I was building a blog similar to Medium as a personal project and I needed to build a WYSIWYG text editor. I considered using a framework but I figured it would be a better learning experience to actually build it from scratch. It was easier than I expected it to be, but I did find that text editors are very finicky and hard to get right. The text editor we will build here is not perfect, but it works and it is a good starting point to build on top of. Setting Up

To get started make sure you have Node.js installed on your machine and run this in the terminal:

`npx create-react-app sample-text-editor`

Once it finishes installing make sure all the dependencies are installed by running:

`npm i`

Then go ahead and clear all the boilerplate so we have a fresh start.

`rm -rf ./src/logo.svg ./src/serviceWorker.js`

And then you can copy and paste this into your App.js:

    1import React from 'react';
    2import './App.css';
    3
    4function App() {
    5  return (
    6    <div className='app'></div
    7  );
    8}
    9export default App

Finally, open the project in your browser and you should see a blank page. From here we are going to create two components: editor and toolbar.

    1mkdir ./src/editor
    2mkdir ./src/toolbar
    3touch ./src/components/editor/Editor.js
    4touch ./src/components/editor/Editor.css
    5touch ./src/components/toolbar/Toolbar.js
    6touch ./src/components/toolbar/Toolbar.css

To start we are going to create the toolbar and import it into the editor; next, we will import the editor into App.js to render it in the browser.

### Create Toolbar.js

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

    1.toolbar {
    2  border: solid 1px #ddd;
    3  background: #f4f4f4;
    4  padding: 5px;
    5  border-radius: 3px;
    6  position: fixed;
    7  top: 50px;
    8  width: 100%;
    9  display: flex;
    10  align-items: center;
    11  justify-content: space-evenly;
    12}
    13.hidden {
    14  display: none;
    15}

Create Editor.js

Now import Toolbar.js into Editor.js and set it up like so:

    1import React from 'react';
    2
    3import Toolbar from '../toolbar/Toolbar';
    4
    5import './Editor.css';
    6
    7export default function Editor() {
    8  function paste(e) {}
    9
    10  return (
    11    <React.Fragment>
    12      <Toolbar />
    13
    14      <div
    15        id='title'
    16        contentEditable='true'
    17        data-placeholder='Title...'
    18        className='title'
    19      ></div>
    20
    21      <div
    22        className='editor'
    23        id='editor'
    24        contentEditable='true'
    25        data-placeholder='Body...'
    26        onPaste={(e) => paste(e)}
    27      ></div>
    28    </React.Fragment>
    29    );
    30}

Inside of `<React.Fragment>` we render `<ToolBar />` and then create two `<div>` elements. Each `<div>` has an attribute called `contentEditable` that we have set to true. This allows the `<div>` elements to act as inputs in which the user can write. The reason we created two is for one to act as the title of the blog and the other to act as the body.

The other thing we did here is create an attribute called data-placeholder on each <div> That, with a little CSS, will act as a placeholder for our input areas. Here is the CSS to make it happen:

    1#title:empty:before,
    2.editor:empty:before {
    3  content: attr(data-placeholder);
    4  color: gray;
    5}
    6

The result should be gray text specifying title and body. Here is the whole Editor.css file:

    1.editor {
    2  width: 95%;
    3  max-width: 700px;
    4  min-height: 100px;
    5  margin-left: auto;
    6  margin-right: auto;
    7  margin-top: 20px;
    8  font-size: 20px;
    9}
    10
    11.editor > li {
    12  list-style: square;
    13  margin: initial;
    14}
    15
    16#title {
    17  width: 95%;
    18  max-width: 700px;
    19  margin-left: auto;
    20  margin-right: auto;
    21  margin-top: 135px;
    22  font-size: 40px;
    23}
    24
    25.editor:focus,
    26#title:focus {
    27  outline: none;
    28}
    29
    30#title:empty:before,
    31.editor:empty:before {
    32  content: attr(data-placeholder);
    33  color: gray;
    34}
    35
    36.codeBlock {
    37  background-color: rgb(21, 34, 75);
    38  margin-left: auto;
    39  margin-right: auto;
    40  margin-top: 0;
    41  margin-bottom: 0;
    42  height: auto;
    43  min-height: 39px;
    44  font-family: 'Courier New', Courier, monospace;
    45  overflow: auto;
    46  color: white;
    47  padding: 8px;
    48}
    49

Be sure you have imported Editor.js into App.js:

    1import React from 'react';
    2import Editor from './editor/Editor';
    3import './App.css';
    4
    5function App() {
    6  return (
    7    <div className="app">
    8      <Editor />
    9    </div>
    10  );
    11}
    12
    13export default App;

Now that we have the editor and toolbar rendered in the browser with some basic styling, we can start adding some functionality.

### Toolbar.js Functions

These functions should all be written inside Toolbar.js

#### .execCommand()

First, let's talk about `.execCommand()` . This becomes available when you set an HTML element’s `contenteditable` attribute to true. It basically allows you to run commands that manipulate the editable area. Be aware that MDN shows an obsolete warning for this method so it’s possible that it might not work the way you expect between browsers, so be sure to try your text editor in different browsers. It might be better to figure out your own way to implement certain features instead of relying on `.execCommand()`; for the purpose of this post we will stick with `execCommand()`.

    1// Basic syntax
    2.execCommand(command, boolean, value);

The boolean value determines whether or not a default interface is shown. It should always be set to false because some browsers do not support it.

#### format()

The first function we will implement is `format()`. This will be a generic function that formats `.execCommand()` so we don’t have to worry about writing out the whole thing every time we use it. Write this inside Toolbar.js:

    1function format(com, val) {
    2  document.execCommand(com, false, val);
    3}

``functionaddLineAfterBlock(id) { const block = document.getElementById(`${id}`); const div = document.createElement('div'); const br = document.createElement('br'); div.appendChild(br); if (!block) { return; } else { block.after(div); } }``

#### addLink()

Now let’s set up `addLink()`. This function is going to show or hide the input that allows us to add a URL link to a word or line.

    1function addLink(){
    2  const show = document.getElementById('url-input');
    3
    4  if (show.classList.contains('hidden')) {
    5    show.classList.remove('hidden');
    6  } else {
    7    show.classList.add('hidden');
    8  }
    9}

#### setUrl()

Next let’s set up `setUrl()`.

    1function setUrl(e) {
    2  e.preventDefault();
    3  const url = document.getElementById('txtFormatUrl').value;
    4  const show = document.getElementById('url-input');
    5  const text = document.getSelection();
    6
    7  format(
    8    'insertHTML',
    9    `<a href='${url}' target='_blank'>${text} </a>`
    10  );
    11
    12  document.getElementById('txtFormatUrl').value = '';
    13  show.classList.add('hidden');
    14}

Here we are getting the value from the URL input in our toolbar and then, using our format function, we insert a link directly into the DOM of our app.

#### setHeader()

Next up is `setHeader()`.

    1function setHeader() {
    2  const target = document.getSelection();
    3  format('insertHTML', `<h2>${target}</h2>`);
    4}

Here we are targeting the current selection and wrapping it in <h2> tags and inserting it into the DOM.

#### addCodeBlock()

Next, we have `addCodeBlock()`.

    1function addCodeBlock() {
    2  const codeBlock = document.createElement('pre');
    3  const target = document.getSelection();
    4
    5  if (
    6    target.focusNode.nodeName.includes('#text') ||
    7    target.focusNode.classList.contains('title') ||
    8    target.focusNode.className.includes('codeBlock')
    9  ) {
    10    return
    11  }
    12  const id = `codeBlock-${ document.getElementsByClassName('codeBlock').length + 1 }`;
    13  codeBlock.classList.add('codeBlock')
    14
    15  format(
    16    'insertHTML',
    17    `<pre class='codeBlock' id='${id}'>${target}</pre>`
    18  );
    19  addLineAfterBlock(id)
    20}

There is a lot going on here. First, we create a `pre` element and find where we want to place the block using `document.getSelection();` this will find the current selection and assign that value to the variable “target”. We then check that it is a valid location to place a code block. If it is, we create an ID for the code block which is done by counting all of the existing code blocks in the DOM and adding 1. Next we add the class `‘codeBlock’` to the `pre` element. Finally we use our format function to insert the html. At the end we call `addLineAfterBlock(id)`. This is a function we are going to create.

#### addLineAfterBlock()

We have to create `addLineAfterBlock()` because as `addCodeBlock()` currently functions there will be no empty space after the code block, which means the user won’t be able to continue typing outside of the code block.

    1function addLineAfterBlock(id) {
    2  const block = document.getElementById(`${id}`);
    3  const div = document.createElement('div');
    4  const br = document.createElement('br');
    5
    6  div.appendChild(br);
    7
    8  if (!block) {
    9    return;
    10  } else {
    11    block.after(div);
    12  }
    13}

Here we find the code block we just created in `addCodeBlock()` . We’ll create a `<div>` element and a `<br>` element and append it as a child of `<div>` . Then we’ll check that the block actually exists; if it does, we’ll use the `after()` method to insert `div` after the code block in the DOM. The reason we are using a `<div>` with a `<br>` child is because that is currently how browsers add new lines on `contentEditable` elements. It’s possible to change this behavior using `execCommand` but that can cause issues between browsers so it’s best to leave it alone.

#### handleSubmit()

Finally, let’s talk about how we might handle submit. For this example, I did not build a database but I will show you how you can actually pull all of the data from the inputs and format it into an object that you could send off to a database.

    1function handleSubmit() {
    2const content = document.getElementById('editor').innerHTML;
    3const title = document.getElementById('title').textContent;
    4const post = {
    5  title,
    6  content
    7};
    8
    9console.log(post);
    10// do an api post request here, save to state, etc...
    11}
    12

What we do here is find the value of content and title with `document.getElementById()` and assign them to keys in an object called post. We can then do something with that object, send it to a database, save it to state etc. In this case, I just `console.log()` it so you can see that it did in fact save all of your input including all HTML code and formatting. The format will stay the same once it is posted somewhere for others to read as long as you keep your CSS and class names consistent throughout your app

### Editor.js Functions

These functions should all be written inside of Editor.js

#### paste()

We have to create our own paste function because the default behavior of paste will retain all the styling and HTML of whatever you are copying, which can have unexpected results. Here’s how we can prevent this:

    1function paste(e) {
    2  e.preventDefault();
    3  const open = new RegExp('<', 'gi');
    4  const close = new RegExp('>', 'gi');
    5  const text = (e.originalEvent || e).clipboardData
    6    .getData('text/plain')
    7    .replace(open, '&lt')
    8    .replace(close, '&gt');
    9  document.execCommand('insertHTML', false, text)
    10}

First we prevent the default. Then we create two new RegExp that will be used to convert HTML into a format that will be displayed for us to read instead of added into the DOM. We then get the data that was copied in the clipboard and convert it to a string. After that we’ll use `.replace()` to covert the HTML and finally `.execCommand()` to insert the copied data into the selected area. I want to touch on Bold, Italicize, and List. All three are actually built into `.execCommand()` so all we have to do is set `format()` as the `onClick` function with the corresponding command.

    1<>
    2  <button onClick={(e) => format('bold')}>Bold</button>
    3  <button onClick={(e) => format('italic')}>Italics</button>
    4  <button onClick={(e) => format('insertUnorderedList')}>List</button>
    5</>
    6

This is a good starting point for building a WYSIWYG text editor. There are many more features you could implement on top of this build. I hope this helps someone and if you end up building on top of this or have some suggestions to make it better please let me know by commenting on the original medium post or reaching out over twitter.

This was originally published [on Medium by me](https://medium.com/javascript-in-plain-english/how-to-create-a-wysiwyg-text-editor-from-scratch-in-reactjs-710f9ebfa665) on June 26th 2020
