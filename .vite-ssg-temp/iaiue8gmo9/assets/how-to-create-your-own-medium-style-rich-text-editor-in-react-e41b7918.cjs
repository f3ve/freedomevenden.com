"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const CoreMdWrapper = require("./CoreMdWrapper-d6481cae.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
const title = "How to Create Your Own Medium-Style Rich Text Editor in React";
const description = "Learn how to create a custom text editor from scratch using React and JavaScript";
const datePublished = "2020-06-25T00:00:00.000Z";
const dateUpdated = "2023-09-21T00:00:00.000Z";
const meta = [{ "name": "keywords", "content": "medium-style rich text editor, react, how to, create your own" }, { "name": "type", "content": "article" }, { "property": "og:title", "content": "How to Create Your Own Medium-Style Rich Text Editor in React" }, { "name": "twitter:title", "content": "How to Create Your Own Medium-Style Rich Text Editor in React" }, { "name": "description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }, { "property": "og:description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }, { "name": "twitter:description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }];
const _sfc_main = {
  __name: "how-to-create-your-own-medium-style-rich-text-editor-in-react",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "How to Create Your Own Medium-Style Rich Text Editor in React", "description": "Learn how to create a custom text editor from scratch using React and JavaScript", "datePublished": "2020-06-25T00:00:00.000Z", "dateUpdated": "2023-09-21T00:00:00.000Z", "meta": [{ "name": "keywords", "content": "medium-style rich text editor, react, how to, create your own" }, { "name": "type", "content": "article" }, { "property": "og:title", "content": "How to Create Your Own Medium-Style Rich Text Editor in React" }, { "name": "twitter:title", "content": "How to Create Your Own Medium-Style Rich Text Editor in React" }, { "name": "description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }, { "property": "og:description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }, { "name": "twitter:description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }] };
    __expose({ frontmatter });
    const head = { "title": "How to Create Your Own Medium-Style Rich Text Editor in React", "meta": [{ "name": "keywords", "content": "medium-style rich text editor, react, how to, create your own" }, { "name": "type", "content": "article" }, { "property": "og:title", "content": "How to Create Your Own Medium-Style Rich Text Editor in React" }, { "name": "twitter:title", "content": "How to Create Your Own Medium-Style Rich Text Editor in React" }, { "name": "description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }, { "property": "og:description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }, { "name": "twitter:description", "content": "Learn how to create a custom text editor from scratch using React and JavaScript" }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = CoreMdWrapper._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><blockquote${_scopeId}><p${_scopeId}><em${_scopeId}>Note: This is tutorial is intended as practice to improve your JavaScript and React skills. I would not recommend using this in a production application. The way we are inserting html into the DOM is not secure and can lead to potential security vulnerabilities. There are some great libraries for building custom text editors that would be more suitable for a production application</em></p></blockquote><h2 id="table-of-contents" tabindex="-1"${_scopeId}><a class="header-anchor" href="#table-of-contents"${_scopeId}>Table of Contents</a></h2><p${_scopeId}><div class="table-of-contents"${_scopeId}><ul${_scopeId}><li${_scopeId}><a href="#table-of-contents"${_scopeId}>Table of Contents</a></li><li${_scopeId}><a href="#tools"${_scopeId}>Tools</a></li><li${_scopeId}><a href="#getting-started"${_scopeId}>Getting Started</a></li><li${_scopeId}><a href="#create-toolbar.js"${_scopeId}>Create Toolbar.js</a></li><li${_scopeId}><a href="#create-editor.js"${_scopeId}>Create Editor.js</a><ul${_scopeId}><li${_scopeId}><a href="#toolbar.js-functions"${_scopeId}>Toolbar.js Functions</a></li><li${_scopeId}><a href="#execcommand()"${_scopeId}>execCommand()</a></li><li${_scopeId}><a href="#format()"${_scopeId}>format()</a></li><li${_scopeId}><a href="#addlink()"${_scopeId}>addLink()</a></li><li${_scopeId}><a href="#seturl()"${_scopeId}>setUrl()</a></li><li${_scopeId}><a href="#setheader()"${_scopeId}>setHeader()</a></li><li${_scopeId}><a href="#addcodeblock()"${_scopeId}>addCodeBlock()</a></li><li${_scopeId}><a href="#addlineafterblock()"${_scopeId}>addLineAfterBlock()</a></li><li${_scopeId}><a href="#handlesubmit()"${_scopeId}>handleSubmit()</a></li></ul></li><li${_scopeId}><a href="#editor.js-functions"${_scopeId}>Editor.js Functions</a><ul${_scopeId}><li${_scopeId}><a href="#paste()"${_scopeId}>paste()</a></li></ul></li></ul></div></p><h2 id="tools" tabindex="-1"${_scopeId}><a class="header-anchor" href="#tools"${_scopeId}>Tools</a></h2><p${_scopeId}><a href="https://github.com/ianstormtaylor/slate" target="_blank" rel="noopener"${_scopeId}>Slate.js</a> - A popular library for building text editors similar to medium.</p><p${_scopeId}><a href="https://github.com/remarkjs/react-markdown" target="_blank" rel="noopener"${_scopeId}>React Markdown</a> - A React Component to render Markdown.</p><p${_scopeId}><a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener"${_scopeId}>Markdown-it</a> - Framework agnostic markdown parser that a lot of Markdown components are built on top of. Has a robust plugin system and is highly customizable.</p><p${_scopeId}>Recently I was building a blog similar to Medium as a personal project and I needed to build a WYSIWYG text editor. I considered using a framework but I figured it would be a better learning experience to actually build it from scratch. It was easier than I expected it to be, but I did find that text editors are very finicky and hard to get right. The text editor we will build here is not perfect, but it works and it is a good starting point to build on top of. Setting Up</p><h2 id="getting-started" tabindex="-1"${_scopeId}><a class="header-anchor" href="#getting-started"${_scopeId}>Getting Started</a></h2><p${_scopeId}>To get started make sure you have Node.js installed on your machine and run this in the terminal:</p><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-string"${_scopeId}>npx</span> <span class="hljs-built_in"${_scopeId}>create-react-app</span> <span class="hljs-string"${_scopeId}>sample-text-editor</span></code></p><p${_scopeId}>Once it finishes installing make sure all the dependencies are installed by running:</p><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-built_in"${_scopeId}>npm</span> i</code></p><p${_scopeId}>Then go ahead and clear all the boilerplate so we have a fresh start.</p><p${_scopeId}><code class="hljs"${_scopeId}>rm -rf .<span class="hljs-regexp"${_scopeId}>/src/</span>logo.svg .<span class="hljs-regexp"${_scopeId}>/src/</span>serviceWorker.js</code></p><p${_scopeId}>And then you can copy and paste this into your App.js:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>React</span> <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;
<span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-string"${_scopeId}>&#39;./App.css&#39;</span>;

<span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>App</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>return</span> <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>div</span> <span class="hljs-attr"${_scopeId}>className</span>=<span class="hljs-string"${_scopeId}>&quot;app&quot;</span>&gt;</span><span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>div</span>&gt;</span></span>;
}

<span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-title class_"${_scopeId}>App</span>;
</code></pre><p${_scopeId}>Finally, open the project in your browser and you should see a blank page. From here we are going to create two components: editor and toolbar.</p><pre${_scopeId}><code class="hljs language-bash"${_scopeId}>    <span class="hljs-built_in"${_scopeId}>mkdir</span> ./src/editor
    <span class="hljs-built_in"${_scopeId}>mkdir</span> ./src/toolbar
    <span class="hljs-built_in"${_scopeId}>touch</span> ./src/components/editor/Editor.js
    <span class="hljs-built_in"${_scopeId}>touch</span> ./src/components/editor/Editor.css
    <span class="hljs-built_in"${_scopeId}>touch</span> ./src/components/toolbar/Toolbar.js
    <span class="hljs-built_in"${_scopeId}>touch</span> ./src/components/toolbar/Toolbar.css
</code></pre><p${_scopeId}>To start we are going to create the toolbar and import it into the editor; next, we will import the editor into App.js to render it in the browser.</p><h2 id="create-toolbar.js" tabindex="-1"${_scopeId}><a class="header-anchor" href="#create-toolbar.js"${_scopeId}>Create Toolbar.js</a></h2><p${_scopeId}>Toolbar.js should look like this:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>React</span> <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;
<span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-string"${_scopeId}>&#39;./Toolbar.css&#39;</span>;

<span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>Toolbar</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>format</span>(<span class="hljs-params"${_scopeId}></span>) {}

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>addLink</span>(<span class="hljs-params"${_scopeId}></span>) {}

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>setUrl</span>(<span class="hljs-params"${_scopeId}></span>) {}

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>setHeader</span>(<span class="hljs-params"${_scopeId}></span>) {}

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>addCodeBlock</span>(<span class="hljs-params"${_scopeId}></span>) {}

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>handleSubmit</span>(<span class="hljs-params"${_scopeId}></span>) {}

  <span class="hljs-keyword"${_scopeId}>return</span> (
    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>div</span> <span class="hljs-attr"${_scopeId}>className</span>=<span class="hljs-string"${_scopeId}>&quot;toolbar&quot;</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> format(&#39;bold&#39;)}&gt;Bold<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> format(&#39;italic&#39;)}&gt;Italics<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> format(&#39;insertUnorderedList&#39;)}&gt;List<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> addLink()}&gt;Link<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>div</span> <span class="hljs-attr"${_scopeId}>id</span>=<span class="hljs-string"${_scopeId}>&quot;url-input&quot;</span> <span class="hljs-attr"${_scopeId}>className</span>=<span class="hljs-string"${_scopeId}>&quot;hidden&quot;</span>&gt;</span>
        <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>input</span> <span class="hljs-attr"${_scopeId}>id</span>=<span class="hljs-string"${_scopeId}>&quot;txtFormatUrl&quot;</span> <span class="hljs-attr"${_scopeId}>placeholder</span>=<span class="hljs-string"${_scopeId}>&quot;url&quot;</span> /&gt;</span>
        <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> setUrl(e)}&gt;Create Link<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>div</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> setHeader()}&gt;Header<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> addCodeBlock()}&gt;CodeBlock<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> handleSubmit()}&gt;Submit<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>div</span>&gt;</span></span>
  );
}
</code></pre><p${_scopeId}>Here we have created a <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> element that will act as a container for all of the formatting buttons. Each button will trigger one of the functions we defined above. Later we will add some actual code but for now we’ll just leave them empty.</p><p${_scopeId}>Here is Toolbar.css:</p><pre${_scopeId}><code class="hljs language-css"${_scopeId}>toolbar {
  <span class="hljs-attribute"${_scopeId}>border</span>: solid <span class="hljs-number"${_scopeId}>1px</span> <span class="hljs-number"${_scopeId}>#ddd</span>;
  <span class="hljs-attribute"${_scopeId}>background</span>: <span class="hljs-number"${_scopeId}>#f4f4f4</span>;
  <span class="hljs-attribute"${_scopeId}>padding</span>: <span class="hljs-number"${_scopeId}>5px</span>;
  <span class="hljs-attribute"${_scopeId}>border-radius</span>: <span class="hljs-number"${_scopeId}>3px</span>;
  <span class="hljs-attribute"${_scopeId}>position</span>: fixed;
  <span class="hljs-attribute"${_scopeId}>top</span>: <span class="hljs-number"${_scopeId}>50px</span>;
  <span class="hljs-attribute"${_scopeId}>width</span>: <span class="hljs-number"${_scopeId}>100%</span>;
  <span class="hljs-attribute"${_scopeId}>display</span>: flex;
  <span class="hljs-attribute"${_scopeId}>align-items</span>: center;
  <span class="hljs-attribute"${_scopeId}>justify-content</span>: space-evenly;
}
<span class="hljs-selector-class"${_scopeId}>.hidden</span> {
  <span class="hljs-attribute"${_scopeId}>display</span>: none;
}
</code></pre><h2 id="create-editor.js" tabindex="-1"${_scopeId}><a class="header-anchor" href="#create-editor.js"${_scopeId}>Create Editor.js</a></h2><p${_scopeId}>Now import Toolbar.js into Editor.js and set it up like so:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>React</span> <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>Toolbar</span> <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;../toolbar/Toolbar&#39;</span>;

<span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>Editor</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>paste</span>(<span class="hljs-params"${_scopeId}>e</span>) {}

  <span class="hljs-keyword"${_scopeId}>return</span> (
    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>React.Fragment</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Toolbar</span> /&gt;</span>

      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>div</span>
        <span class="hljs-attr"${_scopeId}>id</span>=<span class="hljs-string"${_scopeId}>&quot;title&quot;</span>
        <span class="hljs-attr"${_scopeId}>contentEditable</span>=<span class="hljs-string"${_scopeId}>&quot;true&quot;</span>
        <span class="hljs-attr"${_scopeId}>data-placeholder</span>=<span class="hljs-string"${_scopeId}>&quot;Title...&quot;</span>
        <span class="hljs-attr"${_scopeId}>className</span>=<span class="hljs-string"${_scopeId}>&quot;title&quot;</span>
      &gt;</span><span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>div</span>&gt;</span>

      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>div</span>
        <span class="hljs-attr"${_scopeId}>className</span>=<span class="hljs-string"${_scopeId}>&quot;editor&quot;</span>
        <span class="hljs-attr"${_scopeId}>id</span>=<span class="hljs-string"${_scopeId}>&quot;editor&quot;</span>
        <span class="hljs-attr"${_scopeId}>contentEditable</span>=<span class="hljs-string"${_scopeId}>&quot;true&quot;</span>
        <span class="hljs-attr"${_scopeId}>data-placeholder</span>=<span class="hljs-string"${_scopeId}>&quot;Body...&quot;</span>
        <span class="hljs-attr"${_scopeId}>onPaste</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> paste(e)}
      &gt;<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>div</span>&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>React.Fragment</span>&gt;</span></span>
  );
}
</code></pre><p${_scopeId}>Inside of <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;React.Fragment&gt;</span></code> we render <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;ToolBar /&gt;</span></code> and then create two <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> elements. Each <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> has an attribute called <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>contentEditable</span></code> that we have set to true. This allows the <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> elements to act as inputs in which the user can write. The reason we created two is for one to act as the title of the blog and the other to act as the body.</p><p${_scopeId}>The other thing we did here is create an attribute called data-placeholder on each <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> That, with a little CSS, will act as a placeholder for our input areas. Here is the CSS to make it happen:</p><pre${_scopeId}><code class="hljs language-css"${_scopeId}><span class="hljs-selector-id"${_scopeId}>#title</span><span class="hljs-selector-pseudo"${_scopeId}>:empty</span><span class="hljs-selector-pseudo"${_scopeId}>:before</span>,
<span class="hljs-selector-class"${_scopeId}>.editor</span><span class="hljs-selector-pseudo"${_scopeId}>:empty</span><span class="hljs-selector-pseudo"${_scopeId}>:before</span> {
  <span class="hljs-attribute"${_scopeId}>content</span>: <span class="hljs-built_in"${_scopeId}>attr</span>(data-placeholder);
  <span class="hljs-attribute"${_scopeId}>color</span>: gray;
}
</code></pre><p${_scopeId}>The result should be gray text specifying title and body. Here is the whole Editor.css file:</p><pre${_scopeId}><code class="hljs language-css"${_scopeId}><span class="hljs-selector-class"${_scopeId}>.editor</span> {
  <span class="hljs-attribute"${_scopeId}>width</span>: <span class="hljs-number"${_scopeId}>95%</span>;
  <span class="hljs-attribute"${_scopeId}>max-width</span>: <span class="hljs-number"${_scopeId}>700px</span>;
  <span class="hljs-attribute"${_scopeId}>min-height</span>: <span class="hljs-number"${_scopeId}>100px</span>;
  <span class="hljs-attribute"${_scopeId}>margin-left</span>: auto;
  <span class="hljs-attribute"${_scopeId}>margin-right</span>: auto;
  <span class="hljs-attribute"${_scopeId}>margin-top</span>: <span class="hljs-number"${_scopeId}>20px</span>;
  <span class="hljs-attribute"${_scopeId}>font-size</span>: <span class="hljs-number"${_scopeId}>20px</span>;
}

