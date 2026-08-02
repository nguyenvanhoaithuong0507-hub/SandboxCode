# SandboxCodex - Architecture & Design Plan

## 📋 Tổng Quan Hệ Thống

**SandboxCodex** là nền tảng AI-powered cho code review, testing, và PR automation. Hệ thống bao gồm 13 trang chính được tổ chức theo 4 nhóm:

---

## 🎯 Phân Loại Trang

### **Nhóm 1: Marketing & Public (5 trang)**

Hướng đến khách hàng tiềm năng

- **1. Trang Giới Thiệu** (Landing Page)
- **2. Trang Docs** (Documentation)
- **3. Trang Mẫu** (Templates/Examples)
- **4. Trang Tích Hợp** (Integrations)
- **7. Trang Cộng Đồng** (Community)

### **Nhóm 2: Authentication (1 trang)**

Xác thực & quản lý người dùng

- **9. Trang Đăng Nhập/Đăng Ký** (Auth - GitHub OAuth)

### **Nhóm 3: User Dashboard & Tools (6 trang)**

Sử dụng sau khi đăng nhập

- **8. Trang Sandbox Hub** (Main Dashboard)
- **5. Trang Chatbot** (AI Assistant - SandboxBot)
- **6. Trang Công Cụ** (Tools)
- **10. Trang Cài Đặt** (Settings/Configuration)
- **11. Trang Server** (SandboxCode Server Management)
- **13. Trang Đầu Nối** (Connectors/Webhooks)

### **Nhóm 4: Developer/Admin (1 trang)**

Cấp cao - DevOps/Admin

- **12. Trang MCP** (Model Context Protocol)

---

## 📱 Chi Tiết Từng Trang

### **1️⃣ Trang Giới Thiệu (Landing Page)**

```
┌─────────────────────────────────────┐
│ HEADER (Sticky)                     │
├─────────────────────────────────────┤
│                                     │
│  HERO SECTION                       │
│  - Tiêu đề lớn                      │
│  - Tagline                          │
│  - CTA Buttons (Try Now, Docs)      │
│  - Background animation             │
│                                     │
├─────────────────────────────────────┤
│ FEATURES GRID (3 cột)               │
│ - Smart Review                      │
│ - Auto Fixes                        │
│ - Sandbox Runtime                   │
│ - Git Integration                   │
│ - CI/CD                             │
│ - Secure                            │
├─────────────────────────────────────┤
│ PIPELINE VISUALIZATION              │
│ PLAN → CODE → RUN → OBSERVE → PATCH │
├─────────────────────────────────────┤
│ SETUP GUIDE                         │
│ Step 1: Clone                       │
│ Step 2: Install                     │
│ Step 3: Deploy                      │
├─────────────────────────────────────┤
│ BLOG SECTION                        │
│ - Featured post (large)             │
│ - Post grid (3 cards)               │
├─────────────────────────────────────┤
│ TECH STACK                          │
│ Node.js | Docker | GitHub API       │
├─────────────────────────────────────┤
│ NEWSLETTER CTA                      │
│ Email input + Subscribe button      │
├─────────────────────────────────────┤
│ SYSTEM STATUS                       │
│ - API: ✓ Operational                │
│ - Sandbox: ✓ Ready                  │
│ - Cloud: ✓ Connected                │
├─────────────────────────────────────┤
│ FOOTER                              │
│ Links | Copyright | Social          │
└─────────────────────────────────────┘
```

**Chức năng:**

- Responsive design (mobile-first)
- Smooth scroll animations
- GitHub OAuth button
- Newsletter signup
- Link đến Docs & Dashboard

---

### **2️⃣ Trang Docs (Documentation)**

