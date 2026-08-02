'use strict';

/**
 * Tests for .github/FIX_404_ERROR.md
 *
 * This repository has no existing unit test framework configured
 * (see package.json scripts: lint, lint:md, format, build). These
 * tests use Node's built-in test runner (available in Node >= 18,
 * matching the "engines" field in package.json) so no new
 * dependencies are required.
 *
 * The tests validate the structural integrity and factual
 * consistency of the FIX_404_ERROR.md documentation file, since it
 * is a plain-text guide with no executable code of its own.
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const DOC_PATH = path.join(__dirname, '..', 'FIX_404_ERROR.md');
const CONFIG_PATH = path.join(__dirname, '..', '..', 'docusaurus.config.js');

function readDoc() {
  return fs.readFileSync(DOC_PATH, 'utf8');
}

test('FIX_404_ERROR.md exists and is non-empty', () => {
  assert.ok(fs.existsSync(DOC_PATH), 'expected FIX_404_ERROR.md to exist in .github/');
  const content = readDoc();
  assert.ok(content.trim().length > 0, 'expected FIX_404_ERROR.md to have content');
});

test('contains the expected top-level title', () => {
  const content = readDoc();
  assert.match(content, /^## Khắc phục lỗi 404 trên GitHub Pages/m);
});

test('documents all 5 remediation steps in order', () => {
  const content = readDoc();
  const stepHeadings = [...content.matchAll(/^#### \*\*Bước (\d+):\*\*/gm)].map((m) =>
    Number(m[1])
  );
  assert.deepEqual(stepHeadings, [1, 2, 3, 4, 5], 'expected steps Bước 1 through Bước 5, in order');
});

test('includes the required troubleshooting section headings', () => {
  const content = readDoc();
  const expectedHeadings = [
    '### Nguyên Nhân',
    '### Sẽ Mất Bao Lâu?',
    '### Kiểm Tra Trạng Thái',
    '### Nếu Vẫn Lỗi 404',
    '## Tóm Tắt Quy Trình',
  ];
  for (const heading of expectedHeadings) {
    assert.ok(
      content.includes(heading),
      `expected document to include heading: "${heading}"`
    );
  }
});

test('has balanced (even number of) triple-backtick code fences', () => {
  const content = readDoc();
  const fenceCount = (content.match(/```/g) || []).length;
  assert.equal(fenceCount % 2, 0, 'expected an even number of ``` fences (all code blocks closed)');
  assert.ok(fenceCount > 0, 'expected at least one code block in the document');
});

test('bash code blocks only contain git push commands referencing main', () => {
  const content = readDoc();
  const bashBlocks = [...content.matchAll(/```bash\n([\s\S]*?)```/g)].map((m) => m[1]);
  assert.ok(bashBlocks.length >= 1, 'expected at least one ```bash code block');
  for (const block of bashBlocks) {
    const commandLines = block
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('#'));
    for (const line of commandLines) {
      assert.match(
        line,
        /^git push origin main( --force)?$/,
        `unexpected command in bash block: "${line}"`
      );
    }
  }
});

test('references the correct GitHub repository URL', () => {
  const content = readDoc();
  assert.match(
    content,
    /https:\/\/github\.com\/nguyenvanhoaithuong0507-hub\/SandboxCode\b/
  );
});

test('references the correct GitHub Pages site URL', () => {
  const content = readDoc();
  assert.match(
    content,
    /https:\/\/nguyenvanhoaithuong0507-hub\.github\.io\/SandboxCode\/?/
  );
});

test('references only https URLs (no plain http links)', () => {
  const content = readDoc();
  const urls = content.match(/https?:\/\/[^\s)`]+/g) || [];
  assert.ok(urls.length > 0, 'expected at least one URL in the document');
  for (const url of urls) {
    assert.ok(url.startsWith('https://'), `expected secure URL, got: "${url}"`);
  }
});

test('the documented site URL matches docusaurus.config.js url + baseUrl', () => {
  const content = readDoc();
  const config = fs.readFileSync(CONFIG_PATH, 'utf8');

  const urlMatch = config.match(/url:\s*'([^']+)'/);
  const baseUrlMatch = config.match(/baseUrl:\s*'([^']+)'/);
  assert.ok(urlMatch, 'expected to find url in docusaurus.config.js');
  assert.ok(baseUrlMatch, 'expected to find baseUrl in docusaurus.config.js');

  const expectedSiteUrl = urlMatch[1] + baseUrlMatch[1];
  assert.ok(
    content.includes(expectedSiteUrl),
    `expected FIX_404_ERROR.md to reference the configured site URL "${expectedSiteUrl}"`
  );
});

test('the documented baseUrl matches docusaurus.config.js baseUrl', () => {
  const content = readDoc();
  const config = fs.readFileSync(CONFIG_PATH, 'utf8');

  const baseUrlMatch = config.match(/baseUrl:\s*'([^']+)'/);
  assert.ok(baseUrlMatch, 'expected to find baseUrl in docusaurus.config.js');

  assert.ok(
    content.includes(`baseUrl: '${baseUrlMatch[1]}'`),
    `expected FIX_404_ERROR.md to reference baseUrl: '${baseUrlMatch[1]}'`
  );
});

test('summary block lists steps consistent with the "Source = GitHub Actions" fix', () => {
  const content = readDoc();
  const summaryMatch = content.match(/## Tóm Tắt Quy Trình\n\n```\n([\s\S]*?)```/);
  assert.ok(summaryMatch, 'expected a fenced summary block under "Tóm Tắt Quy Trình"');

  const summary = summaryMatch[1];
  assert.match(summary, /Source = "GitHub Actions"/);
  assert.match(summary, /git push origin main/);
});

test('does not contain unresolved template placeholders', () => {
  const content = readDoc();
  assert.doesNotMatch(content, /\{\{.*?\}\}/, 'expected no unresolved {{ }} placeholders');
  assert.doesNotMatch(content, /TODO|FIXME|XXX/i, 'expected no leftover TODO/FIXME markers');
});