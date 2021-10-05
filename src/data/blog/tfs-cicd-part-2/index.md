---
category: 'blog'
cover: './cicd.png'
title: 'Sitefinity - TFS CICD – Part 2'
description: 'My TFS CICD setup for Sitefinity Project – Part 2'
date: '2020-07-21'
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

## My CI Pipeline Setting

Here we only make use of Tasks, Variables and Triggers.
We also skip VS Test as the sample is a dummy site.

1/ Select repository and branch

![Step1](./step1.png)

2/ Select ASP.NET template and apply

![Step2](./step2.png)

3/ Select Agent Queue, path to solution

![Step3](./step3.png)

4/ Navigate Get source, set
– Clean: true
– Clean Option: All build directories

![Step4](./step4.png)

5/ Update Use Nuget x.x.x, set
– Version: >=4.0.0-0 (can be other version)
– Run this task: Only when all previous tasks have succeeded

![Step5](./step5.png)

6/ Update NuGet restore, set
– Feeds in my NuGet.config
– Path to Nuget: Nuget.config (that in project root)
– Run this task: Only when all previous tasks have succeeded

![Step6](./step6.png)

7/ Update Build solution
– MSBuild Arguments:
– /p:DeployOnBuild=true
– /p:PublishProfile=WsPublishProfile.pubxml
– /p:SkipInvalidConfigurations=true
– /p:AutoParameterizationWebConfigConnectionStrings=False
– /p:VisualStudioVersion=15.0
– Clean: true
– Run this task: Only when all previous tasks have succeeded

![Step7](./step7.png)

8/ Disable Test Assemblies and Publish Symbols for future

9/ Create Copy File
– Source Folder: DemoServer
– Contents: *.config
– Target Folder: .\Publish\App_Data\Sitefinity\Configuration\
– Overwrite: true
– Run this task: Only when all previous tasks have succeeded

![Step9](./step9.png)

10/ Clone a copy file
– Source Folder: DemoServer
– Contents: Sitefinity.lic
– Target Folder: .\Publish\App_Data\Sitefinity\
– Overwrite: true
– Run this task: Only when all previous tasks have succeeded

![Step10](./step10.png)

11/ Update Publish Build Artifacts
– Path to public: .\Publish
– Run this task: Only when all previous tasks have succeeded

![Step11](./step11.png)

12/ Save and queue for a build. Finally see build succeeded!

![Step12](./step12.png)