---
title: "Dekonstruksi Rowhammer pada High-Bandwidth Memory (HBM3e)"
paperTitle: "Rowhammering 3D-Stacked DRAM: Vulnerabilities in Modern Accelerator Architectures"
authors: ["K. Zhang", "M. Weiss", "L. Subramanian"]
doiOrUrl: "https://doi.org/10.1109/SP.2025.1001"
venue: "IEEE Symposium on Security and Privacy (S&P)"
year: 2025
status: "synthesizing"
tags: ["Hardware", "Rowhammer", "HBM3e", "Cyber Security", "AI-Weights"]
addedDate: 2026-10-03
---

# Catatan Dekonstruksi Jurnal (Cognitive Matrix)

## 1. Tesis Utama Tanpa Jargon (Feynman Explanation)
> *Bagaimana gua menjelaskan serangan ini ke teman sesama engineer dalam 3 kalimat sederhana?*

Rowhammer adalah fenomena di mana kita mengaktifkan (membuka dan menutup) baris sel memori DRAM secara berulang-ulang dengan kecepatan sangat tinggi. Efek induksi elektromagnetik dan kebocoran muatan listrik dari kapasitor mikroskopis di baris tersebut menyebabkan kapasitor di baris tetangganya kehilangan muatan, sehingga terjadi pembalikan bit (bit flip dari 1 ke 0 atau sebaliknya). Pada HBM3e (3D stacked memory) yang digunakan GPU AI modern, jarak antarsel makin rapat sehingga ambang batas aktivasi baris untuk memicu bit flip menjadi jauh lebih rendah dibanding DDR4 tradisional.

---

## 2. Batasan Fisik & Arsitektur Hardware (First-Principles)
- **Node Transistor:** Menggunakan node sub-10nm DRAM die yang ditumpuk via TSV (*Through-Silicon Vias*).
- **Physical Bottleneck:** Akumulasi panas lokal pada 3D stack mempercepat laju kebocoran muatan kapasitor (*thermal-induced leakage*).
- **Mitigasi Hardware Saat Ini:** *Target Row Refresh (TRR)* bawaan chip terbukti dapat dibobol menggunakan pola hammer berbentuk *multi-sided* dan *dispersed non-uniform access*.

---

## 3. Threat Model & Implikasi Keamanan AI
- **Skenario:** Co-located tenant pada cloud AI (contoh: RunPod / AWS Lambda instance) yang menyewa GPU yang sama atau host memori terbagi.
- **Dampak pada Model AI:** Mengubah bobot quantized model (FP8/INT8). Pembalikan 1 bit pada eksponen floating point bobot transformer dapat mengubah skor atensi dari nilai normal menjadi `NaN` atau merusak akurasi klasifikasi secara total (*denial of service* atau *backdoor activation*).

---

## 4. Pertanyaan Kritis untuk Ditantang (Socratic Check)
- [ ] *Apakah mekanisme ECC (Error-Correcting Code) pada HBM3e (on-die ECC + sideband ECC) bisa mendeteksi multi-bit flips yang sinkron?*
- [ ] *Berapa bandwidth memori minimal yang harus dikorbankan jika mitigasi refresh rate dinaikkan 4x lipat?*
- [ ] *Bisakah compiler CUDA memblokir pola instruksi assembly yang memicu hammering ini sebelum mencapai hardware?*

