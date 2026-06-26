# Interview Output Guide

This file defines how interview notes should be created and formatted in the `user-interviews/` directory.

## File Naming

- Each interview file must use the format `[first]-[last].md`.
- Use lowercase only.
- Replace spaces with hyphens.
- Do not include middle names, titles, or company names in the filename unless explicitly needed.

Examples:

- `will-arinze.md`
- `jane-smith.md`
- `alex-johnson.md`

## Purpose

Each interview document should do two things:

1. Capture a concise, structured summary that is easy to scan later.
2. Preserve the full raw transcript beneath the summary for reference.

The `user-interviews/will-arinze.md` file is the reference example for tone, structure, and depth.

## Writing Principles

- Write in clear, plain English.
- Prefer synthesis over transcription in the summary section.
- Keep the summary useful for future pattern analysis across many interviews.
- Focus on insights, signals, risks, recommendations, and implications for Oxford Growth.
- Avoid overly casual language in the summary, even if the transcript is informal.
- Preserve the transcript as-is as much as possible when included in the `Full Transcript` section.

## Required Structure

Every interview file should follow this structure in this order:

```md
# First Last

## Meeting Details

- **Date:** Mon DD
- **Participants:** Name, Name, Name
- **Meeting title:** Exact meeting title

## Overview

Short 1-2 paragraph summary of the conversation, the interviewee's context, and the main themes that emerged.

## Why [First Name] Networks

- Bullet points summarising why they network, what they seek, and how that has evolved.

## Key Insights For Oxford Growth

### 1. Insight title

Short paragraph.

### 2. Insight title

Short paragraph.

## Observations On Existing Networks

### Group name

- Relevant bullets.

## Format And Commercial Model Considerations

Short intro sentence if needed.

- Bullet points.

## Signals Of Value

Short intro sentence if needed.

- Bullet points.

## Potential Risks Or Things To Avoid

- Bullet points.

## Suggested People To Speak To

- **Name**: brief reason.

## Notable Quotes / Themes

- Theme or paraphrased quote.

## Takeaways For Us

- Bullet points focused on Oxford Growth implications.

## Full Transcript

Meeting Title: ...
Date: ...
Meeting participants: ...

Transcript:

Raw transcript pasted here.
```

## Section Guidance

### `# First Last`

- Use the interviewee's normal display name with standard capitalisation.

### `## Meeting Details`

- Keep this short and factual.
- Use bullets exactly as shown in the example.

### `## Overview`

- Write 1-2 concise paragraphs.
- Explain who the person is in context if it is relevant.
- Summarise the biggest themes from the conversation.

### `## Why [First Name] Networks`

- Tailor this heading to the interviewee's first name.
- Use bullets to capture motivation, goals, and evolution over time.

### `## Key Insights For Oxford Growth`

- Use numbered `###` subheadings.
- Each insight should be distinct and useful for future synthesis.
- Keep each explanation short, usually 2-4 sentences.

### `## Observations On Existing Networks`

- Capture comments about communities, accelerators, groups, or events already in the market.
- Use `###` subheadings for each network when there is enough detail.

### `## Format And Commercial Model Considerations`

- Include any comments about cadence, event style, pricing, exclusivity, membership, digital vs in-person, or accessibility.

### `## Signals Of Value`

- Capture what the interviewee appears to value most in a network or community.

### `## Potential Risks Or Things To Avoid`

- Include concerns, anti-patterns, and failure modes mentioned or implied in the conversation.

### `## Suggested People To Speak To`

- List referrals, adjacent contacts, or names the interviewee recommends.
- Include a short explanation for why they are relevant.

### `## Notable Quotes / Themes`

- Prefer short paraphrased themes over long direct quotes.
- Use this section to capture memorable ideas that may recur across interviews.

### `## Takeaways For Us`

- Keep this focused on what Oxford Growth should learn, test, preserve, or avoid.
- This should be actionable.

### `## Full Transcript`

- Always place the full transcript after the summary sections.
- Keep the original wording intact where possible.
- If the source transcript includes speaker labels like `Me:` and `Them:`, preserve them.

## Style Rules

- Use Markdown headings exactly as shown in the template.
- Use sentence case within bullet content.
- Use bold only for labels and names where helpful.
- Keep bullets concise and specific.
- Do not over-format the transcript.
- Do not remove nuance just to make the summary neater.

## Consistency Rules

- Every file in `user-interviews/` should follow the same structure unless there is a strong reason not to.
- If a section has no meaningful content for a particular interview, keep the section and write a brief note rather than deleting it.
- Use British English spelling where practical for consistency with the Oxford Growth context.

## Default Workflow

When creating a new interview file:

1. Name the file `[first]-[last].md`.
2. Add the structured summary first.
3. Add the full transcript below the summary.
4. Use `user-interviews/will-arinze.md` as the formatting reference.
