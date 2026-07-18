---
sidebar_position: 5
---

# 🔄 Tự động hóa CLI

## Giới thiệu

Tự động hóa các tác vụ CLI giúp tăng hiệu suất làm việc.

## Scripts Tự động hóa

### 1. Script Tạo Feature

```bash
#!/bin/bash
FEATURE_NAME=$1
echo "📝 Tạo feature: $FEATURE_NAME"
sandboxcode task create "Implement $FEATURE_NAME"
sandboxcode task list
```

### 2. Script Chạy Tests

```bash
#!/bin/bash
echo "🧪 Chạy tests..."
sandboxcode run "npm test"
echo "✅ Tests hoàn tất"
```

### 3. Script Deploy

```bash
#!/bin/bash
VERSION=$1
echo "🚀 Deploying v$VERSION"
sandboxcode run "npm run build"
sandboxcode run "npm test"
sandboxcode task create "Release v$VERSION"
echo "✅ Deploy hoàn tất"
```

## GitHub Actions Integration

```yaml
name: SandboxCode Automation
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
jobs:
  sandboxcode:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm install -g sandboxcode
      - run: sandboxcode config set github-token ${{ secrets.GITHUB_TOKEN }}
      - run: sandboxcode analyze
      - run: sandboxcode run "npm test"
```

## Makefile

```makefile
.PHONY: install setup test build deploy clean

install:
 npm install

setup:
 sandboxcode config set git-user-email "your@email.com"

test:
 sandboxcode run "npm test"

build:
 sandboxcode run "npm run build"

deploy: build test
 sandboxcode task create "Deploy to production"

clean:
 rm -rf node_modules dist
```
