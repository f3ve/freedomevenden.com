---
title: Why Web Developers Should use Windows Subsystem for Linux (WSL)
description: Freedom Evenden breaks down why he believes web developers should use Windows Subsystem for Linux if they're on a Windows Machine.
datePublished: June 18, 2024 10:30:00
meta:
  - name: type
    content: article
---

Recently I did a write up for work that breaks down the reasons our developers should be using Windows Subsystem for Linux (WSL) for Web Development on their Windows machines and I thought this would make a good blog post. This post applies to any developers who work for organizations who've committed to using Windows machines internally. Don't get me wrong I like Windows computers. They're very user friendly and work out of the box. They're just not well suited for a local web development environment unless you're using WSL.

In modern web development, the most popular operating systems are Unix-based. macOS and Ubuntu are among the most commonly used OSs for web development. Both are based on Unix and share many similarities. For example, the Bourne shell, the default shell of Unix Version 7, is the basis for Bash, the default shell in Ubuntu and previously in macOS until recently. macOS now uses Zsh, which is very similar to Bash and is another extended Bourne shell. These similarities mean that Unix-based environments often share common CLI commands, web app configurations, and server setups, making them nearly identical across different environments.

In contrast, Windows has a fundamentally different architecture from Unix-based systems. It uses its own shell, PowerShell, which has few commands in common with Unix shells. Additionally, the folder system in Windows is completely different from Unix systems. It's less common to see Windows being used for web server environments. However, Windows is probably the most popular operating system for personal computers, used by businesses, governments, and private individuals as their daily driver. Consequently, many users are very comfortable with the Windows UI and less familiar with operating in an entirely Unix-based environment.

Enter Windows Subsystem for Linux (WSL). WSL allows you to run a Linux environment on your Windows machine without the overhead of a traditional virtual machine or dual booting. Essentially, you get the best of both worlds: a fully functional Linux CLI environment with all the necessary tools while still working within the Windows environment you're comfortable with.

The main reason I believe developers should work in a Unix-like environment (macOS or Linux) is that most production servers for web applications are Unix-like. This makes it easier for developers to build applications that reflect the actual production environment, reducing unexpected behaviors and speeding up the development pipeline.

Moreover, there is more widespread support for Linux-based development environments. Most online tutorials assume a Unix environment, with most CLI commands using Bash (or at least sh). Additionally, most development tools are designed with Unix environments in mind first, with limited to no support on Windows. While this is starting to change, with more Windows alternatives becoming available, these often lack features and have less community support due to their lower popularity.

Given the prevalence and popularity of Unix-based systems in modern web development, along with the extensive tools and community support available, I highly recommend that web developers conduct their primary development in WSL. For more information on WSL and setup instructions, refer to the [WSL documentation](https://learn.microsoft.com/en-us/windows/wsl/).