<span class="hljs-selector-class"${_scopeId}>.editor</span> &gt; <span class="hljs-selector-tag"${_scopeId}>li</span> {
  <span class="hljs-attribute"${_scopeId}>list-style</span>: square;
  <span class="hljs-attribute"${_scopeId}>margin</span>: initial;
}

<span class="hljs-selector-id"${_scopeId}>#title</span> {
  <span class="hljs-attribute"${_scopeId}>width</span>: <span class="hljs-number"${_scopeId}>95%</span>;
  <span class="hljs-attribute"${_scopeId}>max-width</span>: <span class="hljs-number"${_scopeId}>700px</span>;
  <span class="hljs-attribute"${_scopeId}>margin-left</span>: auto;
  <span class="hljs-attribute"${_scopeId}>margin-right</span>: auto;
  <span class="hljs-attribute"${_scopeId}>margin-top</span>: <span class="hljs-number"${_scopeId}>135px</span>;
  <span class="hljs-attribute"${_scopeId}>font-size</span>: <span class="hljs-number"${_scopeId}>40px</span>;
}

<span class="hljs-selector-class"${_scopeId}>.editor</span><span class="hljs-selector-pseudo"${_scopeId}>:focus</span>,
<span class="hljs-selector-id"${_scopeId}>#title</span><span class="hljs-selector-pseudo"${_scopeId}>:focus</span> {
  <span class="hljs-attribute"${_scopeId}>outline</span>: none;
}

