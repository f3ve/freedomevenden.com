"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("../main.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
require("dayjs");
require("vue-router");
require("@vueuse/core");
require("@f3ve/vue-notify");
require("vite-ssg");
require("pinia");
const title = "Vue Markdown-it v0.2.0";
const datePublished = "2023-10-04T13:30:00.000Z";
const description = "Announcing the release of @f3ve/vue-markdown-it v0.2.0";
const meta = [{ "name": "type", "content": "article" }, { "name": "keywords", "content": "markdown-it,markdown,vue,vue-markdown-it,@f3ve/vue-markdown-it" }, { "property": "og:title", "content": "Vue Markdown-it v0.2.0" }, { "name": "twitter:title", "content": "Vue Markdown-it v0.2.0" }, { "name": "description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }, { "property": "og:description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }, { "name": "twitter:description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }];
const _sfc_main = {
  __name: "vue-markdown-it-v0-2-0",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Vue Markdown-it v0.2.0", "datePublished": "2023-10-04T13:30:00.000Z", "description": "Announcing the release of @f3ve/vue-markdown-it v0.2.0", "meta": [{ "name": "type", "content": "article" }, { "name": "keywords", "content": "markdown-it,markdown,vue,vue-markdown-it,@f3ve/vue-markdown-it" }, { "property": "og:title", "content": "Vue Markdown-it v0.2.0" }, { "name": "twitter:title", "content": "Vue Markdown-it v0.2.0" }, { "name": "description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }, { "property": "og:description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }, { "name": "twitter:description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }] };
    __expose({ frontmatter });
    const head = { "title": "Vue Markdown-it v0.2.0", "meta": [{ "name": "type", "content": "article" }, { "name": "keywords", "content": "markdown-it,markdown,vue,vue-markdown-it,@f3ve/vue-markdown-it" }, { "property": "og:title", "content": "Vue Markdown-it v0.2.0" }, { "name": "twitter:title", "content": "Vue Markdown-it v0.2.0" }, { "name": "description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }, { "property": "og:description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }, { "name": "twitter:description", "content": "Announcing the release of @f3ve/vue-markdown-it v0.2.0" }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h2 id="table-of-contents" tabindex="-1"${_scopeId}><a class="header-anchor" href="#table-of-contents"${_scopeId}>Table of Contents</a></h2><p${_scopeId}><div class="table-of-contents"${_scopeId}><ul${_scopeId}><li${_scopeId}><a href="#table-of-contents"${_scopeId}>Table of Contents</a></li><li${_scopeId}><a href="#overview"${_scopeId}>Overview</a></li><li${_scopeId}><a href="#new-features"${_scopeId}>New features</a><ul${_scopeId}><li${_scopeId}><a href="#support-for-markdown-it-options"${_scopeId}>Support for Markdown-it options</a></li><li${_scopeId}><a href="#support-for-markdown-it-presets"${_scopeId}>Support for Markdown-it presets</a></li></ul></li><li${_scopeId}><a href="#developer-facing-improvements"${_scopeId}>Developer Facing improvements</a></li><li${_scopeId}><a href="#conclusion"${_scopeId}>Conclusion</a></li></ul></div></p><h2 id="overview" tabindex="-1"${_scopeId}><a class="header-anchor" href="#overview"${_scopeId}>Overview</a></h2><p${_scopeId}>I’m excited to announce the release of <a href="https://github.com/f3ve/vue-markdown-it" target="_blank" rel="noopener"${_scopeId}>Vue Markdown-it v0.2.0</a>. This release comes with some new features and some developer facing improvements. If you want to use this package you can install it from npm:</p><pre${_scopeId}><code class="hljs language-bash"${_scopeId}>npm i @f3ve/vue-markdown-it
</code></pre><h2 id="new-features" tabindex="-1"${_scopeId}><a class="header-anchor" href="#new-features"${_scopeId}>New features</a></h2><p${_scopeId}>List of new features and how to use them.</p><h3 id="support-for-markdown-it-options" tabindex="-1"${_scopeId}><a class="header-anchor" href="#support-for-markdown-it-options"${_scopeId}>Support for Markdown-it options</a></h3><p${_scopeId}>You can now configure <a href="https://markdown-it.github.io/markdown-it/#MarkdownIt.new" target="_blank" rel="noopener"${_scopeId}>markdown-it options</a>. Here’s how:</p><pre${_scopeId}><code class="hljs language-html"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>script</span> <span class="hljs-attr"${_scopeId}>setup</span>&gt;</span><span class="language-javascript"${_scopeId}>
  <span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>VueMarkdownIt</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;@f3ve/vue-markdown-it&#39;</span>;

  <span class="hljs-keyword"${_scopeId}>const</span> post = <span class="hljs-title function_"${_scopeId}>ref</span>();
  <span class="hljs-keyword"${_scopeId}>const</span> options = {
    <span class="hljs-attr"${_scopeId}>html</span>: <span class="hljs-literal"${_scopeId}>true</span>,
    <span class="hljs-attr"${_scopeId}>linkify</span>: <span class="hljs-literal"${_scopeId}>true</span>,
  };

  <span class="hljs-title function_"${_scopeId}>onMounted</span>(<span class="hljs-keyword"${_scopeId}>async</span> () =&gt; {
    <span class="hljs-keyword"${_scopeId}>const</span> res = <span class="hljs-keyword"${_scopeId}>await</span> api.<span class="hljs-title function_"${_scopeId}>get</span>(<span class="hljs-string"${_scopeId}>&#39;/post&#39;</span>);
    post.<span class="hljs-property"${_scopeId}>value</span> = res.<span class="hljs-property"${_scopeId}>data</span>;
  });
</span><span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>script</span>&gt;</span>

<span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>template</span>&gt;</span>
  <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>vue-markdown-it</span> <span class="hljs-attr"${_scopeId}>:source</span>=<span class="hljs-string"${_scopeId}>&quot;post&quot;</span> <span class="hljs-attr"${_scopeId}>:options</span>=<span class="hljs-string"${_scopeId}>&quot;options&quot;</span> /&gt;</span>
<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>template</span>&gt;</span>
</code></pre><h3 id="support-for-markdown-it-presets" tabindex="-1"${_scopeId}><a class="header-anchor" href="#support-for-markdown-it-presets"${_scopeId}>Support for Markdown-it presets</a></h3><p${_scopeId}>You can also specify a <a href="https://markdown-it.github.io/markdown-it/#MarkdownIt.new" target="_blank" rel="noopener"${_scopeId}>markdown-it preset</a>. Here’s how:</p><pre${_scopeId}><code class="hljs language-html"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>script</span> <span class="hljs-attr"${_scopeId}>setup</span>&gt;</span><span class="language-javascript"${_scopeId}>
  <span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>VueMarkdownIt</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;@f3ve/vue-markdown-it&#39;</span>;

  <span class="hljs-keyword"${_scopeId}>const</span> post = <span class="hljs-title function_"${_scopeId}>ref</span>();

  <span class="hljs-title function_"${_scopeId}>onMounted</span>(<span class="hljs-keyword"${_scopeId}>async</span> () =&gt; {
    <span class="hljs-keyword"${_scopeId}>const</span> res = <span class="hljs-keyword"${_scopeId}>await</span> api.<span class="hljs-title function_"${_scopeId}>get</span>(<span class="hljs-string"${_scopeId}>&#39;/post&#39;</span>);
    post.<span class="hljs-property"${_scopeId}>value</span> = res.<span class="hljs-property"${_scopeId}>data</span>;
  });
</span><span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>script</span>&gt;</span>

<span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>template</span>&gt;</span>
  <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>vue-markdown-it</span> <span class="hljs-attr"${_scopeId}>:source</span>=<span class="hljs-string"${_scopeId}>&quot;post&quot;</span> <span class="hljs-attr"${_scopeId}>preset</span>=<span class="hljs-string"${_scopeId}>&quot;commonmark&quot;</span> /&gt;</span>
<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>template</span>&gt;</span>
</code></pre><h2 id="developer-facing-improvements" tabindex="-1"${_scopeId}><a class="header-anchor" href="#developer-facing-improvements"${_scopeId}>Developer Facing improvements</a></h2><ol${_scopeId}><li${_scopeId}>Added <a href="https://github.com/f3ve/eslint-config" target="_blank" rel="noopener"${_scopeId}>@f3ve/eslint-config</a> for improved linting.</li><li${_scopeId}>Added a <a href="https://github.com/f3ve/vue-markdown-it/blob/main/.github/workflows/bump-version.yml" target="_blank" rel="noopener"${_scopeId}>bump-version workflow</a> to easily trigger new releases.</li><li${_scopeId}>Added a <a href="https://github.com/f3ve/vue-markdown-it/blob/main/.github/workflows/release.yml" target="_blank" rel="noopener"${_scopeId}>release workflow</a> that handles publishing to NPM and generating GitHub releases.</li></ol><h2 id="conclusion" tabindex="-1"${_scopeId}><a class="header-anchor" href="#conclusion"${_scopeId}>Conclusion</a></h2><p${_scopeId}>Thanks for reading! If you’re interested in using this package feel free to install it from <a href="https://www.npmjs.com/package/@f3ve/vue-markdown-it" target="_blank" rel="noopener"${_scopeId}>npm</a>. If you’d like to propose some new features or report a bug feel free to <a href="https://github.com/f3ve/vue-markdown-it/issues" target="_blank" rel="noopener"${_scopeId}>open an issue on GitHub</a>.</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
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
                        vue$1.createVNode("a", { href: "#overview" }, "Overview")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#new-features" }, "New features"),
                        vue$1.createVNode("ul", null, [
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#support-for-markdown-it-options" }, "Support for Markdown-it options")
                          ]),
                          vue$1.createVNode("li", null, [
                            vue$1.createVNode("a", { href: "#support-for-markdown-it-presets" }, "Support for Markdown-it presets")
                          ])
                        ])
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#developer-facing-improvements" }, "Developer Facing improvements")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#conclusion" }, "Conclusion")
                      ])
                    ])
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "overview",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#overview"
                  }, "Overview")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("I’m excited to announce the release of "),
                  vue$1.createVNode("a", {
                    href: "https://github.com/f3ve/vue-markdown-it",
                    target: "_blank",
                    rel: "noopener"
                  }, "Vue Markdown-it v0.2.0"),
                  vue$1.createTextVNode(". This release comes with some new features and some developer facing improvements. If you want to use this package you can install it from npm:")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-bash" }, "npm i @f3ve/vue-markdown-it\n")
                ]),
                vue$1.createVNode("h2", {
                  id: "new-features",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#new-features"
                  }, "New features")
                ]),
                vue$1.createVNode("p", null, "List of new features and how to use them."),
                vue$1.createVNode("h3", {
                  id: "support-for-markdown-it-options",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#support-for-markdown-it-options"
                  }, "Support for Markdown-it options")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("You can now configure "),
                  vue$1.createVNode("a", {
                    href: "https://markdown-it.github.io/markdown-it/#MarkdownIt.new",
                    target: "_blank",
                    rel: "noopener"
                  }, "markdown-it options"),
                  vue$1.createTextVNode(". Here’s how:")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-html" }, [
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("<"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "script"),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-attr" }, "setup"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createVNode("span", { class: "language-javascript" }, [
                      vue$1.createTextVNode("\n  "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                      vue$1.createTextVNode(" { "),
                      vue$1.createVNode("span", { class: "hljs-title class_" }, "VueMarkdownIt"),
                      vue$1.createTextVNode(" } "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-string" }, "'@f3ve/vue-markdown-it'"),
                      vue$1.createTextVNode(";\n\n  "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                      vue$1.createTextVNode(" post = "),
                      vue$1.createVNode("span", { class: "hljs-title function_" }, "ref"),
                      vue$1.createTextVNode("();\n  "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                      vue$1.createTextVNode(" options = {\n    "),
                      vue$1.createVNode("span", { class: "hljs-attr" }, "html"),
                      vue$1.createTextVNode(": "),
                      vue$1.createVNode("span", { class: "hljs-literal" }, "true"),
                      vue$1.createTextVNode(",\n    "),
                      vue$1.createVNode("span", { class: "hljs-attr" }, "linkify"),
                      vue$1.createTextVNode(": "),
                      vue$1.createVNode("span", { class: "hljs-literal" }, "true"),
                      vue$1.createTextVNode(",\n  };\n\n  "),
                      vue$1.createVNode("span", { class: "hljs-title function_" }, "onMounted"),
                      vue$1.createTextVNode("("),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "async"),
                      vue$1.createTextVNode(" () => {\n    "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                      vue$1.createTextVNode(" res = "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "await"),
                      vue$1.createTextVNode(" api."),
                      vue$1.createVNode("span", { class: "hljs-title function_" }, "get"),
                      vue$1.createTextVNode("("),
                      vue$1.createVNode("span", { class: "hljs-string" }, "'/post'"),
                      vue$1.createTextVNode(");\n    post."),
                      vue$1.createVNode("span", { class: "hljs-property" }, "value"),
                      vue$1.createTextVNode(" = res."),
                      vue$1.createVNode("span", { class: "hljs-property" }, "data"),
                      vue$1.createTextVNode(";\n  });\n")
                    ]),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("</"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "script"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createTextVNode("\n\n"),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("<"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "template"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createTextVNode("\n  "),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("<"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "vue-markdown-it"),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-attr" }, ":source"),
                      vue$1.createTextVNode("="),
                      vue$1.createVNode("span", { class: "hljs-string" }, '"post"'),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-attr" }, ":options"),
                      vue$1.createTextVNode("="),
                      vue$1.createVNode("span", { class: "hljs-string" }, '"options"'),
                      vue$1.createTextVNode(" />")
                    ]),
                    vue$1.createTextVNode("\n"),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("</"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "template"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createTextVNode("\n")
                  ])
                ]),
                vue$1.createVNode("h3", {
                  id: "support-for-markdown-it-presets",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#support-for-markdown-it-presets"
                  }, "Support for Markdown-it presets")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("You can also specify a "),
                  vue$1.createVNode("a", {
                    href: "https://markdown-it.github.io/markdown-it/#MarkdownIt.new",
                    target: "_blank",
                    rel: "noopener"
                  }, "markdown-it preset"),
                  vue$1.createTextVNode(". Here’s how:")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-html" }, [
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("<"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "script"),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-attr" }, "setup"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createVNode("span", { class: "language-javascript" }, [
                      vue$1.createTextVNode("\n  "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                      vue$1.createTextVNode(" { "),
                      vue$1.createVNode("span", { class: "hljs-title class_" }, "VueMarkdownIt"),
                      vue$1.createTextVNode(" } "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-string" }, "'@f3ve/vue-markdown-it'"),
                      vue$1.createTextVNode(";\n\n  "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                      vue$1.createTextVNode(" post = "),
                      vue$1.createVNode("span", { class: "hljs-title function_" }, "ref"),
                      vue$1.createTextVNode("();\n\n  "),
                      vue$1.createVNode("span", { class: "hljs-title function_" }, "onMounted"),
                      vue$1.createTextVNode("("),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "async"),
                      vue$1.createTextVNode(" () => {\n    "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                      vue$1.createTextVNode(" res = "),
                      vue$1.createVNode("span", { class: "hljs-keyword" }, "await"),
                      vue$1.createTextVNode(" api."),
                      vue$1.createVNode("span", { class: "hljs-title function_" }, "get"),
                      vue$1.createTextVNode("("),
                      vue$1.createVNode("span", { class: "hljs-string" }, "'/post'"),
                      vue$1.createTextVNode(");\n    post."),
                      vue$1.createVNode("span", { class: "hljs-property" }, "value"),
                      vue$1.createTextVNode(" = res."),
                      vue$1.createVNode("span", { class: "hljs-property" }, "data"),
                      vue$1.createTextVNode(";\n  });\n")
                    ]),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("</"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "script"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createTextVNode("\n\n"),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("<"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "template"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createTextVNode("\n  "),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("<"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "vue-markdown-it"),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-attr" }, ":source"),
                      vue$1.createTextVNode("="),
                      vue$1.createVNode("span", { class: "hljs-string" }, '"post"'),
                      vue$1.createTextVNode(),
                      vue$1.createVNode("span", { class: "hljs-attr" }, "preset"),
                      vue$1.createTextVNode("="),
                      vue$1.createVNode("span", { class: "hljs-string" }, '"commonmark"'),
                      vue$1.createTextVNode(" />")
                    ]),
                    vue$1.createTextVNode("\n"),
                    vue$1.createVNode("span", { class: "hljs-tag" }, [
                      vue$1.createTextVNode("</"),
                      vue$1.createVNode("span", { class: "hljs-name" }, "template"),
                      vue$1.createTextVNode(">")
                    ]),
                    vue$1.createTextVNode("\n")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "developer-facing-improvements",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#developer-facing-improvements"
                  }, "Developer Facing improvements")
                ]),
                vue$1.createVNode("ol", null, [
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Added "),
                    vue$1.createVNode("a", {
                      href: "https://github.com/f3ve/eslint-config",
                      target: "_blank",
                      rel: "noopener"
                    }, "@f3ve/eslint-config"),
                    vue$1.createTextVNode(" for improved linting.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Added a "),
                    vue$1.createVNode("a", {
                      href: "https://github.com/f3ve/vue-markdown-it/blob/main/.github/workflows/bump-version.yml",
                      target: "_blank",
                      rel: "noopener"
                    }, "bump-version workflow"),
                    vue$1.createTextVNode(" to easily trigger new releases.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Added a "),
                    vue$1.createVNode("a", {
                      href: "https://github.com/f3ve/vue-markdown-it/blob/main/.github/workflows/release.yml",
                      target: "_blank",
                      rel: "noopener"
                    }, "release workflow"),
                    vue$1.createTextVNode(" that handles publishing to NPM and generating GitHub releases.")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "conclusion",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#conclusion"
                  }, "Conclusion")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Thanks for reading! If you’re interested in using this package feel free to install it from "),
                  vue$1.createVNode("a", {
                    href: "https://www.npmjs.com/package/@f3ve/vue-markdown-it",
                    target: "_blank",
                    rel: "noopener"
                  }, "npm"),
                  vue$1.createTextVNode(". If you’d like to propose some new features or report a bug feel free to "),
                  vue$1.createVNode("a", {
                    href: "https://github.com/f3ve/vue-markdown-it/issues",
                    target: "_blank",
                    rel: "noopener"
                  }, "open an issue on GitHub"),
                  vue$1.createTextVNode(".")
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/vue-markdown-it-v0-2-0.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.datePublished = datePublished;
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
