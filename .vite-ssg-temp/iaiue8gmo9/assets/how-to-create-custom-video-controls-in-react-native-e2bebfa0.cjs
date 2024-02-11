"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const CoreMdWrapper = require("./CoreMdWrapper-d6481cae.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
const title = "How to Create Custom Video Controls in React Native";
const description = "In this post I walk you through how to create custom controls for videos in React Native.";
const datePublished = "2020-12-18T00:00:00.000Z";
const dateUpdated = "2023-09-17T00:00:00.000Z";
const meta = [{ "name": "keywords", "content": "how to create custom video controls,react native,react,video controls" }, { "name": "type", "content": "article" }, { "property": "og:title", "content": "How to Create Custom Video Controls in React Native" }, { "name": "twitter:title", "content": "How to Create Custom Video Controls in React Native" }, { "name": "description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }, { "property": "og:description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }, { "name": "twitter:description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }];
const _sfc_main = {
  __name: "how-to-create-custom-video-controls-in-react-native",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "How to Create Custom Video Controls in React Native", "description": "In this post I walk you through how to create custom controls for videos in React Native.", "datePublished": "2020-12-18T00:00:00.000Z", "dateUpdated": "2023-09-17T00:00:00.000Z", "meta": [{ "name": "keywords", "content": "how to create custom video controls,react native,react,video controls" }, { "name": "type", "content": "article" }, { "property": "og:title", "content": "How to Create Custom Video Controls in React Native" }, { "name": "twitter:title", "content": "How to Create Custom Video Controls in React Native" }, { "name": "description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }, { "property": "og:description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }, { "name": "twitter:description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }] };
    __expose({ frontmatter });
    const head = { "title": "How to Create Custom Video Controls in React Native", "meta": [{ "name": "keywords", "content": "how to create custom video controls,react native,react,video controls" }, { "name": "type", "content": "article" }, { "property": "og:title", "content": "How to Create Custom Video Controls in React Native" }, { "name": "twitter:title", "content": "How to Create Custom Video Controls in React Native" }, { "name": "description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }, { "property": "og:description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }, { "name": "twitter:description", "content": "In this post I walk you through how to create custom controls for videos in React Native." }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = CoreMdWrapper._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h2 id="table-of-contents" tabindex="-1"${_scopeId}><a class="header-anchor" href="#table-of-contents"${_scopeId}>Table of contents</a></h2><p${_scopeId}><div class="table-of-contents"${_scopeId}><ul${_scopeId}><li${_scopeId}><a href="#table-of-contents"${_scopeId}>Table of contents</a></li><li${_scopeId}><a href="#requirements"${_scopeId}>Requirements</a></li><li${_scopeId}><a href="#setting-up"${_scopeId}>Setting Up</a></li><li${_scopeId}><a href="#playing-and-pausing"${_scopeId}>Playing and Pausing</a></li><li${_scopeId}><a href="#skipping-forward-and-backward"${_scopeId}>Skipping Forward and Backward</a></li><li${_scopeId}><a href="#creating-the-duration-bar"${_scopeId}>Creating the Duration Bar</a></li><li${_scopeId}><a href="#conclusion"${_scopeId}>Conclusion</a></li></ul></div></p><p${_scopeId}>Videos are an extremely common way for users to consume information. On average there are 1 million video views per day on YouTube, and everyone has a Netflix subscription.</p><p${_scopeId}>Video controls have a huge impact on the viewing experience. They can make or break an app so it’s important to get it right. You can’t just rely on the native controls because it might not fit the theme of your app and you can’t guarantee that the user experience is uniform between devices. The only option is to create your own and I will show you how to do just that.</p><h2 id="requirements" tabindex="-1"${_scopeId}><a class="header-anchor" href="#requirements"${_scopeId}>Requirements</a></h2><p${_scopeId}>You should be familiar with JavaScript and have some basic knowledge of React and React Native. I am going to be using Expo to initialize the app and I’ll be using their <a href="https://docs.expo.io/versions/latest/sdk/video/" target="_blank" rel="noopener"${_scopeId}>Video</a> component. I am running this code on my iOS device using the Expo app. The same general principles should apply if you want to use a base React Native build with React Native Video. Of course the methods will probably be a bit different so be sure to read up on their documentation.</p><h2 id="setting-up" tabindex="-1"${_scopeId}><a class="header-anchor" href="#setting-up"${_scopeId}>Setting Up</a></h2><p${_scopeId}>To begin let’s create a new app with the <code class="hljs"${_scopeId}>expo-<span class="hljs-keyword"${_scopeId}>cli</span></code>:</p><p${_scopeId}><code class="hljs"${_scopeId}>expo <span class="hljs-keyword"${_scopeId}>init</span> custom-video-controls</code></p><p${_scopeId}>Select Bare from the JavaScript managed workflow.</p><p${_scopeId}>Once the app is created, navigate into the base directory and install expo-av and React Native Elements.</p><p${_scopeId}><code class="hljs"${_scopeId}>expo install expo-av react-<span class="hljs-keyword"${_scopeId}>native</span>-elements</code></p><p${_scopeId}>Expo AV is a package provided by Expo that gives us access to their Video and Audio components. React Native Elements is a component library that will allow us to easily create some customizable controls.</p><p${_scopeId}>Once that finishes installing open App.js and the code with this:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>React</span> <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>Video</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;expo-av&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>StatusBar</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;expo-status-bar&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>View</span>, <span class="hljs-title class_"${_scopeId}>SafeAreaView</span>, <span class="hljs-title class_"${_scopeId}>StyleSheet</span>, <span class="hljs-title class_"${_scopeId}>Dimensions</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react-native&#39;</span>;

<span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>App</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>return</span> (
    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>SafeAreaView</span> <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.container}</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>StatusBar</span> <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>&quot;auto&quot;</span> /&gt;</span>

      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>View</span>&gt;</span>
        <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Video</span>
          <span class="hljs-attr"${_scopeId}>source</span>=<span class="hljs-string"${_scopeId}>{{</span>
            <span class="hljs-attr"${_scopeId}>uri:</span> &#39;<span class="hljs-attr"${_scopeId}>http:</span>//<span class="hljs-attr"${_scopeId}>url</span>/<span class="hljs-attr"${_scopeId}>to</span>/<span class="hljs-attr"${_scopeId}>video</span>&#39;,
          }}
          <span class="hljs-attr"${_scopeId}>rate</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
          <span class="hljs-attr"${_scopeId}>volume</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
          <span class="hljs-attr"${_scopeId}>isMuted</span>=<span class="hljs-string"${_scopeId}>{false}</span>
          <span class="hljs-attr"${_scopeId}>resizeMode</span>=<span class="hljs-string"${_scopeId}>&quot;cover&quot;</span>
          <span class="hljs-attr"${_scopeId}>shouldPlay</span>
          <span class="hljs-attr"${_scopeId}>isLooping</span>
          <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.video}</span>
        /&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>View</span>&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>SafeAreaView</span>&gt;</span></span>
  );
}

<span class="hljs-keyword"${_scopeId}>const</span> styles = <span class="hljs-title class_"${_scopeId}>StyleSheet</span>.<span class="hljs-title function_"${_scopeId}>create</span>({
  <span class="hljs-attr"${_scopeId}>container</span>: {
    <span class="hljs-attr"${_scopeId}>flex</span>: <span class="hljs-number"${_scopeId}>1</span>,

    <span class="hljs-attr"${_scopeId}>alignItems</span>: <span class="hljs-string"${_scopeId}>&#39;center&#39;</span>,
  },

  <span class="hljs-attr"${_scopeId}>video</span>: {
    <span class="hljs-attr"${_scopeId}>width</span>: <span class="hljs-title class_"${_scopeId}>Dimensions</span>.<span class="hljs-title function_"${_scopeId}>get</span>(<span class="hljs-string"${_scopeId}>&#39;screen&#39;</span>).<span class="hljs-property"${_scopeId}>width</span>,

    <span class="hljs-attr"${_scopeId}>height</span>: <span class="hljs-title class_"${_scopeId}>Dimensions</span>.<span class="hljs-title function_"${_scopeId}>get</span>(<span class="hljs-string"${_scopeId}>&#39;screen&#39;</span>).<span class="hljs-property"${_scopeId}>width</span> * <span class="hljs-number"${_scopeId}>0.5625</span>,
  },
});
</code></pre><p${_scopeId}>Now that we have the initial set up we can start adding the custom controls. To do that we are going to import Icon from React Native Elements:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-comment"${_scopeId}>/* ... other imports*/</span>

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>Icon</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react-native-elements&#39;</span>;

<span class="hljs-comment"${_scopeId}>/* ... component*/</span>
</code></pre><p${_scopeId}>We are going to create a new view just below the video element that will contain all of our controls. Inside of that we will add a play/pause button, a skip forward button and a skip backward button.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}>&lt;<span class="hljs-title class_"${_scopeId}>View</span>&gt;
  <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Video</span>
    <span class="hljs-attr"${_scopeId}>source</span>=<span class="hljs-string"${_scopeId}>{{</span>
      <span class="hljs-attr"${_scopeId}>uri:</span> &#39;<span class="hljs-attr"${_scopeId}>http:</span>//<span class="hljs-attr"${_scopeId}>d23dyxeqlo5psv.cloudfront.net</span>/<span class="hljs-attr"${_scopeId}>big_buck_bunny.mp4</span>&#39;,
    }}
    <span class="hljs-attr"${_scopeId}>rate</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
    <span class="hljs-attr"${_scopeId}>volume</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
    <span class="hljs-attr"${_scopeId}>isMuted</span>=<span class="hljs-string"${_scopeId}>{false}</span>
    <span class="hljs-attr"${_scopeId}>resizeMode</span>=<span class="hljs-string"${_scopeId}>&quot;cover&quot;</span>
    <span class="hljs-attr"${_scopeId}>shouldPlay</span>
    <span class="hljs-attr"${_scopeId}>isLooping</span>
    <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.video}</span>
  /&gt;</span></span>

  <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>View</span> <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.buttonContainer}</span>&gt;</span>
    // the replay button
    <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;replay-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
    // play/pause button
    <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;pause&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
    // skip forward
    <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;forward-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
  <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>View</span>&gt;</span></span>
&lt;/<span class="hljs-title class_"${_scopeId}>View</span>&gt;;

<span class="hljs-keyword"${_scopeId}>const</span> styles = <span class="hljs-title class_"${_scopeId}>StyleSheet</span>.<span class="hljs-title function_"${_scopeId}>create</span>({
  <span class="hljs-comment"${_scopeId}>/* ... other styles ... */</span>

  <span class="hljs-attr"${_scopeId}>buttonContainer</span>: {
    <span class="hljs-attr"${_scopeId}>flexDirection</span>: <span class="hljs-string"${_scopeId}>&#39;row&#39;</span>,

    <span class="hljs-attr"${_scopeId}>justifyContent</span>: <span class="hljs-string"${_scopeId}>&#39;space-evenly&#39;</span>,
  },
});
</code></pre><p${_scopeId}>Now we have some touchable buttons. Lets go through each one.</p><h2 id="playing-and-pausing" tabindex="-1"${_scopeId}><a class="header-anchor" href="#playing-and-pausing"${_scopeId}>Playing and Pausing</a></h2><p${_scopeId}>In React Native we cannot use the Document Object to target specific elements on the screen. Instead we have to use a React hook called useRef. First let’s import it into the file.</p><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> React, { useRef } <span class="hljs-keyword"${_scopeId}>from</span><span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;</code></p><p${_scopeId}>Then we need to define the ref.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>App</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> videoRef = <span class="hljs-title function_"${_scopeId}>useRef</span>(<span class="hljs-literal"${_scopeId}>null</span>);

  <span class="hljs-keyword"${_scopeId}>return</span> (
    <span class="hljs-comment"${_scopeId}>/* ... */</span>

    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Video</span>
      <span class="hljs-attr"${_scopeId}>ref</span>=<span class="hljs-string"${_scopeId}>{videoRef}</span>
      <span class="hljs-attr"${_scopeId}>source</span>=<span class="hljs-string"${_scopeId}>{{</span>
        <span class="hljs-attr"${_scopeId}>uri:</span> &#39;<span class="hljs-attr"${_scopeId}>http:</span>//<span class="hljs-attr"${_scopeId}>d23dyxeqlo5psv.cloudfront.net</span>/<span class="hljs-attr"${_scopeId}>big_buck_bunny.mp4</span>&#39;,
      }}
      <span class="hljs-attr"${_scopeId}>rate</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
      <span class="hljs-attr"${_scopeId}>volume</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
      <span class="hljs-attr"${_scopeId}>isMuted</span>=<span class="hljs-string"${_scopeId}>{false}</span>
      <span class="hljs-attr"${_scopeId}>resizeMode</span>=<span class="hljs-string"${_scopeId}>&quot;cover&quot;</span>
      <span class="hljs-attr"${_scopeId}>shouldPlay</span>
      <span class="hljs-attr"${_scopeId}>isLooping</span>
      <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.video}</span>
    /&gt;</span></span>

    <span class="hljs-comment"${_scopeId}>/* ... */</span>
  );
}
</code></pre><p${_scopeId}>Now we can use the videoRef variable to refer to the video element. This will allow us to utilize all of the methods specified in the <a href="https://docs.expo.io/versions/latest/sdk/video/" target="_blank" rel="noopener"${_scopeId}>Video</a> docs.</p><p${_scopeId}>Now let’s create a function that will toggle play and pause:</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>togglePlayPause</span>(<span class="hljs-params"${_scopeId}></span>) {
  videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>pauseAsync</span>();
}
</code></pre><p${_scopeId}>And let’s add this to the onPress prop of the play/pause button:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}>&lt;<span class="hljs-title class_"${_scopeId}>TouchableOpacity</span> onPress={togglePlayPause}&gt;
  <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;pause&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_"${_scopeId}>TouchableOpacity</span>&gt;
