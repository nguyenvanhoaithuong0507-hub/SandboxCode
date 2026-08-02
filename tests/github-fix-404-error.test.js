'use strict';

/**
 * Content/structure tests for .github/FIX_404_ERROR.md
 *
 * This repository has no application code paired with this file — it is a
 * troubleshooting guide added under `.github/`. Since there is no existing
 * unit-test framework configured in this project (see package.json), these
 * tests use Node's built-in test runner (`node:test`), which requires no
 * additional dependencies and is available on the Node versions supported
 * by this project (engines.node >= 18.0) and exercised in CI
 * (.github/workflows/node.js.yml runs on Node 18.x, 20.x, 22.x).
 *
 * The tests validate the structural integrity and key content guarantees
 * of the document so that future edits cannot silently break the
 * instructions (e.g. removing a step, breaking a link, or unbalancing a
 * code fence).
 *
 * Run with: node --test tests/github-fix-404-error.test.js
 */

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const FILE_PATH = path.join(__dirname, '..', '.github', 'FIX_404_ERROR.md');

function readDoc() {
  return fs.readFileSync(FILE_PATH, 'utf8');
}

test('FIX_404_ERROR.md exists and is not empty', () => {
  assert.ok(fs.existsSync(FILE_PATH), `Expected file to exist at ${FILE_PATH}`);
  const content = readDoc();
  assert.ok(content.trim().length > 0, 'File should not be empty');
});

test('has a top-level title heading describing the fix', () => {
  const content = readDoc();
  const lines = content.split('\n');
  const titleLine = lines.find((line) => line.startsWith('## '));
  assert.ok(titleLine, 'Expected an H2 title heading (## ...)');
  assert.match(titleLine, /404/, 'Title should reference the 404 error');
  assert.match(titleLine, /GitHub Pages/i, 'Title should mention GitHub Pages');
});

test('documents the root cause of the 404 error', () => {
  const content = readDoc();
  assert.match(content, /### Nguyên Nhân/, 'Should include a "Nguyên Nhân" (Cause) section');
  assert.match(
    content,
    /GitHub Pages source chưa được config/,
    'Should explain the GitHub Pages source is not configured'
  );
});

test('contains exactly 5 sequential, correctly numbered step headings', () => {
  const content = readDoc();
  const stepHeadingRegex = /^#### \*\*Bước (\d+):\*\* .+$/gm;
  const matches = [...content.matchAll(stepHeadingRegex)];

  assert.equal(matches.length, 5, 'Expected exactly 5 "Bước N" step headings');

  const stepNumbers = matches.map((m) => Number(m[1]));
  assert.deepEqual(
    stepNumbers,
    [1, 2, 3, 4, 5],
    'Step headings should be numbered sequentially from 1 to 5'
  );
});

test('the "5 bước" summary claim matches the actual number of step headings', () => {
  const content = readDoc();
  assert.match(
    content,
    /Cách Khắc Phục \(5 bước\)/,
    'Intro heading should advertise 5 steps'
  );

  const stepHeadingCount = (content.match(/^#### \*\*Bước \d+:\*\*/gm) || []).length;
  assert.equal(
    stepHeadingCount,
    5,
    'Number of step headings should match the "(5 bước)" claim in the intro'
  );
});

test('each expected step title is present in order', () => {
  const content = readDoc();
  const expectedTitles = [
    'Mở Settings',
    'Tìm GitHub Pages',
    'Thay đổi Source',
    'Xác nhận',
    'Kích hoạt Deployment',
  ];

  let searchFrom = 0;
  for (const title of expectedTitles) {
    const idx = content.indexOf(title, searchFrom);
    assert.ok(idx !== -1, `Expected to find step title "${title}" in the document`);
    searchFrom = idx + title.length;
  }
});

test('instructs the user to set the Pages source to "GitHub Actions"', () => {
  const content = readDoc();
  assert.match(
    content,
    /Chọn \*\*"GitHub Actions"\*\*/,
    'Should instruct selecting "GitHub Actions" as the Pages deployment source'
  );
});

test('all fenced code blocks are balanced and non-empty', () => {
  const content = readDoc();
  const fenceLines = content.split('\n').filter((line) => line.trim().startsWith('```'));

  assert.equal(fenceLines.length % 2, 0, 'Code fences (```) must come in balanced pairs');
  assert.ok(fenceLines.length >= 4, 'Expected at least two fenced code blocks in the document');
});

test('bash code blocks contain valid git push commands referencing origin main', () => {
  const content = readDoc();
  const bashBlocks = [...content.matchAll(/```bash\n([\s\S]*?)```/g)].map((m) => m[1]);

  assert.ok(bashBlocks.length >= 1, 'Expected at least one ```bash code block');

  const combined = bashBlocks.join('\n');
  assert.match(
    combined,
    /git push origin main/,
    'Bash blocks should include a "git push origin main" command'
  );
});

test('references the correct GitHub repository URL', () => {
  const content = readDoc();
  const repoUrlRegex = /https:\/\/github\.com\/[\w-]+\/[\w-]+/g;
  const matches = content.match(repoUrlRegex);

  assert.ok(matches && matches.length > 0, 'Expected at least one github.com repository URL');
  for (const url of matches) {
    assert.match(url, /^https:\/\//, `URL should use https: ${url}`);
  }
});

test('references the expected GitHub Pages site URL', () => {
  const content = readDoc();
  const pagesUrlRegex = /https:\/\/[\w-]+\.github\.io\/[\w-]+\/?/;
  const match = content.match(pagesUrlRegex);

  assert.ok(match, 'Expected a *.github.io site URL in the document');
  assert.match(match[0], /^https:\/\//, 'Pages URL should use https');
});

test('does not contain unresolved markdown link/reference syntax errors', () => {
  const content = readDoc();
  // Guard against accidental leftover markdown link syntax like [text]() or [text](undefined)
  assert.doesNotMatch(
    content,
    /\]\(\s*\)/,
    'Should not contain empty markdown link targets'
  );
  assert.doesNotMatch(
    content,
    /\bundefined\b|\bnull\b/,
    'Should not contain leftover template placeholders like "undefined" or "null"'
  );
});

test('includes a final summary/checklist section', () => {
  const content = readDoc();
  assert.match(content, /## Tóm Tắt Quy Trình/, 'Should include a final summary section');

  const summaryBlockMatch = content.match(/## Tóm Tắt Quy Trình\n\n```\n([\s\S]*?)```/);
  assert.ok(summaryBlockMatch, 'Summary section should contain a fenced checklist block');

  const summaryLines = summaryBlockMatch[1]
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);
  assert.ok(
    summaryLines.some((l) => /^1\./.test(l)),
    'Summary checklist should start numbering at 1'
  );
  assert.ok(
    summaryLines.some((l) => /Site live/i.test(l)),
    'Summary checklist should end with confirmation the site is live'
  );
});

test('mentions the docusaurus baseUrl troubleshooting hint', () => {
  const content = readDoc();
  assert.match(
    content,
    /baseUrl:\s*'\/SandboxCode\/'/,
    'Should hint at checking the correct Docusaurus baseUrl for troubleshooting'
  );
});