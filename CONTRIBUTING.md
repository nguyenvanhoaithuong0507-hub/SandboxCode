# Contributing to SandboxCode

Cảm ơn bạn đã quan tâm đến việc đóng góp vào SandboxCode! 🎉

## Hướng Dẫn Đóng Góp

Vui lòng làm theo các hướng dẫn này để giúp duy trì chất lượng code cao.

### Prerequisites (Điều kiện tiên quyết)

- Node.js >= 18.0
- npm (hoặc pnpm/yarn)
- Git

### Setup Local Development

1. **Fork & Clone Repository**

```bash
git clone https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode.git
cd SandboxCode
```

2. **Install Dependencies**

```bash
npm install
```

3. **Start Development Server**

```bash
npm start
```

4. **Verify Setup**

```bash
npm run build  # Should build successfully
```

### Code Quality Standards

Tất cả code phải tuân theo các tiêu chuẩn sau:

#### ESLint (JavaScript/JSX/TypeScript)

```bash
npm run lint        # Check for errors
npm run lint:fix    # Auto-fix issues
```

**Rules:**

- No console.log except warn/error
- Use const/let (no var)
- Use === instead of ==
- No eval or implied eval
- No unused variables

#### Prettier (Code Formatting)

```bash
npm run format           # Format all files
npm run format:check     # Check formatting
```

**Settings:**

- Line width: 100 characters
- Tabs: 2 spaces (no tabs)
- Semicolons: required
- Single quotes: true
- Trailing comma: es5

#### Markdown Lint (Documentation)

```bash
npm run lint:md         # Check markdown
npm run lint:md:fix     # Fix markdown issues
```

**Rules:**

- Line length: max 120 characters
- Consistent heading style
- Proper list indentation

### Git Hooks (Automatic Validation)

Pre-commit hooks run automatically:

- **pre-commit**: Runs `lint-staged` → lints and formats changed files
- **pre-push**: Runs `npm run build` → ensures build succeeds

If validation fails:

1. Fix the issues shown
2. Stage the changes: `git add .`
3. Commit again: `git commit -m "message"`

### Making Changes

#### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/bug-description
```

#### 2. Make Your Changes

- Edit files
- Test changes locally
- Follow code standards above

#### 3. Run Validation

```bash
npm run validate  # Runs: lint + lint:md + format:check + build
```

#### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature" # or "fix:", "docs:", etc.
```

**Commit Message Format:**

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (formatting, missing semicolons)
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `test`: Tests
- `chore`: Build/tooling

Examples:

```
feat(docs): add new guide for deployment
fix(cli): resolve broken markdown links
docs: update README with examples
```

#### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

#### 6. Create Pull Request

- Go to GitHub
- Click "Compare & pull request"
- Fill in description
- Submit PR

### PR Checklist

Before submitting PR, ensure:

- [ ] Changes pass local validation: `npm run validate`
- [ ] No console.log statements (except warn/error)
- [ ] Code follows naming conventions
- [ ] Documentation updated if needed
- [ ] Commit messages are clear
- [ ] No breaking changes (or clearly documented)
- [ ] GitHub Actions CI passes (green checkmark)

### Common Issues & Solutions

#### ESLint Errors

```bash
# Quick fix most issues
npm run lint:fix
```

Common issues:

- `no-console`: Remove log statements
- `no-unused-vars`: Remove or prefix with `_` if intentional
- `prefer-const`: Change `let` to `const` if not reassigned

#### Prettier Formatting

```bash
# Auto-format everything
npm run format
```

#### Build Fails (Broken Links)

```bash
# Check for broken markdown links
npm run build

# Error: "ESC: Error with broken link"
# Solution: Fix the link in docs or update link path
```

#### Git Hook Bypassing (Not Recommended)

```bash
# Force commit (skip hooks - avoid this!)
git commit --no-verify

# Better: Fix the issues instead
npm run lint:fix && npm run format
```

### Documentation Guidelines

#### Adding New Documentation

1. Create `.md` file in `docs/` directory:

```markdown
---
sidebar_position: 3
title: Your Page Title
description: Brief description for SEO
---

# Your Page Title

Content...
```

2. Update `sidebars.js`:

```js
module.exports = {
  tutorialSidebar: [
    'intro',
    'your-page', // Add here
  ],
};
```

3. Check markdown:

```bash
npm run lint:md:fix
```

#### Writing Standards

- Use clear, simple language
- Include code examples
- Add headings for sections
- Link to related docs
- Keep line length <= 120 chars

### Testing Your Changes

#### Local Testing

```bash
npm start              # Start dev server
# Open http://localhost:3000/SandboxCode/
# Test your changes manually
```

#### Build Testing

```bash
npm run build          # Build production
npm run serve          # Serve built version
# Open http://localhost:3000/SandboxCode/
# Test built version
```

### Performance Tips

- Keep bundle small
- Lazy load components when possible
- Optimize images
- Minimize CSS/JS

### Security Considerations

- Never commit secrets (API keys, tokens)
- Use environment variables for sensitive data
- Validate user input
- Keep dependencies updated

### Ask for Help

- Check existing [Issues](https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode/issues)
- Read documentation
- Start a [Discussion](https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode/discussions)
- Ask maintainers in PR

### Code Review Process

1. Submit PR
2. CI runs validation (linting, build, etc.)
3. Maintainers review code
4. Request changes if needed
5. Address feedback
6. PR approved & merged

### Recognition

Contributors are recognized in:

- [Contributors list](https://github.com/nguyenvanhoaithuong0507-hub/SandboxCode/graphs/contributors)
- Release notes (for significant contributions)

---

**Thank you for contributing! 💖**

Questions? Open an issue or discussion on GitHub.
