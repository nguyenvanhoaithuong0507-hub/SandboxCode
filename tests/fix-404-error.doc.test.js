'use strict';

/**
 * Tests for .github/FIX_404_ERROR.md
 *
 * This repository has no JS unit-test framework configured (no Jest/Vitest/Mocha).
 * These tests use Node's built-in test runner (`node:test`, available in Node >= 18,
 * matching the `engines.node` requirement in package.json) so they can run with:
 *
 *   node --test tests/fix-404-error.doc.test.js
 *
 * The tested file is a pure Markdown troubleshooting guide (no executable code), so
 * these tests validate its structural integrity and factual consistency with the
 * project's actual configuration (docusaurus.config.js, GitHub workflow names) rather
 * than "business logic".
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const DOC_PATH = path.join(__dirname, '..', '.github', 'FIX_404_ERROR.md');
const DOCUSAURUS_CONFIG_PATH = path.join(__dirname, '..', 'docusaurus.config.js');
const DEPLOY_WORKFLOW_PATH = path.join(__dirname, '..', '.github', 'workflows', 'deploy.yml');

/** Extracts every http(s) URL from a chunk of markdown, stripping trailing markdown
 * punctuation (e.g. a closing `**` for bold, or a trailing `)`./`,`/`.`) that a naive
 * greedy regex would otherwise swallow. */
function extractUrls(markdown) {
  const raw = markdown.match(/https?:\/\/[^\s)>`]+/g) || [];
  return raw.map((url) => url.replace(/[).,*`]+$/, ''));
}

/**
 * Reads a single string config field (e.g. `url: '...'`) out of docusaurus.config.js
 * via regex rather than `require()`-ing the file, since requiring it would pull in npm
 * dependencies (e.g. prism-react-renderer) that may not be installed in an environment
 * where only these tests need to run.
 */
function readDocusaurusConfigField(fieldName) {
  const configSource = fs.readFileSync(DOCUSAURUS_CONFIG_PATH, 'utf8');
  const match = configSource.match(new RegExp(`${fieldName}:\\s*'([^']*)'`));
  assert.ok(match, `expected to find "${fieldName}" in docusaurus.config.js`);
  return match[1];
}

let content;

test.before(() => {
  content = fs.readFileSync(DOC_PATH, 'utf8');
});

test('FIX_404_ERROR.md exists and is a non-empty UTF-8 text file', () => {
  assert.doesNotThrow(() => fs.accessSync(DOC_PATH, fs.constants.R_OK));
  assert.ok(content.length > 0, 'file should not be empty');
});

test('file ends with a trailing newline', () => {
  assert.ok(content.endsWith('\n'), 'file should end with a newline character');
});

test('has the expected top-level title', () => {
  const lines = content.split('\n');
  assert.equal(lines[0], '## Khắc phục lỗi 404 trên GitHub Pages');
});

test('contains all expected section headings in order', () => {
  const expectedHeadings = [
    '## Khắc phục lỗi 404 trên GitHub Pages',
    '### Nguyên Nhân',
    '### Cách Khắc Phục (5 bước)',
    '### Sẽ Mất Bao Lâu?',
    '### Kiểm Tra Trạng Thái',
    '### Nếu Vẫn Lỗi 404',
    '## Tóm Tắt Quy Trình',
  ];

  let searchFrom = 0;
  for (const heading of expectedHeadings) {
    const idx = content.indexOf(heading, searchFrom);
    assert.notEqual(idx, -1, `expected to find heading "${heading}"`);
    searchFrom = idx + heading.length;
  }
});

test('documents all 5 fix steps, in sequential order', () => {
  const stepHeadings = [
    '#### **Bước 1:**',
    '#### **Bước 2:**',
    '#### **Bước 3:**',
    '#### **Bước 4:**',
    '#### **Bước 5:**',
  ];

  let searchFrom = 0;
  for (const step of stepHeadings) {
    const idx = content.indexOf(step, searchFrom);
    assert.notEqual(idx, -1, `expected to find step heading "${step}"`);
    searchFrom = idx + step.length;
  }
});

