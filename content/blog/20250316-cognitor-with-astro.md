---
external: false
draft: false
title: How to Use AWS Cognito in Your Next Astro Project
description: An overview of using AWS Cognito with you Astro app.
url: https://www.imran-nazir.com/blog/cognito-with-atro
image: https://www.imran-nazir.com/images/cognito-in-astro.png
imageAlt: A stylised HTMX logo graphic
date: 2025-03-16
tags: ["tech", "framework", "astro"]
---

![Illustration](/images/cognito-in-astro.png)

Generally speaking, rather than creating your own authentication system it is better
to use a third party system. That way at least you know you are using something created
by people whose sole focus is secure authentication. It saves you to work on the actual
goals of your business.

One such service you can use is [AWS Cognito](https://aws.amazon.com/cognito/).

As a quick overview, here is how Cognito could work with your site.

![Cognito user flow](/images/cognito-in-astro/user-flow.png)

1. User clicks on the login button in your app.
2. The page redirects to a login/registration page hosted by Cognito
3. On a successful login, Cognito redirects back to your page and stores user data and tokens in Session storage.

The purpose of the `/callback` route is to act as an interstitial page where we process any response (callback) from the authorization process once the login page re-routes back to your app.

Remember that this is only one possible authentication flow. Many of AWS's products
allow for fine grained control over how you achieve your aims.

Setting up Cognito is quite simple but requires you to get your head around a few concepts.

1. Once logged into your AWS account you create a new User Pool. Think of this as
   a new container or directory for your users. You can create create as many as you like. One for each application.
2. Once created, select the User Pool and create a new App Client. The app client
   allows you to interact with your configured user, e.g. login user, logout user
3. Select the "Quick setup guide" and then the platform you are working with. This will give you the
   starter code that you need.

![App Client](/images/cognito-in-astro/app-client.png)

You can then handle the result of a successful login in the callback page

For example:

```js
<script>
  // /callback route
  import { serverLogin, userManager } from "@/lib/auth";

  const user = await userManager.signinCallback();

  if (user && user.access_token) {
    // process the tokens on the server side
    serverLogin(user.access_token, user.id_token, user.expires_in);
  }

  // re-direct the browser
  window.location.href = "/todos";
</script>
```
