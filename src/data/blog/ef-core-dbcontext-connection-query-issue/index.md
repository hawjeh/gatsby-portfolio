---
category: 'blog'
cover: './ef_core.png'
title: 'EF Core DbContext Connection issue'
description: 'My research - EF Core DbContext Connection / Query Issue'
date: '2021-08-20'
tags: ['EntityFrameworkCore', 'Database', 'C#']
published: true
---

Was working on .NET Core application using Entity Framework Core as ORM to database. The application consists of multiple DbContext, public / authorized RESTful API with JWT token authentication.

The request & response flow as below:

```
Request –> JWT Middleware to grab user object –> Authorization Filter to stop multiple login -> Touch Controller -> Repository -> Execute Query -> Response
```

## Issue and Solution:

```
An exception occurred while **iterating over** the results of a query for context type. The connection is closed
```

Check the through LINQ / Lambda query, make sure that has no second query holds queryable object before current queryable object has execute into a list or released.

```
$One or more errors occurred. (A second operation started on this context before a previous operation completed. This is usually caused by **different threads** using the same instance of DbContext.
```

As we know EF Core does not support multiple parallel operations being run on the same DbContext instance

A few troubleshoots can carry out:

- Reduce frontend API calls by consolidating similar API into a single / fewer endpoints
- Make sure to await all async calls before continuing to use the context instance.
- Register DbContext as transient service
- Using IServiceScopeFactory for each thread

## References

- https://docs.microsoft.com/en-us/ef/core/dbcontext-configuration/#avoiding-dbcontext-threading-issues
- https://stackoverflow.com/questions/58754584/how-to-avoid-dbcontext-threading-issues-caused-by-frequent-httprequests
