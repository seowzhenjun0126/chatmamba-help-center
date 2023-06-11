---
layout: ../../../layouts/MarkdownPostLayout.astro
title: 'Setting Up ChatMamba Lead Extraction'
pubDate: 2022-12-06
---

>[!note]
> See here if you need help [linking your Facebook Page](https://help.chatmamba.com/en/article/linking-facebook-page-to-chatmamba) to ChatMamba.

## Select Facebook Leadgen Form

>[!tip]
> If you do not have any Leadgen Form, follow this [guide](https://www.facebook.com/business/help/397336587121938?id=735435806665862) from Facebook to create one.

1. Select the page that you've connected to enter edit mode.
2. Click on Create Linked Form.
3. Select a Leadgen Form you would like to extract from. Note that each Facebook Leadgen form can only be linked to ChatMamba once.

## Select apps

Select the apps you wish to connect to. Currently, you can connect your Facebook Leadgen Form to:

- [Email](#connect-to-email) - Get an email notification whenever you receive a lead
- [Telegram](#connect-to-telegram) - Get a Telegram notification whenever you receive a lead
- [Spreadsheet](#connect-to-google-spreadsheet) - Add lead data to your Google Spreadsheet whenever you receive a lead
- [CRM](#connect-to-chatmamba-crm) - Add lead data to ChatMamba CRM whenever you receive a lead

### Connect to Google Spreadsheet

1. To connect, you must first grant ChatMamba the necessary permissions. Click on Sign in to Google Sheets and follow the instructions on the screen.
2. After logging in to your Google account, select a Google Spreadsheet from your Google account (make sure you already create one)  Then, select a Sheet you would like to use. This will be the sheet that your Facebook Lead will be written to.

>[!tip]
> If you do not have a Google Spreadsheet, create one [here](https://docs.google.com/spreadsheets/u/0/).

3. Next, you will link your Leadgen Form data to your Google Sheet columns. Setup your Google Sheet such that each column in the first row represents the data from Leadgen Form that you're interested in, such as example shown in below:

>[!note]
> ChatMamba assumes that the first row in your Google Sheet represents headers

4. Then, in ChatMamba, bind the headers from Google Sheets to the questions (and other attribute) from Leadgen Form.

>[!tip]
> If you do not see your Google Sheet header when binding column, click **Refresh Selection**

### Connect to Email

>[!note]
> Email notifications are only sent to verified email addresses.

1. Select Email tab.
2. To verify your email address in ChatMamba, click on **Verify Email Address**
3. Enter the email address you wish to verify.
4. A verification email will be sent to the newly added email address.
5. Verify the email address by following the instruction in the email that ChatMamba has sent.
6. After that, go back to ChatMamba, and select the email address you have just verified as one of the receivers for lead updates.

>[!tip]
> Refresh Selection if you do not see your email address in the selections.

### Connect to Telegram

1. Select the Telegram tab.
2. To connect your Telegram account to ChatMamba, click on Generate Unique Link
3. Then, click on
a. Connect to Telegram to link your Telegram account
b. Connect to Telegram Group to add ChatMamba Telegram to your Telegram group
c. Copy Link to share this link to your friend, if you are connecting his/her Telegram account and you do not have access it.
d. Generate another link if you wish to link another Telegram account, since each unique link can only be used once
4. If you click Connect to Telegram, you will be redirect to ChatMambaBot in Telegram.
5. Click on Start, and your Telegram account will be connected to your ChatMamba account.
6. After that, go back to ChatMamba, and select the account you have just connected as one of the receivers for lead updates.

>[!tip]
> Refresh Selection if you do not see your Telegram account in the selections.

### Connect to ChatMamba CRM

>[!note]
> You must be a member of at least 1 ChatMamba CRM system to connect

1. Select the Team tab.
2. Select your CRM system.
3. Next, link your Leadgen Form data to your CRM columns, for example, the Email question in Facebook Leadgen form to the Email column in ChatMamba CRM, as shown below:
4. Optionally, you can select a distribution group to distribute your leads to the members in that group.