```
┌──────────────────────────────────────┐
│ HEADER                               │
├──────────────────────────────┬────────┤
│ LEFT SIDEBAR (TOC)          │ CONTENT│
│ • Getting Started           │        │
│ • Installation              │ Main   │
│ • Configuration             │ Doc    │
│ • API Reference             │ Area   │
│ • Examples                  │        │
│ • Troubleshooting           │        │
│ • FAQ                       │        │
│                             │        │
├──────────────────────────────┼────────┤
│                              │ SEARCH │
│                              │ BAR    │
├──────────────────────────────┤────────┤
│ Right TOC (Page headings)    │ CODE   │
│ - h2: Quick Links           │ BLOCK  │
│ - h3: Sub sections          │ (Dark) │
│                              │        │
└──────────────────────────────┴────────┘
```

**Nội dung chính:**

- Getting Started Guide
- Installation Methods
- Configuration Options
- API Documentation
- CLI Commands
- Code Examples
- Troubleshooting
- FAQ

**Tính năng:**

- Full-text search
- Syntax highlighting
- Copy code blocks
- Version selector
- Dark/Light mode toggle

---

### **3️⃣ Trang Mẫu (Templates/Examples)**

```
┌─────────────────────────────────────┐
│ HEADER                              │
├─────────────────────────────────────┤
│ FILTER TABS                         │
│ [All] [Node.js] [Python] [Go] [Rust]│
├─────────────────────────────────────┤
│                                     │
│ TEMPLATE GRID (3 cột)               │
│ ┌────────┐ ┌────────┐ ┌────────┐   │
│ │ Express│ │ React  │ │ Django │   │
│ │ API    │ │ SPA    │ │ Backend│   │
│ │        │ │        │ │        │   │
│ │[Preview] │[Preview] │[Preview]   │
│ │[Use]     │[Use]     │[Use]       │
│ └────────┘ └────────┘ └────────┘   │
│                                     │
│ ┌────────┐ ┌────────┐ ┌────────┐   │
│ │FastAPI │ │GraphQL │ │Microsvcs   │
│ └────────┘ └────────┘ └────────┘   │
│                                     │
├─────────────────────────────────────┤
│ PAGINATION / LOAD MORE              │
└─────────────────────────────────────┘
```

**Loại Template:**

- API Boilerplates
- Web Apps (React, Vue, Angular)
- Backend Services
- Microservices
- CLI Tools
- Docker Setup
- CI/CD Pipelines

**Mỗi Template bao gồm:**

- Preview code
- Git repository link
- Usage guide
- Tech stack
- Quick start button

---

### **4️⃣ Trang Tích Hợp (Integrations)**

```
┌─────────────────────────────────────┐
│ HEADER                              │
├─────────────────────────────────────┤
│ SEARCH + CATEGORY FILTER            │
│ [All] [VCS] [CI/CD] [Monitoring]   │
├─────────────────────────────────────┤
│                                     │
│ INTEGRATION CARDS (Grid)            │
│ ┌──────────────────────────────┐    │
│ │ [GitHub Logo]                │    │
│ │ GitHub Integration           │    │
│ │ Connect repos for auto PR    │    │
│ │ Status: [Connected ✓]        │    │
│ │ [Configure] [Docs]           │    │
│ └──────────────────────────────┘    │
│                                     │
│ ┌──────────────────────────────┐    │
│ │ [GitLab Logo]                │    │
│ │ GitLab CI/CD                 │    │
│ │ Auto-run pipelines           │    │
│ │ Status: [Not Connected]      │    │
│ │ [Connect] [Docs]             │    │
│ └──────────────────────────────┘    │
│                                     │
│ Similar cards for:                  │
│ - GitLab                            │
│ - Bitbucket                         │
│ - Jenkins                           │
│ - Slack                             │
│ - Discord                           │
│ - PagerDuty                         │
│ - Datadog                           │
│                                     │
└─────────────────────────────────────┘
```

**Integrasi hiển thị:**

- VCS: GitHub, GitLab, Bitbucket
- CI/CD: Jenkins, CircleCI, Travis
- Communication: Slack, Discord, Teams
- Monitoring: Datadog, New Relic, Sentry
- Incident: PagerDuty, Opsgenie

**Mỗi Integration:**

- Logo + tên
- Mô tả
- Connection status
- Configure button
- Documentation link
- Webhook URL (nếu có)

