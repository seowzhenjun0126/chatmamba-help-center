---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Adding Time Bomb to your leads'
pubDate: 2022-12-06
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
category: 'crm'
---

You may optionally add an expiry time to the leads you assigned to your member, and if no updates are made in the system before the expiry time, the lead is automatically passed to the next member. It is helpful to encourage your member to follow up on the newly assigned lead as soon as possible.

## Configuring Time Bomb Settings

You may not want every lead you assign to have a Time Bomb. In this case, you can change the Time Bomb settings to fit your need. To do that:

1. Go to your [CRM system](https://chatmamba.com/crm)
2. Select **Power-Ups → Time Bomb**

### Expiry Time

You can change the expiry time set to each lead you assigned. You can also choose to exclude non-business hours so that the time Time Bomb will not continue to count down after the business hours set by your organization.

![Some description](/public/kb/adding-time-bomb-to-your-leads/expiry-time.png)

### Trigger

When conditions in the trigger are met, Time Bomb will be created.

![Some description](/public/kb/adding-time-bomb-to-your-leads/trigger.png)

You can choose to add Time Bomb to leads that are added by you through the website, or those that are added behind the scene (e.g. through Lead Extraction).

You can also choose to apply Time Bomb to 1 of the following:

- **Anyone**
- **Custom List** - A list of members in your organization
- **Distribution Group** - A list of Leads Distribution Group

### Default Receiver List

If a lead is assigned to a member through a Lead Distribution Group, then when the Time Bomb expires, the lead will be passed to the next receiver in the same group.

However, if a lead is assigned directly to a member, then when the Time Bomb expires, the lead will be passed to the **Default Receiver List** in the Time Bomb settings. You can add multiple members to this list to act as the default receiver.
