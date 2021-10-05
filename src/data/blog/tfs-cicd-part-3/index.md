---
category: 'blog'
cover: './cicd.png'
title: 'Sitefinity - TFS CICD – Part 3'
description: 'My TFS CICD setup for Sitefinity Project – Part 3'
date: '2020-07-22'
tags: ['Sitefinity', 'DevOps', 'Hosting']
published: true
---

## Important Notes
- Planning before execution
- Clearly understand each command / argument
- Must confirm input path are correct (no turn back if CD server erase all files)

## Strategy
![Strategy](./strategy.png)

1/ Developer push code to TFS and it will send signal to CI server if it is a watching branch (in our case the branch is develop-int).

2/ CI server will carry on tasks, continue every next task when current task has no error. Finally, it will publish an artifact that is ready for CD server.

3/ CI server will trigger CD to start working and finally deploy the published artifacts if everything go smooth.

## Create a Deployment Group

1/ Create a Deployment Group

![Step1](./step1.png)

2/ Run script at deploy server

![Step2](./step2.png)

## My CD Pipeline Setting

1/ Create a new release template with “IIS Website and SQL Database Deployment”

![Setting1](./setting1.png)

2/ Add an artifact
– Source Type: Build
– Default version: Latest from specific branch

![Setting2](./setting2.png)

3/ Add a trigger for artifact
– Enable: true
– Build branch: master

![Setting3](./setting3.png)

4/ Add a trigger for environment
– Artifact filters: Enable
– Add: Sitefinity Demo, master branch

![Setting4](./setting4.png)

5/ Edit Deployment Group phase
– Select Deployment Group

![Setting5](./setting5.png)

6/ Update IIS Web App Manage
– Configuration Type: IIS Website
– Action: Create Or Update
– Website name: SitefinityDemo
– Add Binding: port:80
– Physical Path: %SystemDrive%\inetpub\wwwroot\SitefinityDemo
– … (have proper Website setting)

![Setting6](./setting6.png)

7/ Edit IIS Web App Deploy
– Select Package or Folder: $(System.DefaultWorkingDirectory)/Sitefinity Demo/drop
– Remove Additional Files at Destination: true
– Take App Offline: true

![Setting7](./setting7.png)

8/ Add a inline PowerShell Script
– Arguments: 'IIS_IUSRS' '$env:SystemDrive\inetpub\wwwroot\SitefinityDemo'
– Inline Script:

![Setting8-1](./setting8-1.png)
![Setting8-2](./setting8-2.png)

9/ And you are done!

![Setting9](./setting9.png)