---

### **5️⃣ Trang Chatbot (AI Assistant - SandboxBot)**

```
┌─────────────────────────────────────┐
│ HEADER - SandboxBot                 │
├─────────────────────────────────────┤
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Bot Status: 🟢 Online           │ │
│ │ Response Time: ~500ms           │ │
│ └─────────────────────────────────┘ │
│                                     │
│ CHAT AREA (Main)                    │
│ ┌─────────────────────────────────┐ │
│ │ Bot: Hi! I'm SandboxBot 🤖      │ │
│ │ How can I help you today?       │ │
│ │                                 │ │
│ │ [Quick Actions:]                │ │
│ │ [Review Code] [Fix Bug]         │ │
│ │ [Write Test] [Optimize]         │ │
│ │                                 │ │
│ │ User: Review this function      │ │
│ │ ...code...                      │ │
│ │                                 │ │
│ │ Bot: ✓ Analysis complete        │ │
│ │ Issues found: 2                 │ │
│ │ [View Report] [Auto Fix]        │ │
│ │                                 │ │
│ └─────────────────────────────────┘ │
│                                     │
│ INPUT AREA                          │
│ ┌─────────────────┬──────────────┐  │
│ │ Type message...  │ [Send] [File] │  │
│ └─────────────────┴──────────────┘  │
│                                     │
│ SIDEBAR (Right)                     │
│ - Recent chats                      │
│ - Saved conversations               │
│ - Knowledge base                    │
│ - Settings                          │
│                                     │
└─────────────────────────────────────┘
```

**Chức năng:**

- Real-time chat with AI
- Code paste & review
- Auto-fix suggestions
- Test generation
- Documentation lookup
- Save conversations
- Export reports

**Capabilities:**

- Code Review
- Bug Detection
- Performance Optimization
- Test Writing
- Documentation Generation
- Refactoring Suggestions

---

### **6️⃣ Trang Công Cụ (Tools)**

```
┌─────────────────────────────────────┐
│ HEADER - Tools                      │
├─────────────────────────────────────┤
│ TOOL CATEGORIES                     │
│ [All] [Code] [Test] [Deploy] [Monitor]
├─────────────────────────────────────┤
│                                     │
│ TOOL CARDS (Grid 2-3 cột)           │
│                                     │
│ ┌──────────────────────────────┐    │
│ │ 🔍 Code Analyzer             │    │
│ │ Analyze code quality metrics │    │
│ │ [Open Tool] [Docs]           │    │
│ └──────────────────────────────┘    │
│                                     │
│ ┌──────────────────────────────┐    │
│ │ 🧪 Test Generator            │    │
│ │ Auto-generate unit tests     │    │
│ │ [Open Tool] [Docs]           │    │
│ └──────────────────────────────┘    │
│                                     │
│ ┌──────────────────────────────┐    │
│ │ 📊 Performance Profiler      │    │
│ │ Profile bottlenecks          │    │
│ │ [Open Tool] [Docs]           │    │
│ └──────────────────────────────┘    │
│                                     │
│ ┌──────────────────────────────┐    │
│ │ 🔐 Security Audit            │    │
│ │ Vulnerability scanning       │    │
│ │ [Open Tool] [Docs]           │    │
│ └──────────────────────────────┘    │
│                                     │
│ ┌──────────────────────────────┐    │
│ │ 📝 API Documentation         │    │
│ │ Auto-generate API docs       │    │
│ │ [Open Tool] [Docs]           │    │
│ └──────────────────────────────┘    │
│                                     │
│ ┌──────────────────────────────┐    │
│ │ 🚀 Deployment Manager        │    │
│ │ One-click deployments        │    │
│ │ [Open Tool] [Docs]           │    │
│ └──────────────────────────────┘    │
│                                     │
└─────────────────────────────────────┘
```

**Danh sách Tools:**

- Code Analyzer
- Test Generator
- Performance Profiler
- Security Audit
- API Documentation
- Deployment Manager
- Log Viewer
- Diff Viewer
- Batch Operations

