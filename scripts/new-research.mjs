import fs from 'node:fs';
import path from 'node:path';

const title = process.argv.slice(2).join(' ').trim() || 'Untitled Paper Research';
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)+/g, '');

const targetDir = path.resolve('src/content/research');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const targetFile = path.join(targetDir, `${slug}.md`);

if (fs.existsSync(targetFile)) {
  console.error(`\n❌ File already exists: ${targetFile}\n`);
  process.exit(1);
}

const template = `---
title: "${title}"
paperTitle: "Judul Lengkap Paper Ilmiah"
authors: ["Author A", "Author B"]
doiOrUrl: "https://doi.org/..."
venue: "IEEE S&P / USENIX Security / NeurIPS / ISCA"
year: ${new Date().getFullYear()}
status: "reading"
tags: ["AI", "Hardware", "Cyber Security"]
addedDate: ${new Date().toISOString().split('T')[0]}
---

# Catatan Dekonstruksi Jurnal (Cognitive Matrix)

## 1. Tesis Utama Tanpa Jargon (Feynman Explanation)
> *Bagaimana gua menjelaskan mekanisme paper ini ke teman sesama engineer dalam 3 kalimat lugas?*

[Tulis pemahaman lu di sini...]

---

## 2. Batasan Fisik & Arsitektur Hardware (First-Principles)
- **Node / Transistor:** 
- **Physical Bottleneck:** 
- **Trade-off Rekayasa:** 

---

## 3. Threat Model & Implikasi Keamanan AI
- **Skenario Akses Penyerang:** 
- **Vektor Eksploitasi:** 
- **Dampak pada Sistem / Model:** 

---

## 4. Pertanyaan Kritis untuk Ditantang (Socratic Check)
- [ ] *Apa asumsi paper ini yang mungkin tidak realistis di lingkungan datacenter nyata?*
- [ ] *Bagaimana cara mitigasi serangan/masalah ini tanpa mengorbankan performa?*
`;

fs.writeFileSync(targetFile, template, 'utf-8');
console.log(`\n✅ Template riset berhasil dibuat di: src/content/research/${slug}.md\n`);

