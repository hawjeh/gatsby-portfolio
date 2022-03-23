---
category: 'blog'
cover: './sitefinity-logo.jpg'
title: 'Sitefinity Table Structure'
description: 'Sitefinity – Some tables linking and short description'
date: '2022-01-20'
tags: ['.NET', 'CMS', 'Sitefinity']
published: true
---

## Configuration in database

- dbo.sf_xml_config_items

## Dynamic Modules / Content Type

- <module_name>_<content_type>

- sf_mb_dynamic_module

- sf_dynamic_content

## Images of dynamic content

- <module_name>_<content_type> base_id - sf_dynamic_content base_id (system_parent_type)

- sf_dynamic_content url_name_ + original_content_id - sf_media_content url_name_ + original_content_id

- sf_media_content content_id - sf_media_file_links content_id

- sf_media_file_links file_id - sf_chunks file_id

## Images / Documents / Files / Videos

- sf_libraries content_id - sf_media_content parent_id

- sf_media_content content_id - sf_media_file_links content_id

- sf_media_file_links file_id - sf_chunks file_id

## Schedule Tasks

- sf_scheduled_tasks

## User & User Profile

- sf_users id - sf_user_profile user_id

- sf_user_profile id - sf_sitefinity_profile id

##User & Roles & Permission

- sf_users id - sf_user_link user_id

- sf_user_link role_id - sf_roles id

- sf_roles id - sf_permissions principal_id

## example: Permission on Page

- sf_permissions object_id - sf_permissions child_object_id (recursive)

- sf_permissions object_id - sf_page_data page_node_id

 


## Clean orphaned record from sf_chunks

- https://knowledgebase.progress.com/articles/Article/remove-orphaned-entries-from-sf-chunks-table-in-Sitefinity-database