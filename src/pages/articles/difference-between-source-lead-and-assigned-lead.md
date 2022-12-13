---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Difference Between Source Lead And Assigned lead'
pubDate: 2022-12-06
---

>[!tip]
> In short, **Assigned Lead** is a copy of **Source Lead** when assigned to someone. This way, a **Source Lead** can be assigned to multiple members without affecting each other's progress.

One of the most important concept to understand when using ChatMamba CRM is the difference between Source Lead and Assigned Lead. Understanding why we design it this way can help you to make the most out of the system.

## Source Leads

When you add a lead (or multiple leads) to ChatMamba CRM, either manually through the Dashboard or automatically through Integrations, each lead becomes a **Source Lead**.

![Some description](/kb/difference-between-source-lead-and-assigned-lead/source-leads.png)

## Assigned Leads

When you assign a Source Lead (or multiple Source Leads) to another member, either manually through the Dashboard or automatically through Leads Distribution Power-Up, ChatMamba creates a copy of the Source Lead, and assign that copy (now known as **Assigned Lead**) to the member.

![Some description](/kb/difference-between-source-lead-and-assigned-lead/assigned-leads.png)

Now, when the member updates his lead, **only the Assigned Lead is changed**. The Source Lead is not changed.

## Reasoning Behind

In reality, the following scenario often occurs:

You assign a lead to your member, David, who proceeds to follow up the lead but with no success. This could be caused by several reasons, maybe the lead is in a rush when he calls, or maybe his sales pitch doesn't spark interest in the lead.

Therefore, you decide to give the lead a try again. This time, you assign the lead to Mary, who manage to make an appointment with the lead.

To account for this use case, ChatMamba CRM allows you to **assign a Source Lead multiple times to different members**. Since a copy of Source Lead is assigned everytime, each member will not see each other's update. This ensure privacy of lead within each member.

![Some description](/kb/difference-between-source-lead-and-assigned-lead/example.png)
