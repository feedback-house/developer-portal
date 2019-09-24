---
id: api-getting-started
title: Getting Starded with Feedback House APIs
---

This document will help you with getting started with Feedback House APIs. 

### Creating new API key

All APIs request must be authenticated with a API key. In order to use APIs you first need to create a new API key. You can create API keys any time at your company API options page (*needs to be logged*).

`Admin Panel` > `Permissions` > `APIs` and generate a new API key.

### API Usage Guidelines

- All API `requests` and `reponses` use JSON format
- API backend servers IPs and Certificates change constantly, please don't cache neither sever IPs nor certificates
- All requests must be encrypted using `https`

### APIs Keys Security

APIs keys are extremely powerfull since they can create or read data from your company. Key should be stored and shared with extra care.

API Guidelines:

- Don't share keys with thrid parties
- Don't re-use keys new keys, you can generate multiple keys
- Only generate keys when needed
- Disable unsed keys
