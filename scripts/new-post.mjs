import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ').trim() || 'Untitled Essay';
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '');

const targetDir = path.resolve('src/content/blog');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetFile = path.join(targetDir, `${slug}.mdx`);

if (fs.existsSync(targetFile)) {
  console.error(`\n❌ File already exists: ${targetFile}\n`);
  process.exit(1);
}

const template = `---
title: "${title}"
description: "Deskripsi padat dan provokatif mengenai inti tesis teknis artikel ini."
pubDate: ${new Date().toISOString().split('T')[0]}
tags: ["AI", "Hardware", "Cyber Security"]
draft: false
---
import Callout from '../../components/Callout.astro';

## 1. Abstract & Threat Model

Tulis ringkasan eksekutif 2 paragraf di sini...

<Callout type="info" title="First-Principles Invariant">
Jelaskan hukum fisika atau batas komputasi dasar di sini.
</Callout>

## 2. Bedah Mekanisme Hardware & Silikon

Jelaskan analisis mendalam berdasarkan pemahaman yang sudah diuji di riset...

## 3. Implikasi Keamanan Siber & Rekayasa

Dampak nyata terhadap arsitektur industri...

---

## Referensi & Daftar Pustaka

1. **Authors**, *"Paper Title"*, Conference Name, Year. DOI: \`10.xxxx/xxxx\`
`;

fs.writeFileSync(targetFile, template, 'utf-8');
console.log(`\n✅ Draft artikel MDX berhasil dibuat di: src/content/blog/${slug}.mdx\n`);

