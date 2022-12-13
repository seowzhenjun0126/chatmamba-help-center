---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Automating Leads Distribution'
pubDate: 2022-12-06
---

Being able to automatically distribute leads from your ad campaigns to your agents means that:

- The leads are always fresh when it's assigned to your agent.
- You can scale your ad campaigns without having to constantly check for new leads in each of them and assign them manually.

Even better, you can create multiple groups such as **Top Performers**, **New Join**, **Project A Experts** to handle complex scenarios.

## Creating Leads Distribution Groups

To create a Leads Distribution group:

1. Go to [ChatMamba CRM](https://chatmamba.com/crm)
2. Click on **Power-Ups** in the top right corner.
![Some description](/kb/automating-leads-distribution/power-ups-button.png)
3. Click on **Add Power-Ups → Leads Distribution → Add Power Up**
![Some description](/kb/automating-leads-distribution/leads-distribution-power-up.png)
4. Here, you can create as many groups as you need. Each group consists of a list of agents that will receive leads according to the specified distribution method (in this case, the [Round Robin](https://en.wikipedia.org/wiki/Round-robin_scheduling) method, where each agent takes a turn to receive the lead in the order of arrangement).
![Some description](/kb/automating-leads-distribution/lead-distribution-group-basics.png)
5. **Save Settings** after you have finished setting up the groups.

## Using Leads Distribution Groups

After creating the distribution groups, you can start using them to automate your flow. You can use it when you:

1. Key in data to the system
2. Import data to the system
3. Assign leads in bulk
![Some description](/kb/automating-leads-distribution/bulk-assign-lead-to-distribution-group.png)
4. Link Lead Extraction Linked Form to the system
![Some description](/kb/automating-leads-distribution/lead-extraction-to-distribution-group.png)

## Updating Leads Distribution Groups

You can update the receivers in a distribution group in the same way you create a group, without updating the setting where you use the group.

## Advanced Use Case

Sometimes, a simple Round Robin distribution method may not be able to satisfy your business needs. While we continuously improve our system, here are some of the use cases that may fit into your scenarios.

### Distributing Leads in Ratio

Very often, you want one agent to receive more leads than the others in a distribution group. While we don't support giving each agent a weightage yet, you can achieve the same result by adding the agent more than once (in the ratio you want) to the group.

For example, we have John, Mary, and Louis in the group, and you want for every lead that John and Mary receive, Louis will receive three (ratio of 1 : 1 : 3).

In this case, you can add Louis into the group 3 times (in any order arrangement as you like) to achieve the result.
![Some description](/kb/automating-leads-distribution/distributing-leads-with-ratio.png)

### Distributing a Lead to Multiple Agent At Once

In some scenarios, you want a lead to be distributed to multiple agents simultaneously. One typical usage is to minimize the possibility of the agent missing out on the lead (and not making the call promptly). To do that:

1. Change the Distribution Method of the group to **Round Robin (Multiple receivers)**.
2. Click **Add Receivers Group**
3. Instead of distributing a lead to an agent, you distribute it to a group of agents. You can select the agents by clicking **Add Member**.
4. You can also choose whether to notify the agent (or not). If you choose not to notify the agent, no Telegram / Email notification will be sent. However, the agent will still be able to see the lead in the CRM.
![Some description](/kb/automating-leads-distribution/dsitribute-leads-to-multiple-agents-at-once.png)

### Distributing Leads to yourself

Even if you are looking to distribute the leads from your ads only to yourself, you will still have to create a lead distribution group. The only difference is that you only have to add yourself to the group.
