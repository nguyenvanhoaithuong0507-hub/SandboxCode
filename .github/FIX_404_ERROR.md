## Khắc phục lỗi 404 trên GitHub Pages

Bạn đang thấy lỗi 404 vì **GitHub Pages source chưa được config**. Đây là bước thủ công bắt buộc.

### Nguyên Nhân
GitHub Pages cần được "kích hoạt" để sử dụng GitHub Actions deployment. Hiện tại nó đang tìm tệp `index.html` trong branch `main`, nhưng tệp thực tế được deploy vào branch `gh-pages` bởi workflow.

### Cách Khắc Phục (5 bước)

#### **Bước 1:** Mở Settings
1. Vào: https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode
2. Click tab **Settings** (ở menu header)

#### **Bước 2:** Tìm GitHub Pages
1. Left sidebar → Scroll down → Click **Pages** (dưới "Code and automation")

#### **Bước 3:** Thay đổi Source
Bạn sẽ thấy section "Build and deployment" với:
- **Source:** Dropdown showing "Deploy from a branch" (hoặc "None")
- Click dropdown → Chọn **"GitHub Actions"**

#### **Bước 4:** Xác nhận
- Trang sẽ refresh
- Bạn sẽ thấy thông báo xanh: "GitHub Pages is enabled"
- Section "Build and deployment" sẽ thay đổi thành "GitHub Actions"

#### **Bước 5:** Kích hoạt Deployment
Deployment sẽ tự động chạy lần tới khi bạn push lên `main`:

```bash
# Kích hoạt deployment ngay bây giờ
git push origin main
# hoặc
git push origin main --force
```

Hoặc **trigger workflow thủ công**:
1. Vào tab **Actions** trong repo
2. Chọn workflow **"Deploy Docusaurus to GitHub Pages"**
3. Click **"Run workflow"** → **"Run workflow"**

### Sẽ Mất Bao Lâu?

Workflow chạy khoảng **2-3 phút**:
- 1 phút: Checkout code
- 1 phút: Install dependencies
- 30 giây: Build Docusaurus
- 30 giây: Deploy

Sau khi xong, site sẽ live tại:  
**https://nguyenvanhoaithuong0507-hub.github.io/SandboxCode/**

### Kiểm Tra Trạng Thái

**Trong quá trình:**
- Vào tab **Actions**
- Chọn workflow run mới nhất
- Xem logs chi tiết

**Sau khi xong:**
- Vào tab **Deployments** (hoặc **Environments** → **github-pages**)
- Sẽ thấy deployment "Active"
- Click link để xem site live

### Nếu Vẫn Lỗi 404

1. **Kiểm tra deployment logs**
   - Actions tab → Workflow run mới nhất
   - Xem có error không

2. **Kiểm tra base URL**
   - docusaurus.config.js có đúng `baseUrl: '/SandboxCode/'` không?

3. **Force re-deploy**
   ```bash
   git push origin main --force
   ```

4. **Xóa cache browser**
   - Chrome DevTools → Clear cache → Hard refresh (Ctrl+Shift+R)

---

## Tóm Tắt Quy Trình

```
1. Settings → Pages → Source = "GitHub Actions"  ← BẠN ĐANG Ở ĐÂY
2. Save
3. git push origin main
4. Chờ 2-3 phút
5. Site live! ✅
```

Bạn đã hoàn thành bước 1 chưa? Hãy báo cho tôi khi xong!
