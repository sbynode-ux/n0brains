---
title: "The End of Unlimited AI"
description: "GitHub Copilot switches to per-token billing on June 1st. The era of flat-rate AI coding is dead."
pubDate: 2026-05-08
---

GitHub Copilot is going per-token. **June 1st, 2026** is the cutoff. The flat-rate subscription that let developers hammer the API without thinking about cost is gone. This is the most significant shift in the economics of AI development since the launch of ChatGPT.

We normalized flat fees. You paid $10 or $20 and got unlimited reasoning. Long prompts, agent loops, multiple completions—it didn't matter. The marginal cost of a query was zero for the user. That was a gift to adoption. It was never sustainable for the provider. [GitHub Copilot](https://www.artificialintelligence-news.com/news/per-token-ai-charging-comes-to-github-copilot/) is now openly passing the cost of compute through to the developer. No more abstractions. You get what you pay for, down to the last token.

## The Utility Model Wins

Everything changes when the provider's cost becomes the user's cost. The old SaaS model priced access. The new model prices consumption. This aligns perfectly with the rapid decline in inference costs.

Techniques like [faster self-attention mechanisms](https://newsletter.theaiedge.io/p/how-to-improve-decoding-latency-with) are crushing decoding latency. When a token gets cheaper to produce, it makes sense to sell it individually. Copilot is making a bet that the cost curve is steep enough to keep the total user bill manageable while capturing a direct share of the efficiency gains. AI development is shifting from a subscription overhead to a direct variable cost. This is raw utility computing.

The heavy user—the one who lives in their IDE and generates petabytes of completions—will see their bill go up. The casual user who just needs a few autocompletions will see it drop. Power users subsidized everyone before. Now everyone pays their actual freight. This is fair. It is also the cold reality of a market that can no longer afford to give away the core commodity.

## Agents Have a Budget Now

The most immediate disruption is to agentic workflows. An agent that loops to solve a problem used to cost one monthly fee. Now it costs **10x** the tokens if it loops 10 times. It costs **50x** if you let it iterate without bounds. A single advanced debugging session can easily chew through **200,000** tokens.

Most developers have no visibility into their agent token burn. They treat loops as free. This must change. The Australian Prudential Regulation Authority recently [flagged AI agent governance as a control gap](https://www.artificialintelligence-news.com/news/ai-agent-governance-control-gaps/). They were worried about risk and reliability. They missed the immediate threat: runaway inference costs. An ungoverned agent is not just a liability—it is a direct drain on your balance sheet. The first governance crisis for your AI agent might not be a bad decision. It might be a **$5,000** inference bill that piled up overnight.

## The Signal

The signal is brutally clear. Unlimited AI was a loss leader. It was an incredible user acquisition mechanism. It let teams build without constraint. Now the constraint is back, and it is measured in tokens.

This is the maturation of the AI market. The hype cycle ends when the metered bill arrives. Per-token pricing forces a level of rigor that the chat UI era completely avoided. It makes the economics of AI transparent. For the first time, builders can directly map the value of a feature to its inference cost. This is terrifying for the undisciplined. It is an opportunity for the precise.

The all-you-can-code buffet is closed. You are going to pay per dish, so optimize your order.