</code></pre><p${_scopeId}>Now when you press the button the video should pause. But we can’t play the video so let’s add some logic to toggle between play and pause.</p><p${_scopeId}>First we need to create some state to track if the video is playing or not. Let’s import the useState hook from react.</p><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> React, {useRef, useState} <span class="hljs-keyword"${_scopeId}>from</span><span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;</code></p><p${_scopeId}>Next add playing state to the top of our component and have it default to false. This is good to do in case something prevents the video from playing automatically; we won’t have any UI bugs or inconsistencies on the screen.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>App</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> [playing, setPlaying] = <span class="hljs-title function_"${_scopeId}>useState</span>(<span class="hljs-literal"${_scopeId}>false</span>);

  <span class="hljs-keyword"${_scopeId}>const</span> videoRef = <span class="hljs-title function_"${_scopeId}>useRef</span>(<span class="hljs-literal"${_scopeId}>null</span>);

  <span class="hljs-comment"${_scopeId}>/* ... */</span>
}
</code></pre><p${_scopeId}>Now we’re going to use a prop on the Video component called onPlaybackStatusUpdate that gets called regularly and will give us the playback status of the video. This is will allow us to see if the video is playing, if it has ended, and what our current position in the video is. For now we will just check if it is playing.</p><p${_scopeId}>Let’s create a function for handling the status update.</p><pre${_scopeId}><code class="hljs language-js"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>handlePlayBackStatusUpdate</span>(<span class="hljs-params"${_scopeId}>e</span>) {
  <span class="hljs-keyword"${_scopeId}>if</span> (e.<span class="hljs-property"${_scopeId}>isPlaying</span> &amp;&amp; !playing) {
    <span class="hljs-title function_"${_scopeId}>setPlaying</span>(<span class="hljs-literal"${_scopeId}>true</span>);
  }

  <span class="hljs-keyword"${_scopeId}>if</span> (!e.<span class="hljs-property"${_scopeId}>isPlaying</span> &amp;&amp; playing) {
    <span class="hljs-title function_"${_scopeId}>setPlaying</span>(<span class="hljs-literal"${_scopeId}>false</span>);
  }
}
</code></pre><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>handlePlayBackStatusUpdate</span></code> receives an object that represents the current status of the video. We check if it’s playing and if the playing state is false. If both of these return true we set playing to true. Next we check if the video is not playing and if playing is true. If both return true we set playing to false. The reason we check both <code class="hljs"${_scopeId}>e.isPlaying</code> and <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>playing</span></code> is to avoid unnecessary calls to update playing. If the video is not playing and playing is already false there is no reason to call <code class="hljs"${_scopeId}><span class="hljs-function"${_scopeId}><span class="hljs-title"${_scopeId}>setPlaying</span>(<span class="hljs-variable"${_scopeId}><span class="hljs-literal"${_scopeId}>false</span></span>)</span></code>.</p><p${_scopeId}>Now let’s add this function to the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>onPlaybackStatusUpdate</span></code> prop of the Video element.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}>&lt;<span class="hljs-title class_"${_scopeId}>Video</span>
  ref={videoRef}
  source={{
    <span class="hljs-attr"${_scopeId}>uri</span>: <span class="hljs-string"${_scopeId}>&#39;http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4&#39;</span>,
  }}
  rate={<span class="hljs-number"${_scopeId}>1.0</span>}
  volume={<span class="hljs-number"${_scopeId}>1.0</span>}
  isMuted={<span class="hljs-literal"${_scopeId}>false</span>}
  resizeMode=<span class="hljs-string"${_scopeId}>&quot;cover&quot;</span>
  shouldPlay
  isLooping
  style={styles.<span class="hljs-property"${_scopeId}>video</span>}
  onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
