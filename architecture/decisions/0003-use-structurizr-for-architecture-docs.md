# 1. Use Structurizr For Architecture Documentation

Date: 2023-04-20

## Status

Proposed

## Context

We need a good tool for diagramming and architecture decision tracking.

## Decision

We will use Structurizr: https://structurizr.org/

It's **free**, open-source, well-maintained and well-documented.

It supports **diagrams-as-code** approach so all the output can be included in the source code repository.

It has **architecture decision record (ADRs)** support.

## Consequences

Include the Structurizr set-up in the repository and keep it up to date.

Structurizr follows an opinionated approach using the [C4 model](https://c4model.com/) so we'll need to follow it as well.