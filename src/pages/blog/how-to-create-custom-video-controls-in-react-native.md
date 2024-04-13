---
title: How to Create Custom Video Controls in React Native
description: In this post I walk you through how to create custom controls for videos in React Native.
datePublished: December 18, 2020 12:00
dateUpdated: September 17, 2023 12:00
meta:
  - name: keywords
    content: how to create custom video controls,react native,react,video controls
  - name: type
    content: article
---

## Table of contents

[[toc]]

Videos are an extremely common way for users to consume information. On average there are 1 million video views per day on YouTube, and everyone has a Netflix subscription.

Video controls have a huge impact on the viewing experience. They can make or break an app so it's important to get it right. You can't just rely on the native controls because it might not fit the theme of your app and you can't guarantee that the user experience is uniform between devices. The only option is to create your own and I will show you how to do just that.

## Requirements

You should be familiar with JavaScript and have some basic knowledge of React and React Native. I am going to be using Expo to initialize the app and I'll be using their [Video](https://docs.expo.io/versions/latest/sdk/video/) component. I am running this code on my iOS device using the Expo app. The same general principles should apply if you want to use a base React Native build with React Native Video. Of course the methods will probably be a bit different so be sure to read up on their documentation.

## Setting Up

To begin let's create a new app with the `expo-cli`:

`expo init custom-video-controls`

Select Bare from the JavaScript managed workflow.

Once the app is created, navigate into the base directory and install expo-av and React Native Elements.

`expo install expo-av react-native-elements`

Expo AV is a package provided by Expo that gives us access to their Video and Audio components. React Native Elements is a component library that will allow us to easily create some customizable controls.

Once that finishes installing open App.js and the code with this:

```jsx
import React from 'react';

import { Video } from 'expo-av';

import { StatusBar } from 'expo-status-bar';

import { View, SafeAreaView, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Video
          source={{
            uri: 'http://url/to/video',
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },

  video: {
    width: Dimensions.get('screen').width,

    height: Dimensions.get('screen').width * 0.5625,
  },
});
```

Now that we have the initial set up we can start adding the custom controls. To do that we are going to import Icon from React Native Elements:

```jsx
/* ... other imports*/

import { Icon } from 'react-native-elements';

/* ... component*/
```

We are going to create a new view just below the video element that will contain all of our controls. Inside of that we will add a play/pause button, a skip forward button and a skip backward button.

```jsx
<View>
  <Video
    source={{
      uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    }}
    rate={1.0}
    volume={1.0}
    isMuted={false}
    resizeMode="cover"
    shouldPlay
    isLooping
    style={styles.video}
  />

  <View style={styles.buttonContainer}>
    // the replay button
    <TouchableOpacity>
      <Icon name="replay-10" size={50} />
    </TouchableOpacity>
    // play/pause button
    <TouchableOpacity>
      <Icon name="pause" size={50} />
    </TouchableOpacity>
    // skip forward
    <TouchableOpacity>
      <Icon name="forward-10" size={50} />
    </TouchableOpacity>
  </View>
</View>;

const styles = StyleSheet.create({
  /* ... other styles ... */

  buttonContainer: {
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },
});
```

Now we have some touchable buttons. Lets go through each one.

## Playing and Pausing

In React Native we cannot use the Document Object to target specific elements on the screen. Instead we have to use a React hook called useRef. First let's import it into the file.

`import React, { useRef } from'react';`

Then we need to define the ref.

```js
export default function App() {
  const videoRef = useRef(null);

  return (
    /* ... */

    <Video
      ref={videoRef}
      source={{
        uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={styles.video}
    />

    /* ... */
  );
}
```