/&gt;
</code></pre><p${_scopeId}>Then expand the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>togglePlayPause</span></code> function to pause the video if it’s playing or play it if it’s paused.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>togglePlayPause</span>(<span class="hljs-params"${_scopeId}></span>) {
  playing ? videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>pauseAsync</span>() : videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>playAsync</span>();
}
</code></pre><p${_scopeId}>Finally conditionally render a pause icon if the video is playing or a play icon if the video is paused.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}>&lt;<span class="hljs-title class_"${_scopeId}>TouchableOpacity</span> onPress={togglePlayPause}&gt;
  {playing ? (
    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;pause&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span></span>
  ) : (
    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;play-arrow&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span></span>
  )}
&lt;/<span class="hljs-title class_"${_scopeId}>TouchableOpacity</span>&gt;
</code></pre><p${_scopeId}>Now you should be able to toggle between play and pause by pressing the button!</p><h2 id="skipping-forward-and-backward" tabindex="-1"${_scopeId}><a class="header-anchor" href="#skipping-forward-and-backward"${_scopeId}>Skipping Forward and Backward</a></h2><p${_scopeId}>Next create a function that will skip forward and backward.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>async</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>skip</span>(<span class="hljs-params"${_scopeId}>bool</span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> status = <span class="hljs-keyword"${_scopeId}>await</span> videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>getStatusAsync</span>();

  <span class="hljs-keyword"${_scopeId}>const</span> curPos = status.<span class="hljs-property"${_scopeId}>positionMillis</span>;

  <span class="hljs-keyword"${_scopeId}>const</span> tenSeconds = <span class="hljs-number"${_scopeId}>10000</span>;

  <span class="hljs-keyword"${_scopeId}>const</span> newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;

  videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>setPositionAsync</span>(newPos);
}
</code></pre><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>getStatusAsync</span></code> returns an object that represents the current status of the video. Either add or remove 10 seconds from the current position to get our new position. Finally use the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>setPositionAsync</span></code> method to set the new position of the video.</p><p${_scopeId}>Add this function to the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>onPress</span></code> prop of the skip buttons.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}>&lt;<span class="hljs-title class_"${_scopeId}>TouchableOpacity</span> onPress={<span class="hljs-function"${_scopeId}>() =&gt;</span> <span class="hljs-title function_"${_scopeId}>skip</span>(<span class="hljs-literal"${_scopeId}>false</span>)}&gt;
  <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;replay-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_"${_scopeId}>TouchableOpacity</span>&gt;

<span class="hljs-comment"${_scopeId}>/* ... */</span>

<span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span> <span class="hljs-attr"${_scopeId}>onPress</span>=<span class="hljs-string"${_scopeId}>{()</span> =&gt;</span> skip(true)}&gt;
  <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;forward-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span></span>
</code></pre><p${_scopeId}>Now we should be able to play or pause the video, and skip the video forward and backwards. There are many other methods we can utilize to add additional controls and functionality but these are the basics.</p><h2 id="creating-the-duration-bar" tabindex="-1"${_scopeId}><a class="header-anchor" href="#creating-the-duration-bar"${_scopeId}>Creating the Duration Bar</a></h2><p${_scopeId}>The last thing I want to touch on is the duration bar. For this tutorial I am going to use the slider component provided by React Native Elements.</p><p${_scopeId}>Let’s wrap our current controls in a new View and add the slider to the bottom:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-comment"${_scopeId}>/* ... */</span>

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>Icon</span>, <span class="hljs-title class_"${_scopeId}>Slider</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react-native-elements&#39;</span>;

<span class="hljs-comment"${_scopeId}>/* ...  */</span>

<span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>View</span>&gt;</span>
  <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>View</span> <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.buttonContainer}</span>&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span> <span class="hljs-attr"${_scopeId}>onPress</span>=<span class="hljs-string"${_scopeId}>{()</span> =&gt;</span> skip(false)}&gt;
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;replay-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>

    <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span> <span class="hljs-attr"${_scopeId}>onPress</span>=<span class="hljs-string"${_scopeId}>{togglePlayPause}</span>&gt;</span>
      {playing ? (
        <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;pause&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
      ) : (
        <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;play-arrow&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
      )}
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>

    <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span> <span class="hljs-attr"${_scopeId}>onPress</span>=<span class="hljs-string"${_scopeId}>{()</span> =&gt;</span> skip(true)}&gt;
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;forward-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
  <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>View</span>&gt;</span>

  <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Slider</span>
    <span class="hljs-attr"${_scopeId}>value</span>=<span class="hljs-string"${_scopeId}>{position}</span>
    <span class="hljs-attr"${_scopeId}>maximumValue</span>=<span class="hljs-string"${_scopeId}>{duration}</span>
    <span class="hljs-attr"${_scopeId}>onSlidingComplete</span>=<span class="hljs-string"${_scopeId}>{handleDoneSliding}</span>
  /&gt;</span>