<span class="hljs-selector-id"${_scopeId}>#title</span><span class="hljs-selector-pseudo"${_scopeId}>:empty</span><span class="hljs-selector-pseudo"${_scopeId}>:before</span>,
<span class="hljs-selector-class"${_scopeId}>.editor</span><span class="hljs-selector-pseudo"${_scopeId}>:empty</span><span class="hljs-selector-pseudo"${_scopeId}>:before</span> {
  <span class="hljs-attribute"${_scopeId}>content</span>: <span class="hljs-built_in"${_scopeId}>attr</span>(data-placeholder);
  <span class="hljs-attribute"${_scopeId}>color</span>: gray;
}

<span class="hljs-selector-class"${_scopeId}>.codeBlock</span> {
  <span class="hljs-attribute"${_scopeId}>background-color</span>: <span class="hljs-built_in"${_scopeId}>rgb</span>(<span class="hljs-number"${_scopeId}>21</span>, <span class="hljs-number"${_scopeId}>34</span>, <span class="hljs-number"${_scopeId}>75</span>);
  <span class="hljs-attribute"${_scopeId}>margin-left</span>: auto;
  <span class="hljs-attribute"${_scopeId}>margin-right</span>: auto;
  <span class="hljs-attribute"${_scopeId}>margin-top</span>: <span class="hljs-number"${_scopeId}>0</span>;
  <span class="hljs-attribute"${_scopeId}>margin-bottom</span>: <span class="hljs-number"${_scopeId}>0</span>;
  <span class="hljs-attribute"${_scopeId}>height</span>: auto;
  <span class="hljs-attribute"${_scopeId}>min-height</span>: <span class="hljs-number"${_scopeId}>39px</span>;
  <span class="hljs-attribute"${_scopeId}>font-family</span>: <span class="hljs-string"${_scopeId}>&#39;Courier New&#39;</span>, Courier, monospace;
  <span class="hljs-attribute"${_scopeId}>overflow</span>: auto;
  <span class="hljs-attribute"${_scopeId}>color</span>: white;
  <span class="hljs-attribute"${_scopeId}>padding</span>: <span class="hljs-number"${_scopeId}>8px</span>;
}
</code></pre><p${_scopeId}>Be sure you have imported Editor.js into App.js:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>React</span> <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;
<span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>Editor</span> <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;./editor/Editor&#39;</span>;
<span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-string"${_scopeId}>&#39;./App.css&#39;</span>;
<span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>App</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>return</span> (
    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>div</span> <span class="hljs-attr"${_scopeId}>className</span>=<span class="hljs-string"${_scopeId}>&quot;app&quot;</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Editor</span> /&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>div</span>&gt;</span></span>
  );
}

