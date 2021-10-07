---
category: 'blog'
cover: './package.png'
title: 'My Packaging Tool – Electron App'
description: My mini project - Packaging tool using electron'
date: '2021-07-20'
tags: ['Desktop App', 'ElectronJS', 'JQuery']
published: true
---

## Purpose of the app

- Quickly pull delta files based on git commit and fetch to destination folder

## Pre-requisite

- Git is installed and added to variable path
- Proper git branching mechanism
- No rubbish in Git repository

## How it works?

1. Run the application

2. Select
    - Destination Folder: Destination for all delta files
    - Repository Folder: Source folder of the git repository

3. Git Branches will auto populate to the dropdown selection when Repository Folder is selected.

![screen1](./screen1.png)

![screen2](./screen2.png)

4. Click Check Out and it will populate the list of Git Commit from current branch.

![screen3](./screen3.png)

![screen4](./screen4.png)

5. Click Generate button and it will fetch the delta files to Destination Folder.

6. The app also saved what you have selected. The next time you open the app, it will present your last selection.


## Repository / Exe to download

- https://github.com/hawjeh/PackagingTool
- https://drive.google.com/file/d/1cq26fkmkUsXSVqMqIWoiP0TlY3ZbnaJy/view

## References

- https://www.electronjs.org/
- https://redstapler.co/simple-cpu-monitor-app-electron-tutorial-2020/
- https://www.npmjs.com/package/electron-store