---

### **7️⃣ Trang Cộng Đồng (Community)**

```
┌─────────────────────────────────────┐
│ HEADER - Community                  │
├─────────────────────────────────────┤
│ TABS                                │
│ [Discussions] [Issues] [Showcase]   │
├─────────────────────────────────────┤
│                                     │
│ SEARCH + FILTER                     │
│ [Search] [Sort: Recent] [Tags]      │
│                                     │
│ DISCUSSION THREADS                  │
│ ┌─────────────────────────────────┐ │
│ │ 👤 John Doe                     │ │
│ │ How to integrate with Docker?   │ │
│ │ ⭐ 12 | 💬 5 replies            │ │
│ │ Tags: [docker] [deploy]         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ 👤 Sarah Smith                  │ │
│ │ Best practices for CI/CD        │ │
│ │ ⭐ 28 | 💬 12 replies           │ │
│ │ Tags: [ci-cd] [automation]      │ │
│ └─────────────────────────────────┘ │
│                                     │
│ PAGINATION / INFINITE SCROLL        │
│                                     │
│ SIDEBAR                             │
│ - Top Contributors                  │
│ - Recent Tags                       │
│ - Announcements                     │
│ - Rules & Guidelines                │
│                                     │
└─────────────────────────────────────┘
```

**Sections:**

- Discussions/Q&A
- Show & Tell (Showcases)
- Feature Requests
- Bug Reports (GitHub Issues synced)
- Announcements
- Top Contributors

**Features:**

- Voting system
- Tagging
- Filtering
- Search
- User badges
- Reputation points

---

### **8️⃣ Trang Sandbox Hub (Dashboard)**

```
┌─────────────────────────────────────┐
│ HEADER (User: John | Settings)      │
├──────────────────┬──────────────────┤
│ LEFT SIDEBAR     │ MAIN CONTENT     │
│                  │                  │
│ 🏠 Dashboard     │ QUICK STATS      │
│ 📦 Projects      │ ┌──────────────┐ │
│ 🤖 SandboxBot    │ │ Active Jobs: 3│ │
│ 🔧 Tools         │ │ Success: 95%  │ │
│ ⚙️ Settings      │ │ Credits: 500h │ │
│ 🔗 Connectors    │ └──────────────┘ │
│ 📊 Analytics     │                  │
│ 📚 Docs          │ RECENT PROJECTS  │
│ 🤝 Community     │ ┌──────────────┐ │
│ ❓ Help          │ │ my-api ⭕    │ │
│ 🚪 Sign out      │ │ Active Jobs: 1│ │
│                  │ │ Last: 2h ago │ │
│                  │ └──────────────┘ │
│                  │                  │
│                  │ ┌──────────────┐ │
│                  │ │ web-app ✅   │ │
│                  │ │ All passed   │ │
│                  │ │ Last: 15m ago│ │
│                  │ └──────────────┘ │
│                  │                  │
│                  │ CREATE NEW +     │
│                  │                  │
│                  │ ACTIVITY LOG     │
│                  │ - Job completed  │
│                  │ - PR created     │
│                  │ - Bug fixed      │
│                  │                  │
└──────────────────┴──────────────────┘
```

**Nội dung chính:**

- Quick Stats (Active jobs, Success rate, Credits)
- Recent Projects (Grid/List)
- Activity Log
- Quick Actions (Create project, Run job)
- Integration Status
- Analytics Overview

**Sidebar Navigation:**

- Dashboard
- Projects
- SandboxBot
- Tools
- Settings
- Connectors
- Analytics
- Docs
- Community
- Help

---

### **9️⃣ Trang Đăng Nhập/Đăng Ký (Auth)**

