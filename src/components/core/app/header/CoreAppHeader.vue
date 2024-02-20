<template>
  <header
    v-motion="{
      initial: {
        opacity: 0,
        y: -25,
      },
      enter: {
        y: 0,
        opacity: 1,
        transition: {
          type: 'keyframes',
          delay: 0,
          duration: 300,
        },
      },
    }"
    class="sticky top-0 z-1000 m-a w-full flex items-center justify-between px-6 py-4 fe-border-b bg-base"
  >
    <div class="flex items-center">
      <core-btn to="/" noBg>
        <img
          src="/android-chrome-192x192.png"
          style="width: 40px"
          alt="Freedom Evenden's website logo"
        />
      </core-btn>
      <core-nav-buttons className="hidden sm:flex" />
    </div>

    <address class="hidden items-center sm:flex">
      <core-btn
        rel="noopener"
        href="https://twitter.com/f3ve_"
        icon="i-ri-twitter-x-fill"
        target="_blank"
        title="twitter"
      />
      <core-btn
        rel="noopener"
        href="https://mastodon.social/@f3ve"
        icon="i-mdi-mastodon"
        target="_blank"
        title="Mastodon"
      />
      <core-btn
        icon="i-mdi-github"
        href="https://github.com/f3ve"
        target="_blank"
        rel="noopener"
        title="GitHub"
      />
    </address>

    <core-nav-menu class="sm:hidden" />
  </header>
</template>
