---
external: false
draft: false
title: How We Integrated Yoptos’s Ratings and Reviews Service into a Leading E-Commerce Platform.
description: A Case Study on Serverless Integrations using Lambda
date: 2024-06-24
tags: [integration, e-commerce, AWS, lambda]
---

> What if your e-commerce store could automatically collect real customer feedback without lifting a finger?
> That’s exactly what we made happen with this backend service.

When a major e-commerce brand wanted to get serious about customer reviews, the goal was clear: capture more verified post-purchase feedback and showcase it directly on their site.

To make it happen, we built a serverless pipeline that fetched daily sales from Salesforce and sent them straight into [Yotpo](https://www.yotpo.com/)—one of the leading platforms for eCommerce reviews and UGC (user-generated content).

> **Heads up**: This article assumes you’ve got some working knowledge of AWS services and event-driven architecture.

In this case study, I’ll walk you through how we designed and delivered a reliable, scalable backend integration that fuels ongoing customer engagement—exactly the kind of cloud-first development work I specialize in as a freelance developer.

## The Challenge

Getting more authentic reviews sounds simple—but the logistics can be messy.

The client needed a fully automated way to:

- Pull the previous day's sales data from Salesforce.
- Push that data into Yotpo to trigger review request emails.
- Handle failures gracefully—no lost sales, no missed opportunities.

Oh, and it had to be fast, fault-tolerant, and serverless (of course).

## The Solution

We split the solution into two parts:

- **Producer Lambda**: Fetch and parse sales data from Salesforce, then enqueue it onto SQS.
- **Consumer Lambda**: Read messages from SQS and post them to Yotpo.

If posting failed for any reason, the message would simply get requeued—no data lost, no manual intervention needed.

![Solution Architecture](/images/yotpo-integration/architecture-diagram.svg)

### Producer Lambda

First up: fetching the sales.

We set up an AWS Lambda function, triggered daily via EventBridge, to pull the previous day's completed orders from Salesforce. Once fetched, the sales data was parsed into batches of 50 messages and published to an SQS queue.

This gave us a simple, reliable message buffer between Salesforce and Yotpo.

Our goals for this step:

- Extract only completed orders.
- Format the data exactly to Yotpo’s API spec.
- To make efficient use of the SQS API.

Sample flow inside the producer Lambda:

```javascript
// Pseudocode
const salesData = await fetchSalesforceData();
for (const sale of salesData) {
  const payload = transformForYotpo(sale);
  await sendToSQS(payload);
}
```

By batching message to SQS we reduced costs.

### Consumer Lambda

Next: getting those sales into Yotpo.

A second AWS Lambda function listened to the SQS queue. It would:

- Pick up one sale at a time.
- Attempt to post it to Yotpo’s /purchases API.
- If successful, move on to the next message.
- If an error occurred, leave the message on the queue to retry later.

Thanks to SQS’s built-in visibility timeout and dead-letter queue (DLQ) support, we didn’t need to reinvent the wheel for retry handling.

Sample consumer Lambda logic:

```javascript
// Pseudocode
const { Records } = event;
for (const record of Records) {
  try {
    const payload = JSON.parse(record.body);
    await postToYotpo(payload);
  } catch (error) {
    console.error("Failed to post sale to Yotpo:", error);
    // Message will automatically become visible again for retry
  }
}
```

This design guaranteed at-least-once delivery of every sale to Yotpo—with retries automatically handled without needing custom retry logic.

## Technical Highlights

- Serverless & Scalable: No servers to manage. Auto-scales with volume.
- Resilient: Failures don’t kill the pipeline—problematic sales just get retried automatically.
- Secure: IAM roles locked down to only necessary permissions. All sensitive keys and secrets handled via AWS Secrets Manager.

The Results

- ✅ 100% automated daily sales syncing to Yotpo.
- ✅ Major boost in review collection rates.
- ✅ Zero manual interventions required post-launch.
- ✅ Full visibility into pipeline health through CloudWatch metrics and alerts.

## Final Thoughts

This project shows the real power of event-driven, serverless design: simple, reliable systems that just work—even when things go wrong.

If you're looking to integrate third-party services like Yotpo, Salesforce, or any other SaaS platforms into your stack, and you want it to be bulletproof, this is the kind of cloud-native, fullstack development I love delivering.