```
┌──────────────────────────────────┐
│                                  │
│  SANDBOXCODEX LOGO               │
│  "AI Software Engineer"           │
│                                  │
│  ┌────────────────────────────┐  │
│  │ SIGN IN / SIGN UP CARD     │  │
│  ├────────────────────────────┤  │
│  │ [Sign In] [Sign Up]        │  │
│  │                            │  │
│  │ Email: [_____________]     │  │
│  │ Password: [_____________]  │  │
│  │ [Remember me]              │  │
│  │                            │  │
│  │ [Continue with GitHub] ⭐   │  │
│  │ [Continue with Google]     │  │
│  │                            │  │
│  │ ┌──────────────────────┐   │  │
│  │ │ Sign In / Join FREE   │   │  │
│  │ └──────────────────────┘   │  │
│  │                            │  │
│  │ [Forgot password?]         │  │
│  │ [Don't have account? Sign up] │
│  │                            │  │
│  └────────────────────────────┘  │
│                                  │
│  Benefits strip:                 │
│  ✓ Free tier available           │
│  ✓ No credit card                │
│  ✓ 3 projects included           │
│                                  │
│  Footer: Terms | Privacy | Support│
│                                  │
└──────────────────────────────────┘
```

**Loại Auth:**

- Email/Password
- GitHub OAuth ⭐ (Primary)
- Google OAuth
- 2FA optional

**Trang Sign Up thêm:**

- Company name
- Role (Developer/Team Lead/DevOps)
- Team size
- Use case selection

---

### **🔟 Trang Cài Đặt (Settings)**

```
┌──────────────────────────────────────┐
│ HEADER - Settings                    │
├─────────────────────┬────────────────┤
│ LEFT MENU           │ CONTENT AREA   │
│ Account             │                │
│ • Profile           │ SETTINGS TABS  │
│ • Email & Auth      │ ┌────────────┐ │
│ • Password          │ │ Account    │ │
│ • 2FA               │ │ Profile    │ │
│                     │ │ Billing    │ │
│ Project             │ │ API Keys   │ │
│ • General           │ │ Webhooks   │ │
│ • Members           │ │ Secrets    │ │
│ • Integrations      │ │ Advanced   │ │
│ • Billing           │ └────────────┘ │
│                     │                │
│ System              │ FORM CONTENT   │
│ • API Keys          │ ┌────────────┐ │
│ • Webhooks          │ │ Name:__    │ │
│ • Secrets           │ │ Email:__   │ │
│ • Tokens            │ │ Role: [▼]  │ │
│ • Advanced          │ │ [Save]     │ │
│ • Danger Zone       │ └────────────┘ │
│                     │                │
│                     │ API KEYS       │
│                     │ ┌────────────┐ │
│                     │ │ Key: xxx..│ │
│                     │ │ Created:.. │ │
│                     │ │ [Copy]     │ │
│                     │ │ [Delete]   │ │
│                     │ └────────────┘ │
│                     │ [+ New Key]    │
│                     │                │
└─────────────────────┴────────────────┘
```

**Sections:**

- **Account**: Profile, Email, Password, 2FA
- **Projects**: General, Members, Integrations, Billing
- **System**: API Keys, Webhooks, Secrets, Tokens
- **Advanced**: Rate limits, IP whitelist, Danger zone

**Chức năng:**

- Update profile
- Change password
- Enable 2FA
- Manage API keys
- Configure webhooks
- Store secrets
- Team management
- Billing info

---

### **1️⃣1️⃣ Trang Server (SandboxCode Server)**