<span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>View</span>&gt;</span></span>;
</code></pre><p${_scopeId}>If you look closely you can see we have added some variables we need to define: <code class="hljs"${_scopeId}>position</code>, <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>duration</span></code>, and <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>handleDoneSliding</span></code>.</p><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>Position</span></code> is how we will track the current position of the video. We will use the onStatusUpdate to keep track of this.</p><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>duration</span></code> is the total length of the video.</p><p${_scopeId}><code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>handleDoneSliding</span></code> is a function that will set the position of the video after a user slides the thumb of the slider.</p><p${_scopeId}>First let’s define <code class="hljs"${_scopeId}>position</code> and <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>duration</span></code> at the top of our component :</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>App</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> [duration, setDuration] = <span class="hljs-title function_"${_scopeId}>useState</span>(<span class="hljs-number"${_scopeId}>0</span>);

  <span class="hljs-keyword"${_scopeId}>const</span> [position, setPosition] = <span class="hljs-title function_"${_scopeId}>useState</span>(<span class="hljs-number"${_scopeId}>0</span>);

  <span class="hljs-comment"${_scopeId}>/* ... */</span>
}
</code></pre><p${_scopeId}>Update the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>handleStatusUpdate</span></code> function to save the duration and the position of the video.</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>handlePlaybackStatusUpdate</span>(<span class="hljs-params"${_scopeId}>e</span>) {
  <span class="hljs-keyword"${_scopeId}>if</span> (e.<span class="hljs-property"${_scopeId}>isPlaying</span> &amp;&amp; !playing) {
    <span class="hljs-title function_"${_scopeId}>setPlaying</span>(<span class="hljs-literal"${_scopeId}>true</span>);
  }

  <span class="hljs-keyword"${_scopeId}>if</span> (!e.<span class="hljs-property"${_scopeId}>isPlaying</span> &amp;&amp; playing) {
    <span class="hljs-title function_"${_scopeId}>setPlaying</span>(<span class="hljs-literal"${_scopeId}>false</span>);
  }

  <span class="hljs-keyword"${_scopeId}>if</span> (e.<span class="hljs-property"${_scopeId}>isPlaying</span>) {
    <span class="hljs-title function_"${_scopeId}>setPosition</span>(e.<span class="hljs-property"${_scopeId}>positionMillis</span>);
  }

  <span class="hljs-keyword"${_scopeId}>if</span> (duration === <span class="hljs-number"${_scopeId}>0</span>) {
    <span class="hljs-title function_"${_scopeId}>setDuration</span>(e.<span class="hljs-property"${_scopeId}>durationMillis</span>);
  }
}
</code></pre><p${_scopeId}>Now if the video is playing we set the current position. If the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>duration</span></code> state is equal to 0 we set it to the duration in milliseconds of the video.</p><p${_scopeId}>Now if you play the video you should see the slider moving as the video progresses.</p><p${_scopeId}>Next let’s define <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>handleDoneSliding</span></code>:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>handleDoneSliding</span>(<span class="hljs-params"${_scopeId}>value</span>) {
  <span class="hljs-title function_"${_scopeId}>setPosition</span>(value);

  videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>setPositionAsync</span>(value);
}
</code></pre><p${_scopeId}>As you can see above we have assigned <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>handleDoneSliding</span></code> to the <code class="hljs"${_scopeId}><span class="hljs-attribute"${_scopeId}>onSlidingComplete</span></code> prop on the Slider component. This prop passes the current position in milliseconds to the function which saves it to our position state and manually sets the position of the video.</p><p${_scopeId}>This is what your <code class="hljs"${_scopeId}><span class="hljs-module-access"${_scopeId}><span class="hljs-module"${_scopeId}><span class="hljs-identifier"${_scopeId}>App</span>.</span></span>js</code> file should look like:</p><pre${_scopeId}><code class="hljs language-jsx"${_scopeId}><span class="hljs-keyword"${_scopeId}>import</span> <span class="hljs-title class_"${_scopeId}>React</span>, { useRef, useState } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>Video</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;expo-av&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>StatusBar</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;expo-status-bar&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> {
  <span class="hljs-title class_"${_scopeId}>TouchableOpacity</span>,
  <span class="hljs-title class_"${_scopeId}>View</span>,
  <span class="hljs-title class_"${_scopeId}>SafeAreaView</span>,
  <span class="hljs-title class_"${_scopeId}>StyleSheet</span>,
  <span class="hljs-title class_"${_scopeId}>Dimensions</span>,
} <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react-native&#39;</span>;

<span class="hljs-keyword"${_scopeId}>import</span> { <span class="hljs-title class_"${_scopeId}>Icon</span>, <span class="hljs-title class_"${_scopeId}>Slider</span> } <span class="hljs-keyword"${_scopeId}>from</span> <span class="hljs-string"${_scopeId}>&#39;react-native-elements&#39;</span>;

<span class="hljs-keyword"${_scopeId}>export</span> <span class="hljs-keyword"${_scopeId}>default</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>App</span>(<span class="hljs-params"${_scopeId}></span>) {
  <span class="hljs-keyword"${_scopeId}>const</span> [playing, setPlaying] = <span class="hljs-title function_"${_scopeId}>useState</span>(<span class="hljs-literal"${_scopeId}>false</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> [duration, setDuration] = <span class="hljs-title function_"${_scopeId}>useState</span>(<span class="hljs-number"${_scopeId}>0</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> [position, setPosition] = <span class="hljs-title function_"${_scopeId}>useState</span>(<span class="hljs-number"${_scopeId}>0</span>);
  <span class="hljs-keyword"${_scopeId}>const</span> videoRef = <span class="hljs-title function_"${_scopeId}>useRef</span>(<span class="hljs-literal"${_scopeId}>null</span>);

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>togglePlayPause</span>(<span class="hljs-params"${_scopeId}></span>) {
    playing ? videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>pauseAsync</span>() : videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>playAsync</span>();
  }

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>handlePlaybackStatusUpdate</span>(<span class="hljs-params"${_scopeId}>e</span>) {
    <span class="hljs-keyword"${_scopeId}>if</span> (e.<span class="hljs-property"${_scopeId}>isPlaying</span> &amp;&amp; !playing) {
      <span class="hljs-title function_"${_scopeId}>setPlaying</span>(<span class="hljs-literal"${_scopeId}>true</span>);
    }

    <span class="hljs-keyword"${_scopeId}>if</span> (!e.<span class="hljs-property"${_scopeId}>isPlaying</span> &amp;&amp; playing) {
      <span class="hljs-title function_"${_scopeId}>setPlaying</span>(<span class="hljs-literal"${_scopeId}>false</span>);
    }

    <span class="hljs-title function_"${_scopeId}>setPosition</span>(e.<span class="hljs-property"${_scopeId}>positionMillis</span>);

    <span class="hljs-keyword"${_scopeId}>if</span> (duration === <span class="hljs-number"${_scopeId}>0</span>) {
      <span class="hljs-variable language_"${_scopeId}>console</span>.<span class="hljs-title function_"${_scopeId}>log</span>(e.<span class="hljs-property"${_scopeId}>durationMillis</span>);
      <span class="hljs-title function_"${_scopeId}>setDuration</span>(e.<span class="hljs-property"${_scopeId}>durationMillis</span>);
    }
  }

  <span class="hljs-keyword"${_scopeId}>async</span> <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>skip</span>(<span class="hljs-params"${_scopeId}>bool</span>) {
    <span class="hljs-keyword"${_scopeId}>const</span> status = <span class="hljs-keyword"${_scopeId}>await</span> videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>getStatusAsync</span>();
    <span class="hljs-keyword"${_scopeId}>const</span> tenSeconds = <span class="hljs-number"${_scopeId}>10000</span>;
    <span class="hljs-keyword"${_scopeId}>const</span> curPos = status.<span class="hljs-property"${_scopeId}>positionMillis</span>;
    <span class="hljs-keyword"${_scopeId}>const</span> newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;
    <span class="hljs-title function_"${_scopeId}>setPosition</span>(newPos);
    videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>setPositionAsync</span>(newPos);
  }

  <span class="hljs-keyword"${_scopeId}>function</span> <span class="hljs-title function_"${_scopeId}>handleDoneSliding</span>(<span class="hljs-params"${_scopeId}>value</span>) {
    <span class="hljs-title function_"${_scopeId}>setPosition</span>(value);
    <span class="hljs-variable language_"${_scopeId}>console</span>.<span class="hljs-title function_"${_scopeId}>log</span>(value);
    videoRef.<span class="hljs-property"${_scopeId}>current</span>.<span class="hljs-title function_"${_scopeId}>setPositionAsync</span>(value);
  }

  <span class="hljs-keyword"${_scopeId}>return</span> (
    <span class="language-xml"${_scopeId}><span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>SafeAreaView</span> <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.container}</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>StatusBar</span> <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>&quot;auto&quot;</span> /&gt;</span>

      <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>View</span>&gt;</span>
        <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Video</span>
          <span class="hljs-attr"${_scopeId}>ref</span>=<span class="hljs-string"${_scopeId}>{videoRef}</span>
          <span class="hljs-attr"${_scopeId}>source</span>=<span class="hljs-string"${_scopeId}>{{</span>
            <span class="hljs-attr"${_scopeId}>uri:</span> &#39;<span class="hljs-attr"${_scopeId}>http:</span>//<span class="hljs-attr"${_scopeId}>url</span>/<span class="hljs-attr"${_scopeId}>to</span>/<span class="hljs-attr"${_scopeId}>video</span>&#39;,
          }}
          <span class="hljs-attr"${_scopeId}>rate</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
          <span class="hljs-attr"${_scopeId}>volume</span>=<span class="hljs-string"${_scopeId}>{1.0}</span>
          <span class="hljs-attr"${_scopeId}>isMuted</span>=<span class="hljs-string"${_scopeId}>{false}</span>
          <span class="hljs-attr"${_scopeId}>resizeMode</span>=<span class="hljs-string"${_scopeId}>&quot;cover&quot;</span>
          <span class="hljs-attr"${_scopeId}>shouldPlay</span>
          <span class="hljs-attr"${_scopeId}>isLooping</span>
          <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.video}</span>
          <span class="hljs-attr"${_scopeId}>onPlaybackStatusUpdate</span>=<span class="hljs-string"${_scopeId}>{handlePlaybackStatusUpdate}</span>
        /&gt;</span>

        <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>View</span>&gt;</span>
          <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>View</span> <span class="hljs-attr"${_scopeId}>style</span>=<span class="hljs-string"${_scopeId}>{styles.buttonContainer}</span>&gt;</span>
            <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span> <span class="hljs-attr"${_scopeId}>onPress</span>=<span class="hljs-string"${_scopeId}>{()</span> =&gt;</span> skip(false)}&gt;
              <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;replay-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
            <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>

            <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span> <span class="hljs-attr"${_scopeId}>onPress</span>=<span class="hljs-string"${_scopeId}>{togglePlayPause}</span>&gt;</span>
              {playing ? (
                <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;pause&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
              ) : (
                <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;play-arrow&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
              )}
            <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>

            <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>TouchableOpacity</span> <span class="hljs-attr"${_scopeId}>onPress</span>=<span class="hljs-string"${_scopeId}>{()</span> =&gt;</span> skip(true)}&gt;
              <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Icon</span> <span class="hljs-attr"${_scopeId}>name</span>=<span class="hljs-string"${_scopeId}>&quot;forward-10&quot;</span> <span class="hljs-attr"${_scopeId}>size</span>=<span class="hljs-string"${_scopeId}>{50}</span> /&gt;</span>
            <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>TouchableOpacity</span>&gt;</span>
          <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>View</span>&gt;</span>

          <span class="hljs-tag"${_scopeId}>&lt;<span class="hljs-name"${_scopeId}>Slider</span>
            <span class="hljs-attr"${_scopeId}>value</span>=<span class="hljs-string"${_scopeId}>{position}</span>
            <span class="hljs-attr"${_scopeId}>maximumValue</span>=<span class="hljs-string"${_scopeId}>{duration}</span>
            <span class="hljs-attr"${_scopeId}>onSlidingComplete</span>=<span class="hljs-string"${_scopeId}>{handleDoneSliding}</span>
          /&gt;</span>
        <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>View</span>&gt;</span>
      <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>View</span>&gt;</span>
    <span class="hljs-tag"${_scopeId}>&lt;/<span class="hljs-name"${_scopeId}>SafeAreaView</span>&gt;</span></span>
  );
}

