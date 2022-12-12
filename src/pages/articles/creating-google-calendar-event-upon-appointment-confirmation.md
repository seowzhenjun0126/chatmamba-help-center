---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Creating Google Calendar Event Upon Appointment Confirmation'
pubDate: 2022-12-06
description: 'This is the first post of my new Astro blog.'
author: 'Astro Learner'
category: 'crm'
---

>[!info]
> To use this feature, make sure that your Team has enabled it in **Automations**

There are 2 ways to create a Google Calendar event with your customer :

- By system auto trigger when **Status** of your lead changes to a pre-defined option
- By manually creating one through lead's context menu

Both ways will be explained below :

## System Auto Trigger

When your Team enables this **Automation**, they will need to choose a triggering option (see photo below for example).

![Some description](/public/kb/creating-google-calendar-event-upon-appointment-confirmation/automation-trigger.PNG)

Following the example above, whenever your lead's **Status** is changed to **Made Appointment**, the pop-up to create a Calendar event will be shown.

![Some description](/public/kb/creating-google-calendar-event-upon-appointment-confirmation/lead-status.PNG)

## Manual Create

You can also create an event manually by clicking on the lead's context menu -> Calendar Event.

![Some description](/public/kb/creating-google-calendar-event-upon-appointment-confirmation/lead-context-menu.PNG)

## Granting Necessary Permissions

Once the pop-up is shown, you will be asked to grant ChatMamba permission to manage your Google Calendar Events.

![Some description](/public/kb/creating-google-calendar-event-upon-appointment-confirmation/authorize-calendar.PNG)

Click on **Sign in to Google Calendar** and follow the instruction on the screen to complete the authorization.

## Creating Google Calendar Event

To create a Google Calendar Event, fill up the fields. Photo below shows where each field is mapped to in Google Calendar.

Note that the appointment time will be the same as the one in your lead's data

![Some description](/public/kb/creating-google-calendar-event-upon-appointment-confirmation/calendar-data-map.png)

Once you have confirmed the details, click on Create Calendar Event.

>[!tip]
> To keep data in sync, we recommend you to manage all ChatMamba created Calendar Event inside ChatMamba. Changes that you made directly in Google Calendar will not be reflected inside ChatMamba.

## Updating Google Calendar Event

In case you need to change the appointment time, you can open the created event through lead's context menu and edit the details. The changes will be reflected to the created Google Calendar Event.

## Deleting Google Calendar Event

To remove a created event, you can open the created event through lead's context menu and click on Delete Event (see photo below). The correspoding Google Calendar Event will be removed.

![Some description](/public/kb/creating-google-calendar-event-upon-appointment-confirmation/deleting-event.PNG)
