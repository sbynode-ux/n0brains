---
title: "AI coding agents spend 81% of their time looking for the right file"
description: "A new study found that agents spend almost no time actually writing code. They're lost in the codebase."
pubDate: 2026-05-07
---

Here's a number that stopped me: **56.8%** of AI coding agent actions are reading files. Another **24.2%** are grep searches. Actual code edits? **Less than 1%**.

That's from [Cielara Code](https://causaldynamicslab.com/cielara-code), a tool released this week by Causal Dynamics Lab. They analyzed thousands of AI coding sessions and found a painful truth: the bottleneck isn't generating code — it's **finding where to put it**.

## The search problem

We tend to think of AI coding as "agent writes code." But the reality is closer to "agent wanders around a codebase trying to figure out which file to edit."

The problem gets worse as tasks span more files. When a correct fix involves more than six files, agents become dramatically less reliable — and failed attempts burn **four times** the compute of successful ones.

This makes intuitive sense. An agent starts with a blank context window and a GitHub repo. It has no mental model of how the codebase is structured, which functions call which, or where the database schema is defined. It has to discover all of that through trial and error — reading files, grepping for patterns, reading more files.

## What Cielara does differently

Instead of sending an agent in blind, Cielara builds a **code dependency causal graph** first. It maps relationships across components — what code does, why it was created, who owns it, its constraints, where it runs, and what happens at runtime.

The agent then navigates this graph instead of moving through files one by one. The result: localization accuracy of 0.774 vs 0.738 for Claude Code and 0.707 for Codex. Compute cost per task dropped 30-40%.

## The deeper problem

The DORA report cited by Cielara's team found that AI coding tools were associated with a **7.2% drop in deployment stability**. More code, faster — but also more chaos.

AWS CTO Werner Vogels has a term for this: **"dynamic verification debt"** — the gap between how fast you can generate code and how well you understand what it does.

Current agents treat code as flat text. They don't show how files connect, how functions call each other, or how a change affects the wider system. This is fine for a one-file bug fix. For anything involving multiple services, data models, or API contracts, it's a mess.

## What this means

The next frontier for AI coding isn't better code generation. Models are already good at that. The frontier is **codebase understanding** — giving agents an accurate mental model of the system before they start editing files.

Other tools are starting to move this direction too. Cursor's new SDK includes codebase indexing and semantic search. GitHub Copilot's agent runs code scanning mid-workflow. But we're still early. Most agents today are still wandering around with grep, burning tokens on files they don't need to read.

The agent that actually *understands* your codebase before it touches it will win. Everything else is just fast grep with extra steps.
