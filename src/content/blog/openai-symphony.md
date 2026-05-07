---
title: "OpenAI Symphony: When the bottleneck is human attention"
description: "OpenAI open-sourced a spec that lets coding agents pull tickets and ship code without waiting for humans. The results are absurd."
pubDate: 2026-05-07
---

On April 27, OpenAI released [Symphony](https://github.com/openai/symphony), an open-source specification that does something simple on paper and terrifying in practice: it lets AI coding agents pull tickets from Linear, write the code, open pull requests, and get them merged — without a human in the dispatch loop.

The numbers are ridiculous. Internal teams using Symphony saw a **6x increase in merged pull requests** in the first three weeks. Six. Times.

## The bottleneck wasn't the models

OpenAI's engineers on the Codex platform had hit a ceiling. They could run 3-5 parallel Codex sessions, but supervising them required constant context-switching. The agents were fast — faster than they'd ever been — but human attention couldn't keep up.

The Symphony team put it plainly in the spec:

> "The agents were fast, but we had a system bottleneck: human attention."

So they removed the human from the dispatch loop entirely.

## How it works

Symphony treats your issue tracker (Linear, for now) as a state machine. Tickets flow through Todo → In Progress → Review → Merging. Each open ticket gets its own dedicated Codex agent with an isolated workspace. If an agent crashes or stalls mid-task, Symphony respawns it. If CI fails, it rebases and retries. The system keeps running until the work is done.

The orchestrator only starts agents on tasks that aren't blocked, so dependent work happens in parallel where the dependency graph allows. For monorepos where landing a PR is slow or fragile, Symphony watches CI, rebases when needed, resolves conflicts, and retries failed checks — autonomously.

The key design insight: instead of centering work around coding sessions or individual pull requests, Symphony organizes around **tickets and task states**. This lets agents handle investigation work that doesn't produce code changes, not just implementation tasks.

## What makes this different

We've had coding agents that can write code for a while. What's new is the **autonomous dispatch layer**.

Before Symphony, the workflow was:
1. Human picks a ticket
2. Human opens a coding session
3. Agent helps write the code
4. Human reviews and merges

With Symphony:
1. Ticket enters the backlog
2. Symphony assigns an agent
3. Agent writes code, runs tests, opens PR
4. Symphony watches CI, rebases, retries
5. Human reviews the final result

The human doesn't disappear — they still review the output and make judgment calls on ambiguous tasks. But they're removed from the **coordination overhead**. No more context-switching between 5 terminals. No more "let me wait for this build to finish before I start the next thing."

## The limits

OpenAI is upfront about what Symphony can't do. Moving from direct supervision to ticket-level assignment reduces the engineer's ability to intervene while an agent is working. Tasks that need continuous human judgment still belong in interactive Codex sessions.

Early versions of the system were also too rigid — agents could only implement a task, nothing else. OpenAI had to expand the toolset so agents could read review feedback, inspect CI logs, manage PRs, and report on completed or abandoned work before the system became useful.

## The signal

Symphony is a reference implementation, not a product. OpenAI won't maintain it. But the pattern matters more than the code.

When your internal teams see a 6x throughput gain from removing yourself from the dispatch loop, that's not a marginal improvement. That's a fundamental shift in how software gets built. The bottleneck in AI-assisted development is no longer the AI — it's the human infrastructure around it.

The question isn't "can agents write code?" anymore. It's "can your workflow get out of their way?"

---

*Symphony is open source at [github.com/openai/symphony](https://github.com/openai/symphony). The reference implementation is in Elixir, but the spec has been ported to TypeScript, Go, Rust, Java, and Python.*
