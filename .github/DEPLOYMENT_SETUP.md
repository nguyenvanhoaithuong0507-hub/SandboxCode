# GitHub Pages Deployment Setup Guide

## Hướng Dẫn Cấu Hình GitHub Pages (Step-by-Step)

### Prerequisites (Điều kiện tiên quyết)

- Repository: `nguyenvanhoaithuong0507-hub/SandboxCode`
- Workflow file: `.github/workflows/deploy.yml` (đã tạo)
- Admin access to repository

### Step 1: Vào Settings Repository

1. Mở GitHub repo: https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode
2. Click vào tab **Settings** (trên cùng)

![Step 1](- Click Settings tab in repo navigation)

### Step 2: Tìm GitHub Pages Section

3. Trong menu bên trái, scroll down tìm **Pages** section
4. Click vào **Pages**

![Step 2](- Locate Pages in left sidebar)

### Step 3: Cấu Hình Build and Deployment

5. Bạn sẽ thấy section "Build and deployment"
6. **Source dropdown**: Hiện tại có thể là "Deploy from a branch"
7. **Click dropdown** và chọn **"GitHub Actions"**

```
⚠️ IMPORTANT: Đây là bước quan trọng!
Chọn "GitHub Actions" (KHÔNG phải "Deploy from a branch")
```

### Step 4: Lưu Cấu Hình

8. Sau khi chọn "GitHub Actions", GitHub sẽ tự động lưu
9. Bạn sẽ thấy xác nhận: "Your site is published at..."

### Step 5: Xác Minh Deploy

10. Quay lại repo, click vào **Actions** tab
11. Bạn sẽ thấy workflow tên **"Deploy Docusaurus to GitHub Pages"**
12. Workflow này sẽ **chạy tự động** khi có push vào `main` branch

### Kết Quả

- ✅ GitHub Pages sẽ deploy tự động
- ✅ Site sẽ accessible tại: `https://nguyenvanhoaithuong0507-hub.github.io/SandboxCode/`
- ✅ Mỗi push vào `main` sẽ update site

---

## Troubleshooting (Khắc Phục Sự Cố)

### Problem: Workflow failed (workflow bị fail)

**Solution:**

1. Vào **Actions** tab
2. Click vào workflow bị fail
3. Xem chi tiết error trong build log
4. Thường nguyên nhân:
   - Broken markdown links
   - Missing images
   - Syntax errors in docs

### Problem: Site not showing (site không hiển thị)

**Solution:**

1. Chắc chắn GitHub Pages source là "GitHub Actions"
2. Chờ 2-3 phút (deployment có thể mất vài phút)
3. Hard refresh browser (Ctrl+Shift+R)
4. Check trong repo **Settings** → **Pages** → xem URL

### Problem: 404 Page Not Found

**Solution:**

1. Vào repo **Settings** → **Pages**
2. Xem "Your site is published at" URL
3. URL phải là: `https://nguyenvanhoaithuong0507-hub.github.io/SandboxCode/`
4. Kiểm tra `docusaurus.config.js` có `baseUrl: '/SandboxCode/'` không

---

## Verification Checklist (Kiểm Tra Lại)

- [ ] Vào https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode/settings/pages
- [ ] "Build and deployment" source = "GitHub Actions"
- [ ] Vào Actions tab, thấy workflow "Deploy Docusaurus to GitHub Pages"
- [ ] Workflow status = ✅ (xanh)
- [ ] Vào https://nguyenvanhoaithuong0507-hub.github.io/SandboxCode/
- [ ] Site hiển thị bình thường (thấy homepage)
- [ ] Click vào doc link, page load đúng

---

## Testing Deployment (Test Deploy)

### Local Test Before Push:

```bash
# Build locally
npm run build

# Verify build success
ls -la build/

# Serve production build
npm run serve
# Open http://localhost:3000/SandboxCode/
```

### After Push:

```bash
# View deployment workflow
git push origin main
# → Vào Actions tab để xem workflow chạy

# After workflow completes (2-5 min)
# Visit: https://nguyenvanhoaithuong0507-hub.github.io/SandboxCode/
```

---

## Useful Commands (Lệnh Hữu Ích)

```bash
# Clear cache & rebuild
rm -rf build node_modules
npm install
npm run build

# Check if deploy.yml is valid
cat .github/workflows/deploy.yml

# View recent commits
git log --oneline -5

# Push to trigger deployment
git push origin main
```

---

## Support

Nếu có vấn đề:

1. Check error logs trong Actions tab
2. Xem file: `.github/workflows/deploy.yml`
3. Kiểm tra `docusaurus.config.js` có baseUrl đúng không
4. Đảm bảo build passes locally: `npm run build`

---

**Last Updated:** July 18, 2026
**Repository:** nguyenvanhoaithuong0507-hub/SandboxCode
**Deployment URL:** https://nguyenvanhoaithuong0507-hub.github.io/SandboxCode/
