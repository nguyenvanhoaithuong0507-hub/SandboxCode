---
sidebar_position: 4
---

# 🤖 Thiết lập Trợ lý Cá nhân

## Giới thiệu

SandboxCode cung cấp một **Trợ lý AI cá nhân** học theo thói quen làm việc của bạn.

## Thiết lập

### Bước 1: Khởi tạo Trợ lý

```bash
sandboxcode assistant init
```

### Bước 2: Cấu hình Tùy chọn

```bash
sandboxcode assistant config set language vi
sandboxcode assistant config set style automated
sandboxcode assistant config set auto-fix true
```

### Bước 3: Đào tạo Trợ lý

```bash
sandboxcode assistant learn
```

## Sử dụng Trợ lý

### Tạo nhiệm vụ mới

```bash
sandboxcode assistant ask "Tạo một API endpoint GET"
```

### Xem đề xuất

```bash
sandboxcode assistant suggestions
```

## Tùy chỉnh Hành vi

```bash
sandboxcode assistant config set auto-commit true
sandboxcode assistant config set auto-create-pr true
sandboxcode assistant config set pr-prefix "[AI]"
```