test('does not skip or duplicate step numbers (exactly one of each Bước 1-5)', () => {
  for (let i = 1; i <= 5; i += 1) {
    const matches = content.match(new RegExp(`Bước ${i}[:\\s]`, 'g')) || [];
    assert.equal(matches.length, 1, `expected exactly one occurrence of "Bước ${i}"`);
  }
  // No "Bước 6" or beyond should exist.
  assert.equal(/Bước 6/.test(content), false);
});

test('fenced code blocks are balanced and there are exactly 3 of them', () => {
  const fenceMatches = content.match(/```/g) || [];
  assert.equal(fenceMatches.length % 2, 0, 'code fences must come in open/close pairs');
  assert.equal(fenceMatches.length, 6, 'expected 3 fenced code blocks (6 fence markers)');
});

test('bold markdown markers (**) are balanced', () => {
  const boldMatches = content.match(/\*\*/g) || [];
  assert.equal(boldMatches.length % 2, 0, '"**" bold markers must be balanced (even count)');
});

test('contains the expected git push remediation commands', () => {
  assert.match(content, /git push origin main\b/);
  assert.match(content, /git push origin main --force/);
});

test('references the actual GitHub repository URL', () => {
  assert.match(
    content,
    /https:\/\/github\.com\/nguyenvanhoaithuong0507-hub\/SandboxCode/
  );
});

test('references the correct live GitHub Pages site URL, consistent with docusaurus.config.js', () => {
  const siteUrl = readDocusaurusConfigField('url');
  const baseUrl = readDocusaurusConfigField('baseUrl');
  const expectedSiteUrl = `${siteUrl}${baseUrl}`;

  assert.match(content, /https:\/\/nguyenvanhoaithuong0507-hub\.github\.io\/SandboxCode\//);

  const urls = extractUrls(content);
  assert.ok(
    urls.includes(expectedSiteUrl),
    `expected the doc to reference the live site URL "${expectedSiteUrl}"`
  );
});

test('mentions the configured baseUrl for troubleshooting the site config', () => {
  const baseUrl = readDocusaurusConfigField('baseUrl');
  assert.ok(
    content.includes(`baseUrl: '${baseUrl}'`),
    'doc should reference the actual baseUrl value used in docusaurus.config.js'
  );
});

test('references a workflow name that matches an actual GitHub Actions workflow', () => {
  const deployWorkflow = fs.readFileSync(DEPLOY_WORKFLOW_PATH, 'utf8');
  const nameMatch = deployWorkflow.match(/^name:\s*(.+)$/m);
  assert.ok(nameMatch, 'deploy.yml should declare a workflow name');

  const workflowName = nameMatch[1].trim();
  assert.ok(
    content.includes(`**"${workflowName}"**`),
    `doc should reference the actual workflow name "${workflowName}"`
  );
});

test('all http(s) links found in the document are syntactically valid URLs', () => {
  const urls = extractUrls(content);
  assert.ok(urls.length > 0, 'expected at least one URL in the document');
  for (const url of urls) {
    assert.doesNotThrow(() => new URL(url), `"${url}" should be a valid URL`);
  }
});

test('does not contain script tags or other unsafe embedded HTML', () => {
  assert.doesNotMatch(content.toLowerCase(), /<script/);
  assert.doesNotMatch(content.toLowerCase(), /<iframe/);
  assert.doesNotMatch(content, /javascript:/i);
});

test('does not contain destructive git commands beyond the documented --force push', () => {
  assert.doesNotMatch(content, /git\s+reset\s+--hard/);
  assert.doesNotMatch(content, /git\s+clean\s+-f/);
  assert.doesNotMatch(content, /rm\s+-rf/);
});

test('does not contain suspiciously long lines (sanity check against content corruption)', () => {
  const lines = content.split('\n');
  for (const [index, line] of lines.entries()) {
    assert.ok(
      line.length <= 500,
      `line ${index + 1} is unexpectedly long (${line.length} chars): possible corruption`
    );
  }
});

test('ends with a closing summary checklist referencing all major steps', () => {
  const summaryIdx = content.indexOf('## Tóm Tắt Quy Trình');
  assert.notEqual(summaryIdx, -1);

  const summarySection = content.slice(summaryIdx);
  assert.match(summarySection, /Settings.*Pages.*Source/);
  assert.match(summarySection, /git push origin main/);
  assert.match(summarySection, /Site live/);
});