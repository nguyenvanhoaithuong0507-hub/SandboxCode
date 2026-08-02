---
sidebar_position: 2
---

# 🔌 API Reference

## Base URL

```url
https://api.sandboxcode.dev/v1
```

## Authentication

```bash
Authorization: Bearer YOUR_API_TOKEN
```

## Tasks API

### GET /tasks

Lấy danh sách tasks.

```bash
curl -H "Authorization: Bearer token" \
  https://api.sandboxcode.dev/v1/tasks
```

### POST /tasks

Tạo task mới.

```bash
curl -X POST \
  -H "Authorization: Bearer token" \
  -H "Content-Type: application/json" \
  -d '{"title": "New task"}' \
  https://api.sandboxcode.dev/v1/tasks
```

### GET /tasks/:id

Lấy chi tiết task.

```bash
curl -H "Authorization: Bearer token" \
  https://api.sandboxcode.dev/v1/tasks/abc123
```
