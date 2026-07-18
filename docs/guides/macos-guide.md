---
sidebar_position: 3
---

# 🍎 Hướng dẫn macOS

## Cài đặt SandboxCode trên macOS

### Option 1: Sử dụng Homebrew (Khuyến nghị)

```bash
brew tap nguyenvanhoaithuong0507-hub/sandboxcode
brew install sandboxcode
```

### Option 2: Sử dụng npm

```bash
npm install -g sandboxcode
```

## Kiểm tra Cài đặt

```bash
sandboxcode --version
```

## Khắc phục sự cố trên macOS

### ❌ Lỗi: "cannot be opened because the developer cannot be verified"

```bash
sudo xattr -rd com.apple.quarantine /usr/local/bin/sandboxcode
```

### ❌ Lỗi: "Permission denied"

```bash
sudo chown -R $(whoami) /usr/local/bin/sandboxcode
```

## Tích hợp với Terminal

Thêm vào `~/.zshrc`:

```bash
alias sc='sandboxcode'
alias sct='sandboxcode task'
alias scr='sandboxcode run'
```

Sau đó reload:

```bash
source ~/.zshrc
```
