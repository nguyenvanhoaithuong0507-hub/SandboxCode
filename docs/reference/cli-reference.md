---
sidebar_position: 1
---

# 📚 CLI Reference

## Task Management

### `task create <description>`

```bash
sandboxcode task create "Viết một API endpoint"
sandboxcode task create "Fix bug in login" --priority high
```

### `task list`

```bash
sandboxcode task list
sandboxcode task list --status active
```

### `task view <id>`

```bash
sandboxcode task view abc123
```

## Configuration

### `config set <key> <value>`

```bash
sandboxcode config set github-token ghp_xxx
sandboxcode config set git-user-name "Your Name"
```

### `config list`

```bash
sandboxcode config list
```

## Execution

### `run <command>`

```bash
sandboxcode run "npm test"
sandboxcode run "npm run build"
```

## Analysis

### `analyze`

```bash
sandboxcode analyze
sandboxcode analyze --path ./src
```
