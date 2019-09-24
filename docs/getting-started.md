---
id: getting-started
title: Setup the Feedback House Platform
sidebar_label: Getting Started
---

Feedback House platform is designed to facilitate developer experiency while ensuring higthest level of security. This document helps Developers or system administrators to properly setup the platform.

*Using authomated methods such as Single-Sign-On and APIs are prefered since they provide better user experience, increase security and automate processes.*

## Getting started

Once logged for the first time in the platform you'll be able to invite more users to the platform, setup login methods such as single-sign-on, APIs or even import users using Excel files. 

## Setting up Single Sign-On (SSO)

Feedback House supports multiple SSO identy providers (IdP). An Identity Provider is a server that can provide identity information about users of your company. For example, Google can be an Identity Provider for companies using the G Suite solution. If your company is using G Suite you can log automaticaly into Feedback House using your Google account. then a Google server will send your identity information to that site.

### Azure Single Sign On

If your company uses Azure Single Sign On you'll be able to automatically loggin into Feedback House using Azure as IdP. In order to use this login strategy you need to active this option in the settings menu.

### Google Single Sign On

If your company uses G Suite you'll be able to automatically log into Feedback House using Google as IdP.

### SAML Single Sign on

If your company uses SAML be able to automatically log into Feedback House SAML Servers as IdP.

## Security & Firewall

### Whitelisting Feedback House Domains

In order to properly operate your company users need to be able to access Feedback House servers. Feedback House uses standard web technologies and enforces encription in all communications, in most cases your setup should work out of the box with not additional requirements. 

If you encounter issues using the platform please check the folling requirementes.

- Ensure you have white list Feedback House domains in your proxy server, or internal firewall. Your users should be ablle to access all domains and subdomains.
  
  > You have to white list all feedback house domains *.feedback.house
  
  > You have to white list all feedback house domains *.feedback.house

- Ensure you are not blocking emails from feedback house domain.
  
  > You have to white list all feedback house domains *.feedback.house in your email provider
  
- Dont cache

    > Do not change or enforce new cache policies for Feedback House static content or IP address. Feedback house uses a global CDN network and additional server protections so IPs change often and without notice.
