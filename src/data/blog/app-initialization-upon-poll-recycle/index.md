---
category: 'blog'
cover: './image-4.png'
title: 'App Initialization upon Poll Recycle'
description: 'Windows IIS App Initialization upon Poll Recycle'
date: '2020-05-20'
tags: ['Windows', 'Hosting', 'IIS', 'Web']
published: true
---

## What we want to achieve?

To spin up application (initialize) earlier than first visitor

## App Pool pre-setup

**Advanced Setting**
- Start Mode: AlwaysRunning
- Idle Time-out (minutes): 0

![advancedsetting](./image-1.png)

**Recycling Setting**
- Fixed Interval: (To set at odd timing)

![recycleSetting](./image-2.png)

## Website pre-setup

**Advanced Setting**
- Preload Enabled: True

![advancedsetting2](./image-3.png)

## Step to configure Application Initialization

1/ Make sure IIS Feature **Application Initialization** is installed in the machine

![appsetting](./image-4.png)

2/ Go to your Web site in IIS > Management > Configuration Editor

![iis](./image-5.png)

3/ Navigate to section: **system.webServer/applicationInitialization** and do setting below
- (Collection): add a new record
- hostName: Site URL (demo.local)
- initializationPage: Path to a page (/home)
- doAppInitAfterRestart: True
- remapManagedREquestsTo to a static HTML (Optional)