<span class="hljs-keyword"${_scopeId}>const</span> styles = <span class="hljs-title class_"${_scopeId}>StyleSheet</span>.<span class="hljs-title function_"${_scopeId}>create</span>({
  <span class="hljs-attr"${_scopeId}>container</span>: {
    <span class="hljs-attr"${_scopeId}>flex</span>: <span class="hljs-number"${_scopeId}>1</span>,
    <span class="hljs-attr"${_scopeId}>alignItems</span>: <span class="hljs-string"${_scopeId}>&#39;center&#39;</span>,
  },

  <span class="hljs-attr"${_scopeId}>video</span>: {
    <span class="hljs-attr"${_scopeId}>width</span>: <span class="hljs-title class_"${_scopeId}>Dimensions</span>.<span class="hljs-title function_"${_scopeId}>get</span>(<span class="hljs-string"${_scopeId}>&#39;screen&#39;</span>).<span class="hljs-property"${_scopeId}>width</span>,
    <span class="hljs-attr"${_scopeId}>height</span>: <span class="hljs-title class_"${_scopeId}>Dimensions</span>.<span class="hljs-title function_"${_scopeId}>get</span>(<span class="hljs-string"${_scopeId}>&#39;screen&#39;</span>).<span class="hljs-property"${_scopeId}>width</span> * <span class="hljs-number"${_scopeId}>0.5625</span>,
  },

  <span class="hljs-attr"${_scopeId}>buttonContainer</span>: {
    <span class="hljs-attr"${_scopeId}>flexDirection</span>: <span class="hljs-string"${_scopeId}>&#39;row&#39;</span>,
    <span class="hljs-attr"${_scopeId}>justifyContent</span>: <span class="hljs-string"${_scopeId}>&#39;space-evenly&#39;</span>,
  },
});
</code></pre><h2 id="conclusion" tabindex="-1"${_scopeId}><a class="header-anchor" href="#conclusion"${_scopeId}>Conclusion</a></h2><p${_scopeId}>That wraps up this tutorial on custom video controls in React Native. Obviously, this could still use a bit of styling but that should be easy to implement now that we actually have some functional controls. You can utilize other methods provided by expo video to add additional functionality to your controls.</p><p${_scopeId}>Thanks for reading and feel free to follow me on Twitter to stay up to date with my posts!</p></div>`);
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
                  }, "Table of contents")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("div", { class: "table-of-contents" }, [
                    vue$1.createVNode("ul", null, [
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#table-of-contents" }, "Table of contents")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#requirements" }, "Requirements")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#setting-up" }, "Setting Up")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#playing-and-pausing" }, "Playing and Pausing")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#skipping-forward-and-backward" }, "Skipping Forward and Backward")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#creating-the-duration-bar" }, "Creating the Duration Bar")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#conclusion" }, "Conclusion")
                      ])
                    ])
                  ])
                ]),
                vue$1.createVNode("p", null, "Videos are an extremely common way for users to consume information. On average there are 1 million video views per day on YouTube, and everyone has a Netflix subscription."),
                vue$1.createVNode("p", null, "Video controls have a huge impact on the viewing experience. They can make or break an app so it’s important to get it right. You can’t just rely on the native controls because it might not fit the theme of your app and you can’t guarantee that the user experience is uniform between devices. The only option is to create your own and I will show you how to do just that."),
                vue$1.createVNode("h2", {
                  id: "requirements",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#requirements"
                  }, "Requirements")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("You should be familiar with JavaScript and have some basic knowledge of React and React Native. I am going to be using Expo to initialize the app and I’ll be using their "),
                  vue$1.createVNode("a", {
                    href: "https://docs.expo.io/versions/latest/sdk/video/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Video"),
                  vue$1.createTextVNode(" component. I am running this code on my iOS device using the Expo app. The same general principles should apply if you want to use a base React Native build with React Native Video. Of course the methods will probably be a bit different so be sure to read up on their documentation.")
                ]),
                vue$1.createVNode("h2", {
                  id: "setting-up",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#setting-up"
                  }, "Setting Up")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("To begin let’s create a new app with the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createTextVNode("expo-"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "cli")
                  ]),
                  vue$1.createTextVNode(":")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createTextVNode("expo "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "init"),
                    vue$1.createTextVNode(" custom-video-controls")
                  ])
                ]),
                vue$1.createVNode("p", null, "Select Bare from the JavaScript managed workflow."),
                vue$1.createVNode("p", null, "Once the app is created, navigate into the base directory and install expo-av and React Native Elements."),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createTextVNode("expo install expo-av react-"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "native"),
                    vue$1.createTextVNode("-elements")
                  ])
                ]),
                vue$1.createVNode("p", null, "Expo AV is a package provided by Expo that gives us access to their Video and Audio components. React Native Elements is a component library that will allow us to easily create some customizable controls."),
                vue$1.createVNode("p", null, "Once that finishes installing open App.js and the code with this:"),
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
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Video"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'expo-av'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "StatusBar"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'expo-status-bar'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "View"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "SafeAreaView"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "StyleSheet"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Dimensions"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react-native'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
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
                        vue$1.createVNode("span", { class: "hljs-name" }, "SafeAreaView"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.container}"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "StatusBar"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"auto"'),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Video"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "source"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{{"),
                        vue$1.createTextVNode("\n            "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "uri:"),
                        vue$1.createTextVNode(" '"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "http:"),
                        vue$1.createTextVNode("//"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "url"),
                        vue$1.createTextVNode("/"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "to"),
                        vue$1.createTextVNode("/"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "video"),
                        vue$1.createTextVNode("',\n          }}\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "rate"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "volume"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isMuted"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{false}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "resizeMode"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"cover"'),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "shouldPlay"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isLooping"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.video}"),
                        vue$1.createTextVNode("\n        />")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "SafeAreaView"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  );\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" styles = "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "StyleSheet"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "create"),
                    vue$1.createTextVNode("({\n  "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "container"),
                    vue$1.createTextVNode(": {\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "flex"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "1"),
                    vue$1.createTextVNode(",\n\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "alignItems"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'center'"),
                    vue$1.createTextVNode(",\n  },\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "video"),
                    vue$1.createTextVNode(": {\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "width"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Dimensions"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "get"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'screen'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "width"),
                    vue$1.createTextVNode(",\n\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "height"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Dimensions"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "get"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'screen'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "width"),
                    vue$1.createTextVNode(" * "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0.5625"),
                    vue$1.createTextVNode(",\n  },\n});\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Now that we have the initial set up we can start adding the custom controls. To do that we are going to import Icon from React Native Elements:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... other imports*/"),
                    vue$1.createTextVNode("\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Icon"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react-native-elements'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... component*/"),
                    vue$1.createTextVNode("\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "We are going to create a new view just below the video element that will contain all of our controls. Inside of that we will add a play/pause button, a skip forward button and a skip backward button."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createTextVNode("<"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "View"),
                    vue$1.createTextVNode(">\n  "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Video"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "source"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{{"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "uri:"),
                        vue$1.createTextVNode(" '"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "http:"),
                        vue$1.createTextVNode("//"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "d23dyxeqlo5psv.cloudfront.net"),
                        vue$1.createTextVNode("/"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "big_buck_bunny.mp4"),
                        vue$1.createTextVNode("',\n    }}\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "rate"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "volume"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isMuted"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{false}"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "resizeMode"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"cover"'),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "shouldPlay"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isLooping"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.video}"),
                        vue$1.createTextVNode("\n  />")
                      ])
                    ]),
                    vue$1.createTextVNode("\n\n  "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.buttonContainer}"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    // the replay button\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"replay-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    // play/pause button\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"pause"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    // skip forward\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"forward-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n  "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n</"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "View"),
                    vue$1.createTextVNode(">;\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" styles = "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "StyleSheet"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "create"),
                    vue$1.createTextVNode("({\n  "),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... other styles ... */"),
                    vue$1.createTextVNode("\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "buttonContainer"),
                    vue$1.createTextVNode(": {\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "flexDirection"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'row'"),
                    vue$1.createTextVNode(",\n\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "justifyContent"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'space-evenly'"),
                    vue$1.createTextVNode(",\n  },\n});\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Now we have some touchable buttons. Lets go through each one."),
                vue$1.createVNode("h2", {
                  id: "playing-and-pausing",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#playing-and-pausing"
                  }, "Playing and Pausing")
                ]),
                vue$1.createVNode("p", null, "In React Native we cannot use the Document Object to target specific elements on the screen. Instead we have to use a React hook called useRef. First let’s import it into the file."),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" React, { useRef } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react'"),
                    vue$1.createTextVNode(";")
                  ])
                ]),
                vue$1.createVNode("p", null, "Then we need to define the ref."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "App"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" videoRef = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useRef"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "null"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(" (\n    "),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... */"),
                    vue$1.createTextVNode("\n\n    "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Video"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "ref"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{videoRef}"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "source"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{{"),
                        vue$1.createTextVNode("\n        "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "uri:"),
                        vue$1.createTextVNode(" '"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "http:"),
                        vue$1.createTextVNode("//"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "d23dyxeqlo5psv.cloudfront.net"),
                        vue$1.createTextVNode("/"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "big_buck_bunny.mp4"),
                        vue$1.createTextVNode("',\n      }}\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "rate"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "volume"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isMuted"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{false}"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "resizeMode"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"cover"'),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "shouldPlay"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isLooping"),
                        vue$1.createTextVNode("\n      "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.video}"),
                        vue$1.createTextVNode("\n    />")
                      ])
                    ]),
                    vue$1.createTextVNode("\n\n    "),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... */"),
                    vue$1.createTextVNode("\n  );\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Now we can use the videoRef variable to refer to the video element. This will allow us to utilize all of the methods specified in the "),
                  vue$1.createVNode("a", {
                    href: "https://docs.expo.io/versions/latest/sdk/video/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Video"),
                  vue$1.createTextVNode(" docs.")
                ]),
                vue$1.createVNode("p", null, "Now let’s create a function that will toggle play and pause:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "togglePlayPause"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "pauseAsync"),
                    vue$1.createTextVNode("();\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "And let’s add this to the onPress prop of the play/pause button:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createTextVNode("<"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "TouchableOpacity"),
                    vue$1.createTextVNode(" onPress={togglePlayPause}>\n  "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"pause"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ])
                    ]),
                    vue$1.createTextVNode("\n</"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "TouchableOpacity"),
                    vue$1.createTextVNode(">\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Now when you press the button the video should pause. But we can’t play the video so let’s add some logic to toggle between play and pause."),
                vue$1.createVNode("p", null, "First we need to create some state to track if the video is playing or not. Let’s import the useState hook from react."),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" React, {useRef, useState} "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react'"),
                    vue$1.createTextVNode(";")
                  ])
                ]),
                vue$1.createVNode("p", null, "Next add playing state to the top of our component and have it default to false. This is good to do in case something prevents the video from playing automatically; we won’t have any UI bugs or inconsistencies on the screen."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "App"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" [playing, setPlaying] = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useState"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" videoRef = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useRef"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "null"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... */"),
                    vue$1.createTextVNode("\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Now we’re going to use a prop on the Video component called onPlaybackStatusUpdate that gets called regularly and will give us the playback status of the video. This is will allow us to see if the video is playing, if it has ended, and what our current position in the video is. For now we will just check if it is playing."),
                vue$1.createVNode("p", null, "Let’s create a function for handling the status update."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-js" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "handlePlayBackStatusUpdate"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "e"),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "isPlaying"),
                    vue$1.createTextVNode(" && !playing) {\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPlaying"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "true"),
                    vue$1.createTextVNode(");\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (!e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "isPlaying"),
                    vue$1.createTextVNode(" && playing) {\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPlaying"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(");\n  }\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "handlePlayBackStatusUpdate")
                  ]),
                  vue$1.createTextVNode(" receives an object that represents the current status of the video. We check if it’s playing and if the playing state is false. If both of these return true we set playing to true. Next we check if the video is not playing and if playing is true. If both return true we set playing to false. The reason we check both "),
                  vue$1.createVNode("code", { class: "hljs" }, "e.isPlaying"),
                  vue$1.createTextVNode(" and "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "playing")
                  ]),
                  vue$1.createTextVNode(" is to avoid unnecessary calls to update playing. If the video is not playing and playing is already false there is no reason to call "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-function" }, [
                      vue$1.createVNode("span", { class: "hljs-title" }, "setPlaying"),
                      vue$1.createTextVNode("("),
                      vue$1.createVNode("span", { class: "hljs-variable" }, [
                        vue$1.createVNode("span", { class: "hljs-literal" }, "false")
                      ]),
                      vue$1.createTextVNode(")")
                    ])
                  ]),
                  vue$1.createTextVNode(".")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Now let’s add this function to the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "onPlaybackStatusUpdate")
                  ]),
                  vue$1.createTextVNode(" prop of the Video element.")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createTextVNode("<"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Video"),
                    vue$1.createTextVNode("\n  ref={videoRef}\n  source={{\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "uri"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'"),
                    vue$1.createTextVNode(",\n  }}\n  rate={"),
                    vue$1.createVNode("span", { class: "hljs-number" }, "1.0"),
                    vue$1.createTextVNode("}\n  volume={"),
                    vue$1.createVNode("span", { class: "hljs-number" }, "1.0"),
                    vue$1.createTextVNode("}\n  isMuted={"),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode("}\n  resizeMode="),
                    vue$1.createVNode("span", { class: "hljs-string" }, '"cover"'),
                    vue$1.createTextVNode("\n  shouldPlay\n  isLooping\n  style={styles."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "video"),
                    vue$1.createTextVNode("}\n  onPlaybackStatusUpdate={handlePlaybackStatusUpdate}\n/>\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Then expand the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "togglePlayPause")
                  ]),
                  vue$1.createTextVNode(" function to pause the video if it’s playing or play it if it’s paused.")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "togglePlayPause"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  playing ? videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "pauseAsync"),
                    vue$1.createTextVNode("() : videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "playAsync"),
                    vue$1.createTextVNode("();\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Finally conditionally render a pause icon if the video is playing or a play icon if the video is paused."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createTextVNode("<"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "TouchableOpacity"),
                    vue$1.createTextVNode(" onPress={togglePlayPause}>\n  {playing ? (\n    "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"pause"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  ) : (\n    "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"play-arrow"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  )}\n</"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "TouchableOpacity"),
                    vue$1.createTextVNode(">\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Now you should be able to toggle between play and pause by pressing the button!"),
                vue$1.createVNode("h2", {
                  id: "skipping-forward-and-backward",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#skipping-forward-and-backward"
                  }, "Skipping Forward and Backward")
                ]),
                vue$1.createVNode("p", null, "Next create a function that will skip forward and backward."),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "async"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "skip"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "bool"),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" status = "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "await"),
                    vue$1.createTextVNode(" videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getStatusAsync"),
                    vue$1.createTextVNode("();\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" curPos = status."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "positionMillis"),
                    vue$1.createTextVNode(";\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" tenSeconds = "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "10000"),
                    vue$1.createTextVNode(";\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;\n\n  videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPositionAsync"),
                    vue$1.createTextVNode("(newPos);\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "getStatusAsync")
                  ]),
                  vue$1.createTextVNode(" returns an object that represents the current status of the video. Either add or remove 10 seconds from the current position to get our new position. Finally use the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "setPositionAsync")
                  ]),
                  vue$1.createTextVNode(" method to set the new position of the video.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Add this function to the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "onPress")
                  ]),
                  vue$1.createTextVNode(" prop of the skip buttons.")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createTextVNode("<"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "TouchableOpacity"),
                    vue$1.createTextVNode(" onPress={"),
                    vue$1.createVNode("span", { class: "hljs-function" }, "() =>"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "skip"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(")}>\n  "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"replay-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ])
                    ]),
                    vue$1.createTextVNode("\n</"),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "TouchableOpacity"),
                    vue$1.createTextVNode(">\n\n"),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... */"),
                    vue$1.createTextVNode("\n\n"),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPress"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{()"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" skip(true)}>\n  "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"forward-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n")
                  ])
                ]),
                vue$1.createVNode("p", null, "Now we should be able to play or pause the video, and skip the video forward and backwards. There are many other methods we can utilize to add additional controls and functionality but these are the basics."),
                vue$1.createVNode("h2", {
                  id: "creating-the-duration-bar",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#creating-the-duration-bar"
                  }, "Creating the Duration Bar")
                ]),
                vue$1.createVNode("p", null, "The last thing I want to touch on is the duration bar. For this tutorial I am going to use the slider component provided by React Native Elements."),
                vue$1.createVNode("p", null, "Let’s wrap our current controls in a new View and add the slider to the bottom:"),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... */"),
                    vue$1.createTextVNode("\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Icon"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Slider"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react-native-elements'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ...  */"),
                    vue$1.createTextVNode("\n\n"),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n  "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.buttonContainer}"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPress"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{()"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" skip(false)}>\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"replay-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPress"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{togglePlayPause}"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      {playing ? (\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"pause"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n      ) : (\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"play-arrow"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n      )}\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPress"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{()"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" skip(true)}>\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"forward-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n  "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n\n  "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Slider"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "value"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{position}"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "maximumValue"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{duration}"),
                        vue$1.createTextVNode("\n    "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onSlidingComplete"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{handleDoneSliding}"),
                        vue$1.createTextVNode("\n  />")
                      ]),
                      vue$1.createTextVNode("\n"),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode(";\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("If you look closely you can see we have added some variables we need to define: "),
                  vue$1.createVNode("code", { class: "hljs" }, "position"),
                  vue$1.createTextVNode(", "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "duration")
                  ]),
                  vue$1.createTextVNode(", and "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "handleDoneSliding")
                  ]),
                  vue$1.createTextVNode(".")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "Position")
                  ]),
                  vue$1.createTextVNode(" is how we will track the current position of the video. We will use the onStatusUpdate to keep track of this.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "duration")
                  ]),
                  vue$1.createTextVNode(" is the total length of the video.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "handleDoneSliding")
                  ]),
                  vue$1.createTextVNode(" is a function that will set the position of the video after a user slides the thumb of the slider.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("First let’s define "),
                  vue$1.createVNode("code", { class: "hljs" }, "position"),
                  vue$1.createTextVNode(" and "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "duration")
                  ]),
                  vue$1.createTextVNode(" at the top of our component :")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "App"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" [duration, setDuration] = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useState"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" [position, setPosition] = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useState"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-comment" }, "/* ... */"),
                    vue$1.createTextVNode("\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Update the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "handleStatusUpdate")
                  ]),
                  vue$1.createTextVNode(" function to save the duration and the position of the video.")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "handlePlaybackStatusUpdate"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "e"),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "isPlaying"),
                    vue$1.createTextVNode(" && !playing) {\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPlaying"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "true"),
                    vue$1.createTextVNode(");\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (!e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "isPlaying"),
                    vue$1.createTextVNode(" && playing) {\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPlaying"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(");\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "isPlaying"),
                    vue$1.createTextVNode(") {\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPosition"),
                    vue$1.createTextVNode("(e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "positionMillis"),
                    vue$1.createTextVNode(");\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (duration === "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(") {\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setDuration"),
                    vue$1.createTextVNode("(e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "durationMillis"),
                    vue$1.createTextVNode(");\n  }\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Now if the video is playing we set the current position. If the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "duration")
                  ]),
                  vue$1.createTextVNode(" state is equal to 0 we set it to the duration in milliseconds of the video.")
                ]),
                vue$1.createVNode("p", null, "Now if you play the video you should see the slider moving as the video progresses."),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Next let’s define "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "handleDoneSliding")
                  ]),
                  vue$1.createTextVNode(":")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "handleDoneSliding"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "value"),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPosition"),
                    vue$1.createTextVNode("(value);\n\n  videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPositionAsync"),
                    vue$1.createTextVNode("(value);\n}\n")
                  ])
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("As you can see above we have assigned "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "handleDoneSliding")
                  ]),
                  vue$1.createTextVNode(" to the "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-attribute" }, "onSlidingComplete")
                  ]),
                  vue$1.createTextVNode(" prop on the Slider component. This prop passes the current position in milliseconds to the function which saves it to our position state and manually sets the position of the video.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("This is what your "),
                  vue$1.createVNode("code", { class: "hljs" }, [
                    vue$1.createVNode("span", { class: "hljs-module-access" }, [
                      vue$1.createVNode("span", { class: "hljs-module" }, [
                        vue$1.createVNode("span", { class: "hljs-identifier" }, "App"),
                        vue$1.createTextVNode(".")
                      ])
                    ]),
                    vue$1.createTextVNode("js")
                  ]),
                  vue$1.createTextVNode(" file should look like:")
                ]),
                vue$1.createVNode("pre", null, [
                  vue$1.createVNode("code", { class: "hljs language-jsx" }, [
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "React"),
                    vue$1.createTextVNode(", { useRef, useState } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Video"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'expo-av'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "StatusBar"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'expo-status-bar'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" {\n  "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "TouchableOpacity"),
                    vue$1.createTextVNode(",\n  "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "View"),
                    vue$1.createTextVNode(",\n  "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "SafeAreaView"),
                    vue$1.createTextVNode(",\n  "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "StyleSheet"),
                    vue$1.createTextVNode(",\n  "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Dimensions"),
                    vue$1.createTextVNode(",\n} "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react-native'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "import"),
                    vue$1.createTextVNode(" { "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Icon"),
                    vue$1.createTextVNode(", "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Slider"),
                    vue$1.createTextVNode(" } "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "from"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'react-native-elements'"),
                    vue$1.createTextVNode(";\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "export"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "default"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "App"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" [playing, setPlaying] = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useState"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" [duration, setDuration] = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useState"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" [position, setPosition] = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useState"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(");\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" videoRef = "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "useRef"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "null"),
                    vue$1.createTextVNode(");\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "togglePlayPause"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }),
                    vue$1.createTextVNode(") {\n    playing ? videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "pauseAsync"),
                    vue$1.createTextVNode("() : videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "playAsync"),
                    vue$1.createTextVNode("();\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "handlePlaybackStatusUpdate"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "e"),
                    vue$1.createTextVNode(") {\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "isPlaying"),
                    vue$1.createTextVNode(" && !playing) {\n      "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPlaying"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "true"),
                    vue$1.createTextVNode(");\n    }\n\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (!e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "isPlaying"),
                    vue$1.createTextVNode(" && playing) {\n      "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPlaying"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-literal" }, "false"),
                    vue$1.createTextVNode(");\n    }\n\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPosition"),
                    vue$1.createTextVNode("(e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "positionMillis"),
                    vue$1.createTextVNode(");\n\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "if"),
                    vue$1.createTextVNode(" (duration === "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0"),
                    vue$1.createTextVNode(") {\n      "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "console"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "log"),
                    vue$1.createTextVNode("(e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "durationMillis"),
                    vue$1.createTextVNode(");\n      "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setDuration"),
                    vue$1.createTextVNode("(e."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "durationMillis"),
                    vue$1.createTextVNode(");\n    }\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "async"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "skip"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "bool"),
                    vue$1.createTextVNode(") {\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" status = "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "await"),
                    vue$1.createTextVNode(" videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "getStatusAsync"),
                    vue$1.createTextVNode("();\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" tenSeconds = "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "10000"),
                    vue$1.createTextVNode(";\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" curPos = status."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "positionMillis"),
                    vue$1.createTextVNode(";\n    "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPosition"),
                    vue$1.createTextVNode("(newPos);\n    videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPositionAsync"),
                    vue$1.createTextVNode("(newPos);\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "function"),
                    vue$1.createTextVNode(),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "handleDoneSliding"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-params" }, "value"),
                    vue$1.createTextVNode(") {\n    "),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPosition"),
                    vue$1.createTextVNode("(value);\n    "),
                    vue$1.createVNode("span", { class: "hljs-variable language_" }, "console"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "log"),
                    vue$1.createTextVNode("(value);\n    videoRef."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "current"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "setPositionAsync"),
                    vue$1.createTextVNode("(value);\n  }\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "return"),
                    vue$1.createTextVNode(" (\n    "),
                    vue$1.createVNode("span", { class: "language-xml" }, [
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "SafeAreaView"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.container}"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "StatusBar"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"auto"'),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Video"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "ref"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{videoRef}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "source"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{{"),
                        vue$1.createTextVNode("\n            "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "uri:"),
                        vue$1.createTextVNode(" '"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "http:"),
                        vue$1.createTextVNode("//"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "url"),
                        vue$1.createTextVNode("/"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "to"),
                        vue$1.createTextVNode("/"),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "video"),
                        vue$1.createTextVNode("',\n          }}\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "rate"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "volume"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{1.0}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isMuted"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{false}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "resizeMode"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"cover"'),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "shouldPlay"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "isLooping"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.video}"),
                        vue$1.createTextVNode("\n          "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPlaybackStatusUpdate"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{handlePlaybackStatusUpdate}"),
                        vue$1.createTextVNode("\n        />")
                      ]),
                      vue$1.createTextVNode("\n\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n          "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "style"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{styles.buttonContainer}"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n            "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPress"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{()"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" skip(false)}>\n              "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"replay-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n            "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n\n            "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPress"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{togglePlayPause}"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n              {playing ? (\n                "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"pause"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n              ) : (\n                "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"play-arrow"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n              )}\n            "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n\n            "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onPress"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{()"),
                        vue$1.createTextVNode(" =>")
                      ]),
                      vue$1.createTextVNode(" skip(true)}>\n              "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Icon"),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "name"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, '"forward-10"'),
                        vue$1.createTextVNode(),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "size"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{50}"),
                        vue$1.createTextVNode(" />")
                      ]),
                      vue$1.createTextVNode("\n            "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "TouchableOpacity"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n          "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n\n          "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("<"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "Slider"),
                        vue$1.createTextVNode("\n            "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "value"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{position}"),
                        vue$1.createTextVNode("\n            "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "maximumValue"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{duration}"),
                        vue$1.createTextVNode("\n            "),
                        vue$1.createVNode("span", { class: "hljs-attr" }, "onSlidingComplete"),
                        vue$1.createTextVNode("="),
                        vue$1.createVNode("span", { class: "hljs-string" }, "{handleDoneSliding}"),
                        vue$1.createTextVNode("\n          />")
                      ]),
                      vue$1.createTextVNode("\n        "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n      "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "View"),
                        vue$1.createTextVNode(">")
                      ]),
                      vue$1.createTextVNode("\n    "),
                      vue$1.createVNode("span", { class: "hljs-tag" }, [
                        vue$1.createTextVNode("</"),
                        vue$1.createVNode("span", { class: "hljs-name" }, "SafeAreaView"),
                        vue$1.createTextVNode(">")
                      ])
                    ]),
                    vue$1.createTextVNode("\n  );\n}\n\n"),
                    vue$1.createVNode("span", { class: "hljs-keyword" }, "const"),
                    vue$1.createTextVNode(" styles = "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "StyleSheet"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "create"),
                    vue$1.createTextVNode("({\n  "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "container"),
                    vue$1.createTextVNode(": {\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "flex"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "1"),
                    vue$1.createTextVNode(",\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "alignItems"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'center'"),
                    vue$1.createTextVNode(",\n  },\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "video"),
                    vue$1.createTextVNode(": {\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "width"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Dimensions"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "get"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'screen'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "width"),
                    vue$1.createTextVNode(",\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "height"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-title class_" }, "Dimensions"),
                    vue$1.createTextVNode("."),
                    vue$1.createVNode("span", { class: "hljs-title function_" }, "get"),
                    vue$1.createTextVNode("("),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'screen'"),
                    vue$1.createTextVNode(")."),
                    vue$1.createVNode("span", { class: "hljs-property" }, "width"),
                    vue$1.createTextVNode(" * "),
                    vue$1.createVNode("span", { class: "hljs-number" }, "0.5625"),
                    vue$1.createTextVNode(",\n  },\n\n  "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "buttonContainer"),
                    vue$1.createTextVNode(": {\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "flexDirection"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'row'"),
                    vue$1.createTextVNode(",\n    "),
                    vue$1.createVNode("span", { class: "hljs-attr" }, "justifyContent"),
                    vue$1.createTextVNode(": "),
                    vue$1.createVNode("span", { class: "hljs-string" }, "'space-evenly'"),
                    vue$1.createTextVNode(",\n  },\n});\n")
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
                vue$1.createVNode("p", null, "That wraps up this tutorial on custom video controls in React Native. Obviously, this could still use a bit of styling but that should be easy to implement now that we actually have some functional controls. You can utilize other methods provided by expo video to add additional functionality to your controls."),
                vue$1.createVNode("p", null, "Thanks for reading and feel free to follow me on Twitter to stay up to date with my posts!")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/how-to-create-custom-video-controls-in-react-native.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.datePublished = datePublished;
exports.dateUpdated = dateUpdated;
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