```
┌──────────────────────────────────────┐
│ HEADER - SandboxCode Server          │
├──────────────────────────────────────┤
│ SERVER STATUS PANEL                  │
│ ┌────────────────────────────────┐   │
│ │ 🟢 Production: ONLINE          │   │
│ │ Uptime: 99.98%                 │   │
│ │ Response: 145ms                │   │
│ │ CPU: 32% | Memory: 58% | Disk: 42%│
│ └────────────────────────────────┘   │
│                                      │
│ QUICK ACTIONS                        │
│ [Restart] [Scale] [Logs] [Monitor]   │
│                                      │
├──────────────────────────────────────┤
│ TABS                                 │
│ [Overview] [Instances] [Config]     │
│ [Logs] [Monitoring] [Backups]       │
├──────────────────────────────────────┤
│                                      │
│ OVERVIEW TAB:                        │
│ ┌────────────────────────────────┐   │
│ │ Active Instances: 4            │   │
│ │ Deployments: 23/day            │   │
│ │ Sandboxes Running: 156         │   │
│ │ Total Executions: 12.5K        │   │
│ └────────────────────────────────┘   │
│                                      │
│ PERFORMANCE CHARTS                   │
│ ┌────────────────────────────────┐   │
│ │ CPU Usage (Last 24h)           │   │
│ │ [Graph]                        │   │
│ └────────────────────────────────┘   │
│                                      │
│ ┌────────────────────────────────┐   │
│ │ Memory Usage                   │   │
│ │ [Graph]                        │   │
│ └────────────────────────────────┘   │
│                                      │
│ INSTANCES LIST                       │
│ ┌─────┬──────┬─────┬──────┬─────┐   │
│ │Name │Status│CPU%│Memory│Logs │   │
│ ├─────┼──────┼─────┼──────┼─────┤   │
│ │prod1│ 🟢  │18% │45%   │[View]   │
│ │prod2│ 🟢  │24% │52%   │[View]   │
│ │test1│ 🟡  │8%  │18%   │[View]   │
│ └─────┴──────┴─────┴──────┴─────┘   │
│                                      │
└──────────────────────────────────────┘
```

**Sections:**

- **Status**: Health check, Uptime, Response time
- **Instances**: List, CPU/Memory, Start/Stop
- **Configuration**: Env vars, Docker settings
- **Logs**: Real-time logs, Search, Export
- **Monitoring**: Graphs, Alerts, Metrics
- **Backups**: List, Restore, Schedule
- **Deployment**: History, Rollback, Deploy new

**Chức năng:**

- Real-time server monitoring
- Auto-scaling rules
- Performance alerts
- Deployment management
- Log aggregation
- Backup/Restore
- Environment configuration

---

### **1️⃣2️⃣ Trang MCP (Model Context Protocol)**

```
┌──────────────────────────────────────┐
│ HEADER - Model Context Protocol      │
├──────────────────────────────────────┤
│ STATUS: Connected to 8 AI Models     │
│                                      │
├──────────────────────────────────────┤
│ TABS                                 │
│ [Models] [Prompts] [Context]        │
│ [History] [Config] [Metrics]        │
├──────────────────────────────────────┤
│                                      │
│ CONNECTED MODELS                     │
│ ┌────────────────────────────────┐   │
│ │ GPT-4 (Primary)                │   │
│ │ Status: 🟢 Active              │   │
│ │ Requests: 1,234/day            │   │
│ │ Avg Token: 2,890               │   │
│ │ Cost: $12.34/day               │   │
│ │ [Settings] [Disconnect]        │   │
│ └────────────────────────────────┘   │
│                                      │
│ ┌────────────────────────────────┐   │
│ │ Claude 3 Opus                  │   │
│ │ Status: 🟢 Active              │   │
│ │ Requests: 456/day              │   │
│ │ Avg Token: 4,120               │   │
│ │ Cost: $8.90/day                │   │
│ │ [Settings] [Disconnect]        │   │
│ └────────────────────────────────┘   │
│                                      │
│ SYSTEM PROMPTS                       │
│ ┌────────────────────────────────┐   │
│ │ Active Prompt: Code Reviewer   │   │
│ │ Version: 2.3                   │   │
│ │ Updated: 2 hours ago           │   │
│ │                                │   │
│ │ [Edit] [View History] [Reset]  │   │
│ └────────────────────────────────┘   │
│                                      │
│ CONTEXT INJECTION                    │
│ ┌────────────────────────────────┐   │
│ │ Repository Context: Enabled    │   │
│ │ File Structure: Enabled        │   │
│ │ Git History: Last 100 commits  │   │
│ │ Team Guidelines: Enabled       │   │
│ │ [Customize] [Save]             │   │
│ └────────────────────────────────┘   │
│                                      │
│ USAGE METRICS                        │
│ ┌────────────────────────────────┐   │
│ │ Tokens Used (Today): 45K/100K  │   │
│ │ Cost (Today): $2.15            │   │
│ │ Requests: 234                  │   │
│ │ Avg Response: 1.2s             │   │
│ │ [View Analytics]               │   │
│ └────────────────────────────────┘   │
│                                      │
└──────────────────────────────────────┘
```

