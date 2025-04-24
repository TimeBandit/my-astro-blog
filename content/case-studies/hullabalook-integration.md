---
external: false
draft: true
title: How We Integrated Hullabalook’s Interactive Shopping Experience into a Leading E-Commerce Platform
description: A Case Study on Elevating Furniture Shopping with Typescript, AWS & Iframes
date: 2024-04-24
tags: [integration, e-commerce, AWS]
---

> “What if your online store could let customers design their dream living room before they buy? That’s exactly what we achieved for a leading e-commerce brand.”
> fsf

**Introduction**

When a leading e-commerce brand needed to enhance their customer buying journey, the goal was clear: deliver a richer, more interactive shopping experience that converts. In partnership with [Hullabalook](https://www.hullabalook.com/) (HBL), a company known for innovative visual shopping tools, we engineered a seamless integration that enhanced both product discovery and user engagement.

![Room Planner](/images/hullabalook-integration/room-planner.png)

In this article, I’ll walk through the technical and strategic implementation of this integration, and how it supports business outcomes—a story that reflects the kind of fullstack, cloud-first development work I specialize in as a freelance developer.

**The Problem**

Customers wanted a way to better visualize furniture in their home environments before purchase. The chosen solution was Room Planner (FP) from Hullabalook. The client wanted to enable an immersive configuration tool without compromising site performance or backend stability.

**The Solution**

We delivered this through two core components:

- **Part 1**: A pipeline to deliver daily drop of product data.
- **Part 2**: Integrating and interacting Hullabalooks experience into the clients site.

**Part 1: The Pipeline**

For RP experience to work they needed our product data. The product catalogue was hosted on a SAAS platform.
We had programmtic access to the data via an API. I knew

A nightly Lambda function was built in Node.js to fetch and format product data.

This data was dropped as a JSON payload into an Amazon S3 bucket, formatted to Hullabalook’s expected schema.

Hullabalook's systems then picked up the file and ingested it into their experience engine.

Interactive IFrame Integration into the Frontend

Using React, we embedded Hullabalook's design tool via an iframe directly into the product page experience.

This allowed users to visually build a room layout using our client’s products.

Once complete, selected items could be added directly to the client’s cart via a message API passed from the iframe to the main site.

Technical Highlights

Security: The Lambda function used IAM roles with least privilege, and S3 buckets were restricted by both access policies and object lifecycle management.

Performance: The iframe only loaded on demand, with lazy loading for performance.

Scalability: The architecture is serverless, meaning minimal maintenance and no infrastructure scaling issues.

The Outcome

Increased average cart size for users who engaged with the tool.

Improved bounce rates from product detail pages.

Zero reported performance degradation or integration issues post-launch.

Conclusion
This project is a prime example of how fullstack development, paired with modern cloud infrastructure, can unlock new user experiences without sacrificing speed or reliability.

If you're looking for someone to help you create seamless, scalable web integrations like this, get in touch or check out my case studies to see more of my work.