Now we can use the videoRef variable to refer to the video element. This will allow us to utilize all of the methods specified in the [Video](https://docs.expo.io/versions/latest/sdk/video/) docs.

Now let's create a function that will toggle play and pause:

```js
function togglePlayPause() {
  videoRef.current.pauseAsync();
}
```

And let's add this to the onPress prop of the play/pause button:

```jsx
<TouchableOpacity onPress={togglePlayPause}>
  <Icon name="pause" size={50} />
</TouchableOpacity>
```

Now when you press the button the video should pause. But we can't play the video so let's add some logic to toggle between play and pause.

First we need to create some state to track if the video is playing or not. Let's import the useState hook from react.

`import React, {useRef, useState} from'react';`

Next add playing state to the top of our component and have it default to false. This is good to do in case something prevents the video from playing automatically; we won't have any UI bugs or inconsistencies on the screen.

```jsx
export default function App() {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);

  /* ... */
}
```

Now we're going to use a prop on the Video component called onPlaybackStatusUpdate that gets called regularly and will give us the playback status of the video. This is will allow us to see if the video is playing, if it has ended, and what our current position in the video is. For now we will just check if it is playing.

Let's create a function for handling the status update.

```js
function handlePlayBackStatusUpdate(e) {
  if (e.isPlaying && !playing) {
    setPlaying(true);
  }

  if (!e.isPlaying && playing) {
    setPlaying(false);
  }
}
```

`handlePlayBackStatusUpdate` receives an object that represents the current status of the video. We check if it's playing and if the playing state is false. If both of these return true we set playing to true. Next we check if the video is not playing and if playing is true. If both return true we set playing to false. The reason we check both `e.isPlaying` and `playing` is to avoid unnecessary calls to update playing. If the video is not playing and playing is already false there is no reason to call `setPlaying(false)`.

Now let's add this function to the `onPlaybackStatusUpdate` prop of the Video element.

```jsx
<Video
  ref={videoRef}
  source={{
    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  }}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay
  isLooping
  style={styles.video}
  onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
/>
```

Then expand the `togglePlayPause` function to pause the video if it's playing or play it if it's paused.

```jsx
function togglePlayPause() {
  playing ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
}
```

Finally conditionally render a pause icon if the video is playing or a play icon if the video is paused.

```jsx
<TouchableOpacity onPress={togglePlayPause}>
  {playing ? (
    <Icon name="pause" size={50} />
  ) : (
    <Icon name="play-arrow" size={50} />
  )}
</TouchableOpacity>
```

Now you should be able to toggle between play and pause by pressing the button!

## Skipping Forward and Backward

Next create a function that will skip forward and backward.

```jsx
async function skip(bool) {
  const status = await videoRef.current.getStatusAsync();

  const curPos = status.positionMillis;

  const tenSeconds = 10000;

  const newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;

  videoRef.current.setPositionAsync(newPos);
}
```

`getStatusAsync` returns an object that represents the current status of the video. Either add or remove 10 seconds from the current position to get our new position. Finally use the `setPositionAsync` method to set the new position of the video.

Add this function to the `onPress` prop of the skip buttons.

```jsx
<TouchableOpacity onPress={() => skip(false)}>
  <Icon name="replay-10" size={50} />
</TouchableOpacity>

/* ... */

<TouchableOpacity onPress={() => skip(true)}>
  <Icon name="forward-10" size={50} />
</TouchableOpacity>
```

Now we should be able to play or pause the video, and skip the video forward and backwards. There are many other methods we can utilize to add additional controls and functionality but these are the basics.

## Creating the Duration Bar

The last thing I want to touch on is the duration bar. For this tutorial I am going to use the slider component provided by React Native Elements.

Let's wrap our current controls in a new View and add the slider to the bottom:

```jsx
/* ... */

import { Icon, Slider } from 'react-native-elements';

/* ...  */

<View>
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={() => skip(false)}>
      <Icon name="replay-10" size={50} />
    </TouchableOpacity>

    <TouchableOpacity onPress={togglePlayPause}>
      {playing ? (
        <Icon name="pause" size={50} />
      ) : (
        <Icon name="play-arrow" size={50} />
      )}
    </TouchableOpacity>

    <TouchableOpacity onPress={() => skip(true)}>
      <Icon name="forward-10" size={50} />
    </TouchableOpacity>
  </View>

  <Slider
    value={position}
    maximumValue={duration}
    onSlidingComplete={handleDoneSliding}
  />
</View>;
```

If you look closely you can see we have added some variables we need to define: `position`, `duration`, and `handleDoneSliding`.

`Position` is how we will track the current position of the video. We will use the onStatusUpdate to keep track of this.

`duration` is the total length of the video.

`handleDoneSliding` is a function that will set the position of the video after a user slides the thumb of the slider.

First let's define `position` and `duration` at the top of our component :

```jsx
export default function App() {
  const [duration, setDuration] = useState(0);

  const [position, setPosition] = useState(0);

  /* ... */
}
```

Update the `handleStatusUpdate` function to save the duration and the position of the video.

```jsx
function handlePlaybackStatusUpdate(e) {
  if (e.isPlaying && !playing) {
    setPlaying(true);
  }

  if (!e.isPlaying && playing) {
    setPlaying(false);
  }

  if (e.isPlaying) {
    setPosition(e.positionMillis);
  }

  if (duration === 0) {
    setDuration(e.durationMillis);
  }
}
```

Now if the video is playing we set the current position. If the `duration` state is equal to 0 we set it to the duration in milliseconds of the video.

Now if you play the video you should see the slider moving as the video progresses.

Next let's define `handleDoneSliding`:

```jsx
function handleDoneSliding(value) {
  setPosition(value);

  videoRef.current.setPositionAsync(value);
}
```

As you can see above we have assigned `handleDoneSliding` to the `onSlidingComplete` prop on the Slider component. This prop passes the current position in milliseconds to the function which saves it to our position state and manually sets the position of the video.

This is what your `App.js` file should look like:

```jsx
import React, { useRef, useState } from 'react';

import { Video } from 'expo-av';

import { StatusBar } from 'expo-status-bar';

import {
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { Icon, Slider } from 'react-native-elements';

export default function App() {
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const videoRef = useRef(null);

  function togglePlayPause() {
    playing ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
  }

  function handlePlaybackStatusUpdate(e) {
    if (e.isPlaying && !playing) {
      setPlaying(true);
    }

    if (!e.isPlaying && playing) {
      setPlaying(false);
    }

    setPosition(e.positionMillis);

    if (duration === 0) {
      console.log(e.durationMillis);
      setDuration(e.durationMillis);
    }
  }

  async function skip(bool) {
    const status = await videoRef.current.getStatusAsync();
    const tenSeconds = 10000;
    const curPos = status.positionMillis;
    const newPos = bool ? curPos + tenSeconds : curPos - tenSeconds;
    setPosition(newPos);
    videoRef.current.setPositionAsync(newPos);
  }

  function handleDoneSliding(value) {
    setPosition(value);
    console.log(value);
    videoRef.current.setPositionAsync(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <View>
        <Video
          ref={videoRef}
          source={{
            uri: 'http://url/to/video',
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
        />

        <View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => skip(false)}>
              <Icon name="replay-10" size={50} />
            </TouchableOpacity>

            <TouchableOpacity onPress={togglePlayPause}>
              {playing ? (
                <Icon name="pause" size={50} />
              ) : (
                <Icon name="play-arrow" size={50} />
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => skip(true)}>
              <Icon name="forward-10" size={50} />
            </TouchableOpacity>
          </View>

          <Slider
            value={position}
            maximumValue={duration}
            onSlidingComplete={handleDoneSliding}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  video: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').width * 0.5625,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
```

## Conclusion

That wraps up this tutorial on custom video controls in React Native. Obviously, this could still use a bit of styling but that should be easy to implement now that we actually have some functional controls. You can utilize other methods provided by expo video to add additional functionality to your controls.

Thanks for reading and feel free to follow me on Twitter to stay up to date with my posts!