**Sections:**

- **Connected Models**: List, status, usage
- **System Prompts**: Edit, version history
- **Context Management**: Injection settings
- **History**: Request logs, responses
- **Configuration**: API keys, rate limits
- **Metrics**: Token usage, costs, performance

**Chức năng:**

- Connect/disconnect models
- Edit system prompts
- Configure context injection
- Monitor usage & costs
- View request history
- A/B testing prompts
- Performance analytics

---

### **1️⃣3️⃣ Trang Đầu Nối (Connectors/Webhooks)**

```
┌──────────────────────────────────────┐
│ HEADER - Connectors & Webhooks       │
├──────────────────────────────────────┤
│ TABS                                 │
│ [Webhooks] [Event Subscriptions]    │
│ [Integrations] [Test]               │
├──────────────────────────────────────┤
│                                      │
│ WEBHOOKS LIST                        │
│ ┌────────────────────────────────┐   │
│ │ ✓ GitHub PR Events             │   │
│ │ URL: https://api.example.../gh │   │
│ │ Events: pull_request, push     │   │
│ │ Status: 🟢 Active (Last: 5m)   │   │
│ │ Deliveries: 156 / 156          │   │
│ │ [Edit] [Test] [Delete] [Logs]  │   │
│ └────────────────────────────────┘   │
│                                      │
│ ┌────────────────────────────────┐   │
│ │ ✓ Slack Notifications          │   │
│ │ URL: https://slack.example...  │   │
│ │ Events: job_completed, error   │   │
│ │ Status: 🟢 Active (Last: 10m)  │   │
│ │ Deliveries: 234 / 235 (99.6%)  │   │
│ │ [Edit] [Test] [Delete] [Logs]  │   │
│ └────────────────────────────────┘   │
│                                      │
│ ┌────────────────────────────────┐   │
│ │ ⭕ Discord Alerts              │   │
│ │ URL: https://discord.example...│   │
│ │ Events: error, warning         │   │
│ │ Status: 🔴 Inactive (Paused)   │   │
│ │ Deliveries: 0 / 0             │   │
│ │ [Edit] [Enable] [Delete] [Logs]    │
│ └────────────────────────────────┘   │
│                                      │
│ [+ ADD NEW WEBHOOK]                  │
│                                      │
│ EVENT SUBSCRIPTIONS                  │
│ ┌────────────────────────────────┐   │
│ │ Events:                        │   │
│ │ ☑ pull_request.opened         │   │
│ │ ☑ pull_request.closed         │   │
│ │ ☑ repository.push             │   │
│ │ ☑ job.started                 │   │
│ │ ☑ job.completed               │   │
│ │ ☑ job.failed                  │   │
│ │ ☑ sandbox.created             │   │
│ │ ☑ sandbox.destroyed           │   │
│ │                                │   │
│ │ [Save Changes]                 │   │
│ └────────────────────────────────┘   │
│                                      │
│ TEST WEBHOOK                         │
│ ┌────────────────────────────────┐   │
│ │ Select Webhook: [GitHub PR ▼]  │   │
│ │ Event Type: [push ▼]           │   │
│ │ Payload: [Sample payload ...]  │   │
│ │ [Test Delivery]                │   │
│ │ Response: 200 OK (1.2s)        │   │
│ └────────────────────────────────┘   │
│                                      │
│ DELIVERY LOGS                        │
│ ┌────────────────────────────────┐   │
│ │ Search: [__________] [Filter]  │   │
│ │                                │   │
│ │ 2024-01-15 14:32:45 🟢 200 OK │   │
│ │ Event: pull_request.opened     │   │
│ │ Delivered to: GitHub PR Events │   │
│ │ Duration: 1.2s                 │   │
│ │ [View Details]                 │   │
│ │                                │   │
│ │ 2024-01-15 14:30:12 🔴 500 ERR│   │
│ │ Event: job.failed              │   │
│ │ Delivered to: Discord Alerts   │   │
│ │ Error: Connection timeout      │   │
│ │ [View Details] [Retry]         │   │
│ │                                │   │
│ └────────────────────────────────┘   │
│                                      │
└──────────────────────────────────────┘
```

