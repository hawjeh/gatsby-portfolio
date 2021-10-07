---
category: 'blog'
cover: './sitefinity-logo.jpg'
title: 'Sitefinity Custom Page Title'
description: 'Sitefinity – My custom page title using code for webform and mvc'
date: '2021-02-20'
tags: ['.NET', 'CMS', 'Sitefinity']
published: true
---

## What we want to achieve?

– To modify the Page Title to "ABC Inc | <Page_Title>" on the fly

## How to achieve in Webform Template?

1. Make sure the HTML Template has included the <[title]> tag
2. Add an HTML id to the <[title]> tag
3. Webform Template:

Add the title tag with id attribute:

```
<html>
    <head runat="server">
        <title id="page_title"></title>
    </head>
    <body runat="server">
        <p>Lorem Ipsum</p>
    </body>
</html>
```
<br><br>

Update page title at Page_Load override method:

```
protected void Page_Load(object sender, EventArgs e)
{
    var man = PageManager.GetManager();
 
    if (SiteMapBase.GetActualCurrentNode() != null)
    {
        try
        {
            var getCurrentPage = SiteMapBase.GetActualCurrentNode().Id;
            if (getCurrentPage != Guid.Empty)
            {
                page_title.Text = page.Title != null ? string.Format("ABC Inc | {0}", page.Title.ToString()) : "ABC Inc | Apple Balloon Crazy";
            }
        }
        catch (Exception ex)
        {
            Log.Write("Template ERROR. " + ex.Message + " " + ex.StackTrace);
            page_title.Text = "ABC Inc | Apple Balloon Crazy";
        }
    }
}

```
<br><br>

4. MVC Widget Virtual Page:
We have some pages are “virtual” page, not the physical page setup in Sitefinity.
Therefore, we need to update the code itself at .cshtml

```
@{
    var page = (Page)HttpContext.Current.Handler;
    ((System.Web.UI.HtmlControls.HtmlTitle)page.Header.FindControl("page_title")).Text = <your_page_title> != null ? string.Format("ABC Inc | {0}", <your_page_title>) : string.Format("{0}", page.Title);
}
```

## References
- https://www.progress.com/documentation/sitefinity-cms/for-developers-modify-pages