<span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-title class_"${_scopeId}>App</span>;
</code></pre><p${_scopeId}>Now that we have the editor and toolbar rendered in the browser with some basic styling, we can start adding some functionality.</p><h3 id="toolbar.js-functions" tabindex="-1"${_scopeId}><a class="header-anchor" href="#toolbar.js-functions"${_scopeId}>Toolbar.js Functions</a></h3><p${_scopeId}>These functions should all be written inside Toolbar.js</p><h3 id="execcommand()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#execcommand()"${_scopeId}>execCommand()</a></h3><p${_scopeId}>First, let’s talk about <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>execCommand</span><span class="hljs-params"${_scopeId}>()</span></span></code> . This becomes available when you set an HTML element’s <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>contenteditable</span></code> attribute to true. It basically allows you to run commands that manipulate the editable area. Be aware that MDN shows an obsolete warning for this method so it’s possible that it might not work the way you expect between browsers, so be sure to try your text editor in different browsers. It might be better to figure out your own way to implement certain features instead of relying on <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>execCommand</span><span class="hljs-params"${_scopeId}>()</span></span></code>; for the purpose of this post we will stick with <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>execCommand</span><span class="hljs-params"${_scopeId}>()</span></span></code>.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-comment"${_scopeId}>// Basic syntax</span>
element.<span class="hljs-title function_"${_scopeId}>execCommand</span>(command, boolean, value);
</code></pre><p${_scopeId}>The boolean value determines whether or not a default interface is shown. It should always be set to false because some browsers do not support it.</p><h3 id="format()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#format()"${_scopeId}>format()</a></h3><p${_scopeId}>The first function we will implement is <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}><span class="hljs-built_in"${_scopeId}>format</span></span>()</span></code>. This will be a generic function that formats <code class="hljs"${_scopeId}><span class="hljs-title"${_scopeId}>.execCommand()</span></code> so we don’t have to worry about writing out the whole thing every time we use it. Write this inside Toolbar.js:</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>format</span>(<span class="hljs-params"${_scopeId}>com, val</span>) {
  <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>execCommand</span>(com, <span class="hljs-literal"${_scopeId}>false</span>, val);
}
</code></pre><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>addLineAfterBlock</span>(<span class="hljs-params"${_scopeId}>id</span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> block = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>\`<span class="hljs-subst"${_scopeId}>\${id}</span>\`</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> div = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>createElement</span>(<span class="hljs-string"${_scopeId}>&#39;div&#39;</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> br = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>createElement</span>(<span class="hljs-string"${_scopeId}>&#39;br&#39;</span>);
  div.<span class="hljs-title function_"${_scopeId}>appendChild</span>(br);
  <span class="hljs-keyword"${_scopeId}>if</span> (!block) {
    <span class="hljs-keyword"${_scopeId}>return</span>;
  } <span class="hljs-keyword"${_scopeId}>else</span> {
    block.<span class="hljs-title function_"${_scopeId}>after</span>(div);
  }
}
</code></pre><h3 id="addlink()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#addlink()"${_scopeId}>addLink()</a></h3><p${_scopeId}>Now let’s set up <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>addLink</span><span class="hljs-params"${_scopeId}>()</span></span></code>. This function is going to show or hide the input that allows us to add a URL link to a word or line.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>addLink</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> show = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>&#39;url-input&#39;</span>);

  <span class="hljs-keyword"${_scopeId}>if</span> (show.<span class="hljs-property"${_scopeId}>classList</span>.<span class="hljs-title function_"${_scopeId}>contains</span>(<span class="hljs-string"${_scopeId}>&#39;hidden&#39;</span>)) {
    show.<span class="hljs-property"${_scopeId}>classList</span>.<span class="hljs-title function_"${_scopeId}>remove</span>(<span class="hljs-string"${_scopeId}>&#39;hidden&#39;</span>);
  } <span class="hljs-keyword"${_scopeId}>else</span> {
    show.<span class="hljs-property"${_scopeId}>classList</span>.<span class="hljs-title function_"${_scopeId}>add</span>(<span class="hljs-string"${_scopeId}>&#39;hidden&#39;</span>);
  }
}
</code></pre><h3 id="seturl()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#seturl()"${_scopeId}>setUrl()</a></h3><p${_scopeId}>Next let’s set up <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>setUrl</span><span class="hljs-params"${_scopeId}>()</span></span></code>.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>setUrl</span>(<span class="hljs-params"${_scopeId}>e</span>) {
  e.<span class="hljs-title function_"${_scopeId}>preventDefault</span>();
  <span class="hljs-keyword"${_scopeId}>const</span> url = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>&#39;txtFormatUrl&#39;</span>).<span class="hljs-property"${_scopeId}>value</span>;
  <span class="hljs-keyword"${_scopeId}>const</span> show = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>&#39;url-input&#39;</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> text = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getSelection</span>();

  <span class="hljs-title function_"${_scopeId}>format</span>(<span class="hljs-string"${_scopeId}>&#39;insertHTML&#39;</span>, <span class="hljs-string"${_scopeId}>\`&lt;a href=&#39;<span class="hljs-subst"${_scopeId}>\${url}</span>&#39; target=&#39;_blank&#39;&gt;<span class="hljs-subst"${_scopeId}>\${text}</span> &lt;/a&gt;\`</span>);

  <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>&#39;txtFormatUrl&#39;</span>).<span class="hljs-property"${_scopeId}>value</span> = <span class="hljs-string"${_scopeId}>&#39;&#39;</span>;
  show.<span class="hljs-property"${_scopeId}>classList</span>.<span class="hljs-title function_"${_scopeId}>add</span>(<span class="hljs-string"${_scopeId}>&#39;hidden&#39;</span>);
}
</code></pre><p${_scopeId}>Here we are getting the value from the URL input in our toolbar and then, using our format function, we insert a link directly into the DOM of our app.</p><h3 id="setheader()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#setheader()"${_scopeId}>setHeader()</a></h3><p${_scopeId}>Next up is <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>setHeader</span><span class="hljs-params"${_scopeId}>()</span></span></code>.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>setHeader</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> target = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getSelection</span>();
  <span class="hljs-title function_"${_scopeId}>format</span>(<span class="hljs-string"${_scopeId}>&#39;insertHTML&#39;</span>, <span class="hljs-string"${_scopeId}>\`&lt;h2&gt;<span class="hljs-subst"${_scopeId}>\${target}</span>&lt;/h2&gt;\`</span>);
}
</code></pre><p${_scopeId}>Here we are targeting the current selection and wrapping it in <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;h2&gt;</span></code> tags and inserting it into the DOM.</p><h3 id="addcodeblock()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#addcodeblock()"${_scopeId}>addCodeBlock()</a></h3><p${_scopeId}>Next, we have <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>addCodeBlock</span><span class="hljs-params"${_scopeId}>()</span></span></code>.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>addCodeBlock</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> codeBlock = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>createElement</span>(<span class="hljs-string"${_scopeId}>&#39;pre&#39;</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> target = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getSelection</span>();

  <span class="hljs-keyword"${_scopeId}>if</span> (
    target.<span class="hljs-property"${_scopeId}>focusNode</span>.<span class="hljs-property"${_scopeId}>nodeName</span>.<span class="hljs-title function_"${_scopeId}>includes</span>(<span class="hljs-string"${_scopeId}>&#39;#text&#39;</span>) ||
    target.<span class="hljs-property"${_scopeId}>focusNode</span>.<span class="hljs-property"${_scopeId}>classList</span>.<span class="hljs-title function_"${_scopeId}>contains</span>(<span class="hljs-string"${_scopeId}>&#39;title&#39;</span>) ||
    target.<span class="hljs-property"${_scopeId}>focusNode</span>.<span class="hljs-property"${_scopeId}>className</span>.<span class="hljs-title function_"${_scopeId}>includes</span>(<span class="hljs-string"${_scopeId}>&#39;codeBlock&#39;</span>)
  ) {
    <span class="hljs-keyword"${_scopeId}>return</span>;
  }
  <span class="hljs-keyword"${_scopeId}>const</span> id = <span class="hljs-string"${_scopeId}>\`codeBlock-<span class="hljs-subst"${_scopeId}>\${
    <span class="hljs-variable language_"${_scopeId}>document</span>.getElementsByClassName(<span class="hljs-string"${_scopeId}>&#39;codeBlock&#39;</span>).length + <span class="hljs-number"${_scopeId}>1</span>
  }</span>\`</span>;
  codeBlock.<span class="hljs-property"${_scopeId}>classList</span>.<span class="hljs-title function_"${_scopeId}>add</span>(<span class="hljs-string"${_scopeId}>&#39;codeBlock&#39;</span>);

  <span class="hljs-title function_"${_scopeId}>format</span>(<span class="hljs-string"${_scopeId}>&#39;insertHTML&#39;</span>, <span class="hljs-string"${_scopeId}>\`&lt;pre class=&#39;codeBlock&#39; id=&#39;<span class="hljs-subst"${_scopeId}>\${id}</span>&#39;&gt;<span class="hljs-subst"${_scopeId}>\${target}</span>&lt;/pre&gt;\`</span>);
  <span class="hljs-title function_"${_scopeId}>addLineAfterBlock</span>(id);
}
</code></pre><p${_scopeId}>There is a lot going on here. First, we create a <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>pre</span></code> element and find where we want to place the block using <code class="hljs"${_scopeId}>document.getSelection()<span class="hljs-comment"${_scopeId}>;</span></code> this will find the current selection and assign that value to the variable “target”. We then check that it is a valid location to place a code block. If it is, we create an ID for the code block which is done by counting all of the existing code blocks in the DOM and adding 1. Next we add the class <code class="hljs"${_scopeId}>‘codeBlock’</code> to the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>pre</span></code> element. Finally we use our format function to insert the html. At the end we call <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>addLineAfterBlock</span><span class="hljs-params"${_scopeId}>(id)</span></span></code>. This is a function we are going to create.</p><h3 id="addlineafterblock()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#addlineafterblock()"${_scopeId}>addLineAfterBlock()</a></h3><p${_scopeId}>We have to create <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>addLineAfterBlock</span><span class="hljs-params"${_scopeId}>()</span></span></code> because as <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>addCodeBlock</span><span class="hljs-params"${_scopeId}>()</span></span></code> currently functions there will be no empty space after the code block, which means the user won’t be able to continue typing outside of the code block.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>addLineAfterBlock</span>(<span class="hljs-params"${_scopeId}>id</span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> block = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>\`<span class="hljs-subst"${_scopeId}>\${id}</span>\`</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> div = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>createElement</span>(<span class="hljs-string"${_scopeId}>&#39;div&#39;</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> br = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>createElement</span>(<span class="hljs-string"${_scopeId}>&#39;br&#39;</span>);

  div.<span class="hljs-title function_"${_scopeId}>appendChild</span>(br);

  <span class="hljs-keyword"${_scopeId}>if</span> (!block) {
    <span class="hljs-keyword"${_scopeId}>return</span>;
  } <span class="hljs-keyword"${_scopeId}>else</span> {
    block.<span class="hljs-title function_"${_scopeId}>after</span>(div);
  }
}
</code></pre><p${_scopeId}>Here we find the code block we just created in <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>addCodeBlock</span><span class="hljs-params"${_scopeId}>()</span></span></code> . We’ll create a <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> element and a <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;br&gt;</span></code> element and append it as a child of <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> . Then we’ll check that the block actually exists; if it does, we’ll use the <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>after</span><span class="hljs-params"${_scopeId}>()</span></span></code> method to insert <code class="hljs"${_scopeId}><span class="hljs-keyword"${_scopeId}>div</span></code> after the code block in the DOM. The reason we are using a <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;div&gt;</span></code> with a <code class="hljs"${_scopeId}><span class="hljs-section"${_scopeId}>&lt;br&gt;</span></code> child is because that is currently how browsers add new lines on <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>contentEditable</span></code> elements. It’s possible to change this behavior using <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>execCommand</span></code> but that can cause issues between browsers so it’s best to leave it alone.</p><h3 id="handlesubmit()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#handlesubmit()"${_scopeId}>handleSubmit()</a></h3><p${_scopeId}>Finally, let’s talk about how we might handle submit. For this example, I did not build a database but I will show you how you can actually pull all of the data from the inputs and format it into an object that you could send off to a database.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>handleSubmit</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> content = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>&#39;editor&#39;</span>).<span class="hljs-property"${_scopeId}>innerHTML</span>;
  <span class="hljs-keyword"${_scopeId}>const</span> title = <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>getElementById</span>(<span class="hljs-string"${_scopeId}>&#39;title&#39;</span>).<span class="hljs-property"${_scopeId}>textContent</span>;
  <span class="hljs-keyword"${_scopeId}>const</span> post = {
    title,
    content,
  };

  <span class="hljs-variable language_"${_scopeId}>console</span>.<span class="hljs-title function_"${_scopeId}>log</span>(post);
  <span class="hljs-comment"${_scopeId}>// do an api post request here, save to state, etc...</span>
}
</code></pre><p${_scopeId}>What we do here is find the value of content and title with <code class="hljs"${_scopeId}><span class="hljs-built_in"${_scopeId}>document</span>.getElementById()</code> and assign them to keys in an object called post. We can then do something with that object, send it to a database, save it to state etc. In this case, I just <code class="hljs"${_scopeId}><span class="hljs-built_in"${_scopeId}>console</span>.<span class="hljs-built_in"${_scopeId}>log</span>()</code> it so you can see that it did in fact save all of your input including all HTML code and formatting. The format will stay the same once it is posted somewhere for others to read as long as you keep your CSS and class names consistent throughout your app</p><h2 id="editor.js-functions" tabindex="-1"${_scopeId}><a class="header-anchor" href="#editor.js-functions"${_scopeId}>Editor.js Functions</a></h2><p${_scopeId}>These functions should all be written inside of Editor.js</p><h3 id="paste()" tabindex="-1"${_scopeId}><a class="header-anchor" href="#paste()"${_scopeId}>paste()</a></h3><p${_scopeId}>We have to create our own paste function because the default behavior of paste will retain all the styling and HTML of whatever you are copying, which can have unexpected results. Here’s how we can prevent this:</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>paste</span>(<span class="hljs-params"${_scopeId}>e</span>) {
  e.<span class="hljs-title function_"${_scopeId}>preventDefault</span>();
  <span class="hljs-keyword"${_scopeId}>const</span> open = <span class="hljs-keyword"${_scopeId}>new</span> <span class="hljs-title class_"${_scopeId}>RegExp</span>(<span class="hljs-string"${_scopeId}>&#39;&lt;&#39;</span>, <span class="hljs-string"${_scopeId}>&#39;gi&#39;</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> close = <span class="hljs-keyword"${_scopeId}>new</span> <span class="hljs-title class_"${_scopeId}>RegExp</span>(<span class="hljs-string"${_scopeId}>&#39;&gt;&#39;</span>, <span class="hljs-string"${_scopeId}>&#39;gi&#39;</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> text = (e.<span class="hljs-property"${_scopeId}>originalEvent</span> || e).<span class="hljs-property"${_scopeId}>clipboardData</span>
    .<span class="hljs-title function_"${_scopeId}>getData</span>(<span class="hljs-string"${_scopeId}>&#39;text/plain&#39;</span>)
    .<span class="hljs-title function_"${_scopeId}>replace</span>(open, <span class="hljs-string"${_scopeId}>&#39;&amp;lt&#39;</span>)
    .<span class="hljs-title function_"${_scopeId}>replace</span>(close, <span class="hljs-string"${_scopeId}>&#39;&amp;gt&#39;</span>);
  <span class="hljs-variable language_"${_scopeId}>document</span>.<span class="hljs-title function_"${_scopeId}>execCommand</span>(<span class="hljs-string"${_scopeId}>&#39;insertHTML&#39;</span>, <span class="hljs-literal"${_scopeId}>false</span>, text);
}
</code></pre><p${_scopeId}>First we prevent the default. Then we create two new RegExp that will be used to convert HTML into a format that will be displayed for us to read instead of added into the DOM. We then get the data that was copied in the clipboard and convert it to a string. After that we’ll use <code class="hljs"${_scopeId}>.<span class="hljs-built_in"${_scopeId}>replace</span>()</code> to covert the HTML and finally <code class="hljs"${_scopeId}><span class="hljs-title"${_scopeId}>.execCommand()</span></code> to insert the copied data into the selected area. I want to touch on Bold, Italicize, and List. All three are actually built into <code class="hljs"${_scopeId}><span class="hljs-title"${_scopeId}>.execCommand()</span></code> so all we have to do is set <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}><span class="hljs-built_in"${_scopeId}>format</span></span>()</span></code> as the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>onClick</span></code> function with the corresponding command.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}>&lt;&gt;
  <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> format(&#39;bold&#39;)}&gt;Bold<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span></span>
  <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> format(&#39;italic&#39;)}&gt;Italics<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span></span>
  <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>button</span> <span class="hljs-attr"${_scopeId}>onClick</span>=<span class="hljs-string"${_scopeId}>{(e)</span> =&gt;</span> format(&#39;insertUnorderedList&#39;)}&gt;List<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>button</span>&gt;</span></span>
&lt;/&gt;
</code></pre><p${_scopeId}>This is a good starting point for building a WYSIWYG text editor. There are many more features you could implement on top of this build. I hope this helps someone.</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
                vue$1.createVNode("blockquote", null, [
                  vue$1.createVNode("p", null, [
                    vue$1.createVNode("em", null, "Note: This is tutorial is intended as practice to improve your JavaScript and React skills. I would not recommend using this in a production application. The way we are inserting html into the DOM is not secure and can lead to potential security vulnerabilities. There are some great libraries for building custom text editors that would be more suitable for a production application")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "table-of-contents",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#table-of-contents"
                  }, "Table of Contents")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("div", { class: "table-of-contents" }, [
                    vue$1.createVNode("ul", null, [
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#table-of-contents" }, "Table of Contents")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#tools" }, "Tools")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#getting-started" }, "Getting Started")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#create-toolbar.js" }, "Create Toolbar.js")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#create-editor.js" }, "Create Editor.js"),
                        vue$1.createVNode("ul", null, [
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#toolbar.js-functions" }, "Toolbar.js Functions")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#execcommand()" }, "execCommand()")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#format()" }, "format()")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#addlink()" }, "addLink()")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#seturl()" }, "setUrl()")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#setheader()" }, "setHeader()")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#addcodeblock()" }, "addCodeBlock()")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#addlineafterblock()" }, "addLineAfterBlock()")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#handlesubmit()" }, "handleSubmit()")
                          ])
                        ])
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#editor.js-functions" }, "Editor.js Functions"),
                        vue$1.createVNode("ul", null, [
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#paste()" }, "paste()")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "tools",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#tools"
                  }, "Tools")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("a", {
                    href: "https://github.com/ianstormtaylor/slate",
                    target: "_blank",
                    rel: "noopener"
                  }, "Slate.js"),
                  vue$1.createTextVNode(" - A popular library for building text editors similar to medium.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("a", {
                    href: "https://github.com/remarkjs/react-markdown",
                    target: "_blank",
                    rel: "noopener"
                  }, "React Markdown"),
                  vue$1.createTextVNode(" - A React Component to render Markdown.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("a", {
                    href: "https://github.com/markdown-it/markdown-it",
                    target: "_blank",
                    rel: "noopener"
                  }, "Markdown-it"),
                  vue$1.createTextVNode(" - Framework agnostic markdown parser that a lot of Markdown components are built on top of. Has a robust plugin system and is highly customizable.")
                ]),
                vue$1.createVNode("p", null, "Recently I was building a blog similar to Medium as a personal project and I needed to build a WYSIWYG text editor. I considered using a framework but I figured it would be a better learning experience to actually build it from scratch. It was easier than I expected it to be, but I did find that text editors are very finicky and hard to get right. The text editor we will build here is not perfect, but it works and it is a good starting point to build on top of. Setting Up"),
                vue$1.createVNode("h2", {
                  id: "getting-started",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#getting-started"
                  }, "Getting Started")
                ]),
                vue$1.createVNode("p", null, "To get started make sure you have Node.js installed on your machine and run this in the terminal:"),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-string" }, "npx"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "create-react-app"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "sample-text-editor")
                  ])
                ]),
                vue$1.createVNode("p", null, "Once it finishes installing make sure all the dependencies are installed by running:"),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "npm"),
                    vue$1.createTextVNode(" i")
                  ])
                ]),
                vue$1.createVNode("p", null, "Then go ahead and clear all the boilerplate so we have a fresh start."),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createTextVNode("rm -rf ."),
                    vue$1.createVNode("span", { class: "hljs-regexp" }, "/src/"),
                    vue$1.createTextVNode("logo.svg ."),
                    vue$1.createVNode("span", { class: "hljs-regexp" }, "/src/"),
                    vue$1.createTextVNode("serviceWorker.js")
                  ])
                ]),
                vue$1.createVNode("p", null, "And then you can copy and paste this into your App.js:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "React"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react'"),
                    vue$1.createTextVNode(";\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'./App.css'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "App"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "className"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"app"'),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode(";\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "App"),
                    vue$1.createTextVNode(";\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Finally, open the project in your browser and you should see a blank page. From here we are going to create two components: editor and toolbar."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-bash" }, [
                    vue$1.createTextVNode("    "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "mkdir"),
                    vue$1.createTextVNode(" ./src/editor\n    "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "mkdir"),
                    vue$1.createTextVNode(" ./src/toolbar\n    "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "touch"),
                    vue$1.createTextVNode(" ./src/components/editor/Editor.js\n    "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "touch"),
                    vue$1.createTextVNode(" ./src/components/editor/Editor.css\n    "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "touch"),
                    vue$1.createTextVNode(" ./src/components/toolbar/Toolbar.js\n    "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "touch"),
                    vue$1.createTextVNode(" ./src/components/toolbar/Toolbar.css\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "To start we are going to create the toolbar and import it into the editor; next, we will import the editor into App.js to render it in the browser."),
                vue$1.createVNode("h2", {
                  id: "create-toolbar.js",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#create-toolbar.js"
                  }, "Create Toolbar.js")
                ]),
                vue$1.createVNode("p", null, "Toolbar.js should look like this:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "React"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react'"),
                    vue$1.createTextVNode(";\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'./Toolbar.css'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "Toolbar"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "format"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {}\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "addLink"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {}\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setUrl"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {}\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setHeader"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {}\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "addCodeBlock"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {}\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "handleSubmit"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {}\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(" (\n    "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "className"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"toolbar"'),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" format('bold')}>Bold"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" format('italic')}>Italics"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" format('insertUnorderedList')}>List"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" addLink()}>Link"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "id"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"url-input"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "className"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"hidden"'),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "input"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "id"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"txtFormatUrl"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "placeholder"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"url"'),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" setUrl(e)}>Create Link"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" setHeader()}>Header"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" addCodeBlock()}>CodeBlock"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" handleSubmit()}>Submit"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  );\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Here we have created a "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" element that will act as a container for all of the formatting buttons. Each button will trigger one of the functions we defined above. Later we will add some actual code but for now we’ll just leave them empty.")
                ]),
                vue$1.createVNode("p", null, "Here is Toolbar.css:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-css" }, [
                    vue$1.createTextVNode("toolbar {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "border"),
                    vue$1.createTextVNode(": solid "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "1px"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-number" }, "#ddd"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "background"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "#f4f4f4"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "padding"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "5px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "border-radius"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "3px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "position"),
                    vue$1.createTextVNode(": fixed;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "top"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "50px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "width"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "100%"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "display"),
                    vue$1.createTextVNode(": flex;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "align-items"),
                    vue$1.createTextVNode(": center;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "justify-content"),
                    vue$1.createTextVNode(": space-evenly;\n}\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-class" }, ".hidden"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "display"),
                    vue$1.createTextVNode(": none;\n}\n")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "create-editor.js",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#create-editor.js"
                  }, "Create Editor.js")
                ]),
                vue$1.createVNode("p", null, "Now import Toolbar.js into Editor.js and set it up like so:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "React"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Toolbar"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'../toolbar/Toolbar'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "Editor"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "paste"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "e"),
                    vue$1.createTextVNode(") {}\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(" (\n    "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "React.Fragment"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Toolbar"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "id"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"title"'),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "contentEditable"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"true"'),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "data-placeholder"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"Title..."'),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "className"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"title"'),
                        vue$1.createTextVNode("\n      >")
                      ]),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "className"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"editor"'),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "id"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"editor"'),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "contentEditable"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"true"'),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "data-placeholder"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"Body..."'),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPaste"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" paste(e)}\n      >"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "React.Fragment"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  );\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Inside of "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<React.Fragment>")
                  ]),
                  vue$1.createTextVNode(" we render "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<ToolBar />")
                  ]),
                  vue$1.createTextVNode(" and then create two "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" elements. Each "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" has an attribute called "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "contentEditable")
                  ]),
                  vue$1.createTextVNode(" that we have set to true. This allows the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" elements to act as inputs in which the user can write. The reason we created two is for one to act as the title of the blog and the other to act as the body.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("The other thing we did here is create an attribute called data-placeholder on each "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" That, with a little CSS, will act as a placeholder for our input areas. Here is the CSS to make it happen:")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-css" }, [
                    vue$1.createVNode("span", { class: "hljs-selector-id" }, "#title"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":empty"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":before"),
                    vue$1.createTextVNode(",\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-class" }, ".editor"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":empty"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":before"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "content"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "attr"),
                    vue$1.createTextVNode("(data-placeholder);\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "color"),
                    vue$1.createTextVNode(": gray;\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "The result should be gray text specifying title and body. Here is the whole Editor.css file:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-css" }, [
                    vue$1.createVNode("span", { class: "hljs-selector-class" }, ".editor"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "width"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "95%"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "max-width"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "700px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "min-height"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "100px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-left"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-right"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-top"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "20px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "font-size"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "20px"),
                    vue$1.createTextVNode(";\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-class" }, ".editor"),
                    vue$1.createTextVNode(" > "),
                    vue$1.createVNode("span", { class: "hljs-selector-tag" }, "li"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "list-style"),
                    vue$1.createTextVNode(": square;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin"),
                    vue$1.createTextVNode(": initial;\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-id" }, "#title"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "width"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "95%"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "max-width"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "700px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-left"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-right"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-top"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "135px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "font-size"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "40px"),
                    vue$1.createTextVNode(";\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-class" }, ".editor"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":focus"),
                    vue$1.createTextVNode(",\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-id" }, "#title"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":focus"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "outline"),
                    vue$1.createTextVNode(": none;\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-id" }, "#title"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":empty"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":before"),
                    vue$1.createTextVNode(",\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-class" }, ".editor"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":empty"),
                    vue$1.createVNode("span", { class: "hljs-selector-pseudo" }, ":before"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "content"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "attr"),
                    vue$1.createTextVNode("(data-placeholder);\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "color"),
                    vue$1.createTextVNode(": gray;\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-selector-class" }, ".codeBlock"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "background-color"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "rgb"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-number" }, "21"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "34"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "75"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-left"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-right"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-top"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "margin-bottom"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "height"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "min-height"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "39px"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "font-family"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'Courier New'"),
                    vue$1.createTextVNode(", Courier, monospace;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "overflow"),
                    vue$1.createTextVNode(": auto;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "color"),
                    vue$1.createTextVNode(": white;\n  "),
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "padding"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "8px"),
                    vue$1.createTextVNode(";\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Be sure you have imported Editor.js into App.js:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "React"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react'"),
                    vue$1.createTextVNode(";\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Editor"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'./editor/Editor'"),
                    vue$1.createTextVNode(";\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'./App.css'"),
                    vue$1.createTextVNode(";\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "App"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(" (\n    "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "className"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"app"'),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Editor"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "div"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  );\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "App"),
                    vue$1.createTextVNode(";\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Now that we have the editor and toolbar rendered in the browser with some basic styling, we can start adding some functionality."),
                vue$1.createVNode("h3", {
                  id: "toolbar.js-functions",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#toolbar.js-functions"
                  }, "Toolbar.js Functions")
                ]),
                vue$1.createVNode("p", null, "These functions should all be written inside Toolbar.js"),
                vue$1.createVNode("h3", {
                  id: "execcommand()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#execcommand()"
                  }, "execCommand()")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("First, let’s talk about "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "execCommand"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(" . This becomes available when you set an HTML element’s "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "contenteditable")
                  ]),
                  vue$1.createTextVNode(" attribute to true. It basically allows you to run commands that manipulate the editable area. Be aware that MDN shows an obsolete warning for this method so it’s possible that it might not work the way you expect between browsers, so be sure to try your text editor in different browsers. It might be better to figure out your own way to implement certain features instead of relying on "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "execCommand"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode("; for the purpose of this post we will stick with "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "execCommand"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(".")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-comment" }, "// Basic syntax"),
                    vue$1.createTextVNode("\nelement."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "execCommand"),
                    vue$1.createTextVNode("(command, boolean, value);\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "The boolean value determines whether or not a default interface is shown. It should always be set to false because some browsers do not support it."),
                vue$1.createVNode("h3", {
                  id: "format()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#format()"
                  }, "format()")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("The first function we will implement is "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, [
                        vue$1.createVNode("span", { class: "hljs-built_in" }, "format")
                      ]),
                      vue$1.createTextVNode("()")
                    ])
                  ]),
                  vue$1.createTextVNode(". This will be a generic function that formats "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-title" }, ".execCommand()")
                  ]),
                  vue$1.createTextVNode(" so we don’t have to worry about writing out the whole thing every time we use it. Write this inside Toolbar.js:")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "format"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "com, val"),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "execCommand"),
                    vue$1.createTextVNode("(com, "),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(", val);\n}\n")
                  ])
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "addLineAfterBlock"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "id"),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" block = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, [
                      vue$1.createTextVNode("`"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, "${id}"),
                      vue$1.createTextVNode("`")
                    ]),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" div = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "createElement"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'div'"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" br = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "createElement"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'br'"),
                    vue$1.createTextVNode(");\n  div."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "appendChild"),
                    vue$1.createTextVNode("(br);\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (!block) {\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(";\n  } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "else"),
                    vue$1.createTextVNode(" {\n    block."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "after"),
                    vue$1.createTextVNode("(div);\n  }\n}\n")
                  ])
                ]),
                vue$1.createVNode("h3", {
                  id: "addlink()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#addlink()"
                  }, "addLink()")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Now let’s set up "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "addLink"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(". This function is going to show or hide the input that allows us to add a URL link to a word or line.")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "addLink"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" show = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'url-input'"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (show."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "classList"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "contains"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'hidden'"),
                    vue$1.createTextVNode(")) {\n    show."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "classList"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "remove"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'hidden'"),
                    vue$1.createTextVNode(");\n  } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "else"),
                    vue$1.createTextVNode(" {\n    show."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "classList"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "add"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'hidden'"),
                    vue$1.createTextVNode(");\n  }\n}\n")
                  ])
                ]),
                vue$1.createVNode("h3", {
                  id: "seturl()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#seturl()"
                  }, "setUrl()")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Next let’s set up "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "setUrl"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(".")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setUrl"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "e"),
                    vue$1.createTextVNode(") {\n  e."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "preventDefault"),
                    vue$1.createTextVNode("();\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" url = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'txtFormatUrl'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "value"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" show = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'url-input'"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" text = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getSelection"),
                    vue$1.createTextVNode("();\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "format"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'insertHTML'"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-string" }, [
                      vue$1.createTextVNode("`<a href='"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, "${url}"),
                      vue$1.createTextVNode("' target='_blank'>"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, "${text}"),
                      vue$1.createTextVNode(" </a>`")
                    ]),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'txtFormatUrl'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "value"),
                    vue$1.createTextVNode(" = "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "''"),
                    vue$1.createTextVNode(";\n  show."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "classList"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "add"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'hidden'"),
                    vue$1.createTextVNode(");\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Here we are getting the value from the URL input in our toolbar and then, using our format function, we insert a link directly into the DOM of our app."),
                vue$1.createVNode("h3", {
                  id: "setheader()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#setheader()"
                  }, "setHeader()")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Next up is "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "setHeader"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(".")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setHeader"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" target = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getSelection"),
                    vue$1.createTextVNode("();\n  "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "format"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'insertHTML'"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-string" }, [
                      vue$1.createTextVNode("`<h2>"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, "${target}"),
                      vue$1.createTextVNode("</h2>`")
                    ]),
                    vue$1.createTextVNode(");\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Here we are targeting the current selection and wrapping it in "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<h2>")
                  ]),
                  vue$1.createTextVNode(" tags and inserting it into the DOM.")
                ]),
                vue$1.createVNode("h3", {
                  id: "addcodeblock()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#addcodeblock()"
                  }, "addCodeBlock()")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Next, we have "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "addCodeBlock"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(".")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "addCodeBlock"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" codeBlock = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "createElement"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'pre'"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" target = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getSelection"),
                    vue$1.createTextVNode("();\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (\n    target."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "focusNode"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "nodeName"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "includes"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'#text'"),
                    vue$1.createTextVNode(") ||\n    target."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "focusNode"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "classList"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "contains"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'title'"),
                    vue$1.createTextVNode(") ||\n    target."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "focusNode"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "className"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "includes"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'codeBlock'"),
                    vue$1.createTextVNode(")\n  ) {\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(";\n  }\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" id = "),
                    vue$1.createVNode("span", { class: "hljs-string" }, [
                      vue$1.createTextVNode("`codeBlock-"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, [
                        vue$1.createTextVNode("${\n    "),
                        vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                        vue$1.createTextVNode(".getElementsByClassName("),
                        vue$1.createVNode("span", { class: "hljs-string" }, "'codeBlock'"),
                        vue$1.createTextVNode(").length + "),
                        vue$1.createVNode("span", { class: "hljs-number" }, "1"),
                        vue$1.createTextVNode("\n  }")
                      ]),
                      vue$1.createTextVNode("`")
                    ]),
                    vue$1.createTextVNode(";\n  codeBlock."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "classList"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "add"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'codeBlock'"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "format"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'insertHTML'"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-string" }, [
                      vue$1.createTextVNode("`<pre class='codeBlock' id='"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, "${id}"),
                      vue$1.createTextVNode("'>"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, "${target}"),
                      vue$1.createTextVNode("</pre>`")
                    ]),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "addLineAfterBlock"),
                    vue$1.createTextVNode("(id);\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("There is a lot going on here. First, we create a "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "pre")
                  ]),
                  vue$1.createTextVNode(" element and find where we want to place the block using "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createTextVNode("document.getSelection()"),
                    vue$1.createVNode("span", { class: "hljs-comment" }, ";")
                  ]),
                  vue$1.createTextVNode(" this will find the current selection and assign that value to the variable “target”. We then check that it is a valid location to place a code block. If it is, we create an ID for the code block which is done by counting all of the existing code blocks in the DOM and adding 1. Next we add the class "),
                  vue$1.createVNode("code", { class: "hljs" }, "‘codeBlock’"),
                  vue$1.createTextVNode(" to the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "pre")
                  ]),
                  vue$1.createTextVNode(" element. Finally we use our format function to insert the html. At the end we call "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "addLineAfterBlock"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "(id)")
                    ])
                  ]),
                  vue$1.createTextVNode(". This is a function we are going to create.")
                ]),
                vue$1.createVNode("h3", {
                  id: "addlineafterblock()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#addlineafterblock()"
                  }, "addLineAfterBlock()")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("We have to create "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "addLineAfterBlock"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(" because as "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "addCodeBlock"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(" currently functions there will be no empty space after the code block, which means the user won’t be able to continue typing outside of the code block.")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "addLineAfterBlock"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "id"),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" block = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, [
                      vue$1.createTextVNode("`"),
                      vue$1.createVNode("span", { class: "hljs-subst" }, "${id}"),
                      vue$1.createTextVNode("`")
                    ]),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" div = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "createElement"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'div'"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" br = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "createElement"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'br'"),
                    vue$1.createTextVNode(");\n\n  div."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "appendChild"),
                    vue$1.createTextVNode("(br);\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (!block) {\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(";\n  } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "else"),
                    vue$1.createTextVNode(" {\n    block."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "after"),
                    vue$1.createTextVNode("(div);\n  }\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Here we find the code block we just created in "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "addCodeBlock"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(" . We’ll create a "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" element and a "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<br>")
                  ]),
                  vue$1.createTextVNode(" element and append it as a child of "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" . Then we’ll check that the block actually exists; if it does, we’ll use the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "after"),
                      vue$1.createVNode("span", { class: "hljs-params" }, "()")
                    ])
                  ]),
                  vue$1.createTextVNode(" method to insert "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "div")
                  ]),
                  vue$1.createTextVNode(" after the code block in the DOM. The reason we are using a "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<div>")
                  ]),
                  vue$1.createTextVNode(" with a "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-section" }, "<br>")
                  ]),
                  vue$1.createTextVNode(" child is because that is currently how browsers add new lines on "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "contentEditable")
                  ]),
                  vue$1.createTextVNode(" elements. It’s possible to change this behavior using "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "execCommand")
                  ]),
                  vue$1.createTextVNode(" but that can cause issues between browsers so it’s best to leave it alone.")
                ]),
                vue$1.createVNode("h3", {
                  id: "handlesubmit()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#handlesubmit()"
                  }, "handleSubmit()")
                ]),
                vue$1.createVNode("p", null, "Finally, let’s talk about how we might handle submit. For this example, I did not build a database but I will show you how you can actually pull all of the data from the inputs and format it into an object that you could send off to a database."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "handleSubmit"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" content = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'editor'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "innerHTML"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" title = "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getElementById"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'title'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "textContent"),
                    vue$1.createTextVNode(";\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" post = {\n    title,\n    content,\n  };\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "console"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "log"),
                    vue$1.createTextVNode("(post);\n  "),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "// do an api post request here, save to state, etc..."),
                    vue$1.createTextVNode("\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("What we do here is find the value of content and title with "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "document"),
                    vue$1.createTextVNode(".getElementById()")
                  ]),
                  vue$1.createTextVNode(" and assign them to keys in an object called post. We can then do something with that object, send it to a database, save it to state etc. In this case, I just "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "console"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "log"),
                    vue$1.createTextVNode("()")
                  ]),
                  vue$1.createTextVNode(" it so you can see that it did in fact save all of your input including all HTML code and formatting. The format will stay the same once it is posted somewhere for others to read as long as you keep your CSS and class names consistent throughout your app")
                ]),
                vue$1.createVNode("h2", {
                  id: "editor.js-functions",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#editor.js-functions"
                  }, "Editor.js Functions")
                ]),
                vue$1.createVNode("p", null, "These functions should all be written inside of Editor.js"),
                vue$1.createVNode("h3", {
                  id: "paste()",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#paste()"
                  }, "paste()")
                ]),
                vue$1.createVNode("p", null, "We have to create our own paste function because the default behavior of paste will retain all the styling and HTML of whatever you are copying, which can have unexpected results. Here’s how we can prevent this:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "paste"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "e"),
                    vue$1.createTextVNode(") {\n  e."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "preventDefault"),
                    vue$1.createTextVNode("();\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" open = "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "new"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "RegExp"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'<'"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'gi'"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" close = "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "new"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "RegExp"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'>'"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'gi'"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" text = (e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "originalEvent"),
                    vue$1.createTextVNode(" || e)."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "clipboardData"),
                    vue$1.createTextVNode("\n    ."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getData"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'text/plain'"),
                    vue$1.createTextVNode(")\n    ."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "replace"),
                    vue$1.createTextVNode("(open, "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'&lt'"),
                    vue$1.createTextVNode(")\n    ."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "replace"),
                    vue$1.createTextVNode("(close, "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'&gt'"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "document"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "execCommand"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'insertHTML'"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(", text);\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("First we prevent the default. Then we create two new RegExp that will be used to convert HTML into a format that will be displayed for us to read instead of added into the DOM. We then get the data that was copied in the clipboard and convert it to a string. After that we’ll use "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-built_in" }, "replace"),
                    vue$1.createTextVNode("()")
                  ]),
                  vue$1.createTextVNode(" to covert the HTML and finally "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-title" }, ".execCommand()")
                  ]),
                  vue$1.createTextVNode(" to insert the copied data into the selected area. I want to touch on Bold, Italicize, and List. All three are actually built into "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-title" }, ".execCommand()")
                  ]),
                  vue$1.createTextVNode(" so all we have to do is set "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, [
                        vue$1.createVNode("span", { class: "hljs-built_in" }, "format")
                      ]),
                      vue$1.createTextVNode("()")
                    ])
                  ]),
                  vue$1.createTextVNode(" as the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "onClick")
                  ]),
                  vue$1.createTextVNode(" function with the corresponding command.")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createTextVNode("<>\n  "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" format('bold')}>Bold"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" format('italic')}>Italics"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onClick"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{(e)"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" format('insertUnorderedList')}>List"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "button"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n</>\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "This is a good starting point for building a WYSIWYG text editor. There are many more features you could implement on top of this build. I hope this helps someone.")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue$1.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/how-to-create-your-own-medium-style-rich-text-editor-in-react.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.datePublished = datePublished;
exports.dateUpdated = dateUpdated;
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
