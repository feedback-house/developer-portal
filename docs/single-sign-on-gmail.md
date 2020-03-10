---
id: single-sign-on-gmail
title: Setup Single Sign On for Corporate Gmail 
sidebar_label: Corporate Gmail
---

*Using Single-Sign-On is extremely recommend since they provide better user experience and increase security.*

## Go inside Google Admin Apps

https://admin.google.com/ac/apps

![google_admin](/img/google-admin.png)

- Click on Saml Apps

https://admin.google.com/AdminHome?hl=en#AppsList:serviceType=SAML_APPS

![saml_apps](/img/google-saml-apps.png)

- Click on `+` button to create a new SAML App

![saml-step1](/img/google-saml-step1-sso.png)

- Click on `Setup my own custom app`

![saml-step2](/img/google-saml-step2-idp.png)

- Download IDP metadata, option 2

![saml-step](/img/google-saml-step3-custom-app.png)

Application Name: Feedback House
Description: Feedback House

You can get use one of the following icons for Feedback House Application:

## Feedback Logo with name + icon
<img src="/img/saml-logo-19.png" width="200" />

## Feedback Logo with only icon
<img src="/img/saml-logo-20.png" width="200" />

- Configure Service Provider

![saml-step4](/img/google-saml-step4-sp.png)

ACS URL: https://graphql.feedback.house/saml2/login/callback
Entity ID https://graphql.feedback.house/saml2/metadata
Name ID Basic Information Primary Email
Name ID Format EMAIL

# Enable SAML to everybody

![saml-on-everyone](/img/google-saml-on-everyone.png)