**Sections:**

- **Webhooks**: Create, edit, delete, test
- **Event Subscriptions**: Select events to trigger
- **Test Webhook**: Send test payloads
- **Delivery Logs**: View all webhook deliveries
- **Retry Failed**: Manual retry for failed deliveries
- **Rate Limiting**: Configure limits per webhook

**Event Types:**

- Repository: push, pull_request
- Job: started, completed, failed
- Sandbox: created, destroyed, timeout
- System: alert, error, warning

---

## 🎨 Design Principles

### **Color Scheme (Dark Mode)**

- Primary: `#3b82f6` (Blue)
- Background: `#0a0b0d` (Very dark gray)
- Cards: `#0d0f13` (Slightly lighter)
- Accent: `#22c55e` (Green - success)
- Warning: `#f5a623` (Amber)
- Error: `#ef4444` (Red)
- Text: `#e9edf1` (Off-white)

### **Typography**

- Font: JetBrains Mono, SFMono
- Headings: 14px - 28px, bold
- Body: 12px - 15px, regular
- Code: 11px - 12px, monospace

### **Components**

- Buttons: Solid, outline, ghost variants
- Forms: Simple with clear labels
- Cards: Bordered with hover effects
- Navigation: Sticky header + sidebar
- Alerts: Toast notifications

### **Responsive**

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## 📁 Folder Structure

```
SandboxCode/
├── public/
│   ├── index.html              # Landing page
│   ├── pages/
│   │   ├── docs.html           # Documentation
│   │   ├── templates.html      # Templates
│   │   ├── integrations.html   # Integrations
│   │   ├── chatbot.html        # SandboxBot
│   │   ├── tools.html          # Tools
│   │   ├── community.html      # Community
│   │   ├── auth.html           # Login/Signup
│   │   ├── dashboard.html      # Hub Dashboard
│   │   ├── settings.html       # Settings
│   │   ├── server.html         # Server Management
│   │   ├── mcp.html            # MCP Config
│   │   └── connectors.html     # Webhooks
│   ├── style.css               # Main styles
│   ├── main.js                 # Main interactivity
│   └── assets/
│       ├── icons/
│       ├── logos/
│       └── images/
├── docs/
│   └── api-reference.md        # API docs
└── README.md
```

---

## 🔄 Navigation Flow

```
Landing Page
├── Sign In/Up → Dashboard
├── Docs → Docs Page
├── Templates → Templates Page
├── Integrations → Integrations Page
└── Community → Community Page

Dashboard (Authenticated)
├── SandboxBot ← Chatbot
├── Tools ← Tools Page
├── Settings ← Settings
├── Connectors ← Webhooks
├── Server Management ← Server
├── MCP Config ← MCP
└── Back to Docs/Community/Tools
```

---

## 📊 Priority Implementation Order

1. **Phase 1** (MVP): Landing, Docs, Auth
2. **Phase 2**: Dashboard, Settings, Templates
3. **Phase 3**: Chatbot, Tools, Integrations
4. **Phase 4**: Community, Server, Connectors
5. **Phase 5**: MCP, Advanced Analytics

---

## 🚀 Next Steps

- [ ] Create HTML files for each page
- [ ] Implement responsive CSS
- [ ] Build interactive JavaScript
- [ ] Add API integration
- [ ] Setup routing
- [ ] Deploy to production

---

**Updated**: July 15, 2026  
**Version**: 1.0
