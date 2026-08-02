---
sidebar_position: 2
---

# ⚙️ Cấu hình CLI

## Cấu hình cơ bản

### 1. Thiết lập Token GitHub

```bash
sandboxcode config set github-token ghp_YOUR_TOKEN_HERE
```

### 2. Thiết lập Git User

```bash
sandboxcode config set git-user-name "Tên của bạn"
sandboxcode config set git-user-email "email@example.com"
```

### 3. Thiết lập Repository Mặc định

```bash
sandboxcode config set default-repo username/repo-name
```

## Xem cấu hình

```bash
sandboxcode config list
```

## File cấu hình

- **Linux/Mac:** `~/.sandboxcode/config.json`
- **Windows:** `%APPDATA%\SandboxCode\config.json`
