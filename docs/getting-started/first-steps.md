---
sidebar_position: 4
---

# 🚀 Những bước đầu tiên

## Điều kiện tiên quyết

- ✅ Node.js 18.x trở lên
- ✅ npm hoặc yarn
- ✅ Git đã cài đặt
- ✅ Tài khoản GitHub
- ✅ Token GitHub (PAT)

## Bước 1: Cài đặt

```bash
npm install -g sandboxcode
```

## Bước 2: Khởi tạo dự án

```bash
sandboxcode init my-project
cd my-project
```

## Bước 3: Cấu hình

```bash
sandboxcode config set github-token YOUR_TOKEN
sandboxcode config set git-user-email your@email.com
```

## Bước 4: Tạo nhiệm vụ đầu tiên

```bash
sandboxcode task create "Viết một API GET endpoint"
```

## Bước 5: Xem kết quả

```bash
sandboxcode task list
sandboxcode task view <task-id>
```
