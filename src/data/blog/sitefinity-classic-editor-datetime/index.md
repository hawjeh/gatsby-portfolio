---
category: 'blog'
cover: './sitefinity-logo.jpg'
title: 'Sitefinity Classic Editor DateTime format'
description: 'Sitefinity – My experience with using custom date time format in classic editor'
date: '2021-03-20'
tags: ['.NET', 'CMS', 'Sitefinity']
published: true
---

## Issues

- Content Edit Page – Show mm/dd/yyyy

![screen1](./screen1.png)

- Content Listing Page – Show unknown (AM / PM) time

![screen2](./screen2.png)

## What I did to resolve it?

1. Add a new ViewMap Control
```
Advanced Settings → Controls → ViewMap → <Create new>
HostType: Telerik.Sitefinity.Web.UI.Fields.DateField, Telerik.Sitefinity
Layout: ~/Utils/Extensions/DateFieldExtended.ascx
```

Sample: https://gist.github.com/hawjeh/897467cf33ef6199a68c48641004c5f7

2. Update Content Type Listing DateTime Format

```
Advanced Setting → DynamicModules → Controls → <Custom Module Backend Definition> 

→ Views → <Module Backend List> → View Modes → Grid → Columns → <Field> → Client Template →

<span>{{ (Start) ? Start.sitefinityLocaleFormat(‘dd/MM/yyyy hh:mm tt’): ‘-‘ }}</span>

```

3. Do for LastModified, DateCreated fields too.

## Resolved Screen

- Content Edit Screen

![screen3](./screen3.png)

- Content Listing Screen

![screen4](./screen4.png)

## References

- https://community.progress.com/s/article/How-to-change-the-time-format-of-the-date-field-when-creating-Events-in-Sitefinity
- https://community.progress.com/s/article/after-upgrade-datepickers-are-not-working