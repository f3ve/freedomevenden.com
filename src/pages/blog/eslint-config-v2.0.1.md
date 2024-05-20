---
title: ESLint Config v2.0.1
description: Freedom Evenden shares info about the latest update to ESLint config.
datePublished: May 20, 2024 10:30 AM
meta:
  - name: type
    content: article
---

## Overview

All minor changes, mainly just dependency updates and internal changes. Dropped define-eslint-config and instead using type definitions from ESlint itself. Removed older typescript-eslint/parser and typescript-eslint/eslint-plugin packages and switch to typescript-eslint version 8 alpha because it has support for ESLint 9. As always if you run into issues while using this package please [open an issue](https://github.com/f3ve/eslint-config/issues).

## Changes

1. Removed @typescript-eslint/eslint-plugin and @typescript-eslint/parser.
2. Installed typescript-eslint@8.0.0-alpha.14.
3. Removed define-eslint-config and switched to using the type definitions from eslint for flat configs.
