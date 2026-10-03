---
title: "Dekonstruksi Paradoks IDCS: Biaya Finansial vs Instabilitas Penjelasan XAI"
paperTitle: "Evaluating the stability of model explanations in instance-dependent cost-sensitive credit scoring"
authors: ["Matteo Ballegeer", "Matthias Bogaert", "Dries F. Benoit"]
doiOrUrl: "https://doi.org/10.1016/j.ejor.2025.05.039"
venue: "European Journal of Operational Research (EJOR), 326(2), 630–640"
year: 2025
status: "ready_to_draft"
tags: ["IDCS", "Explainable AI", "SHAP", "LIME", "Cost-Sensitive", "Credit Scoring", "Thesis-UGM"]
addedDate: 2026-10-03
---

# Catatan Dekonstruksi Riset: The IDCS Explanation Dilemma

## 1. Tesis Utama Tanpa Jargon (Feynman Explanation)
Pada perbankan, salah memprediksi nasabah pinjaman Rp 10 juta berbeda risikonya dengan salah memprediksi nasabah pinjaman Rp 1 miliar. Model Machine Learning standar (seperti XGBoost biasa) hanya menghitung akurasi statistik dan memperlakukan kedua nasabah itu sama (meminimalkan *cross-entropy*). 

Model **Instance-Dependent Cost-Sensitive (IDCS)** hadir untuk mengatasi kelemahan ini dengan memasukkan nominal rupiah pinjaman ($A_i$) langsung ke dalam fungsi objektifnya (*Average Expected Cost* / AEC). Hasilnya: bank untung besar dan menghemat biaya (*savings* tinggi). 

Namun, muncul paradoks berbahaya: ketika kita bertanya kepada AI menggunakan alat penjelas (SHAP / LIME) mengenai alasan penolakan kredit (*"Mengapa nasabah ini ditolak?"*), jawaban model IDCS berayun liar dan tidak konsisten antar iterasi dibanding model standar. Untuk dua nasabah dengan profil identik, faktor penentu keputusannya bisa berubah drastis hanya karena variasi penyamplingan data minoritas yang sedikit bergeser.

---

## 2. Batasan Mekanisme & Matematika Fungsi Loss
- **Loss Konvensional (Cross-Entropy):**
  Mengestimasi probabilitas posterior murni $s(x) = P(Y=1 \mid X)$, memetakan hubungan langsung antara fitur $x$ dan label $y$.
- **Loss IDCS (Average Expected Cost / AEC):**
  $$AEC(y_i, s(x_i), A_i) = y_i (1 - s(x_i)) \cdot A_i \cdot LGD + (1 - y_i) s(x_i) \cdot (r_i + C_{alt})$$
  Di sini, bobot gradien dikalikan secara langsung dengan nominal pinjaman individual $A_i$.
- **Akar Masalah (Feature-Cost Entanglement):**
  Fitur $x$ tidak lagi hanya memprediksi risiko gagal bayar $Y$, melainkan terikat erat (*entangled*) dengan distribusi biaya $A_i$. Saat algoritma XAI (SHAP/LIME) mematikan/menghidupkan fitur (*perturbation*), ia menangkap interferensi kombinasi fitur $\times$ biaya, bukan relasi kausal murni fitur $\to$ risiko.

---

## 3. Threat Model & Implikasi Kepatuhan Regulasi
- **Regulasi:** EU AI Act mengategorikan credit scoring sebagai *High-Risk AI System*. GDPR mewajibkan *Right to Explanation*.
- **Risiko Hukum & Reputasi:** Jika penjelasan model tidak stabil (*high CoV / high SRA*), bank rentan terhadap gugatan diskriminasi kredit (misal: fitur ras atau gender tiba-tiba melonjak importansinya akibat derau *explainer*).
- **Miskalibrasi Probabilitas:** Ballegeer dkk. mendokumentasikan nilai *Brier Score* model IDCS yang sangat buruk (0.202–0.259 vs 0.102 pada model standar), namun mereka mengabaikan kalibrasi karena berpatokan pada asumsi Vanderschueren (2022) bahwa kalibrasi tidak memperbaiki *savings*.

---

## 4. Celah Kausal & Arah Tesis Frans Alwan Purba (UGM)
- Ballegeer dkk. (2025) hanya melempar hipotesis dugaan (*we hypothesize*).
- **Rancangan Dua Lengan:**
  1. *Lengan Regularisasi:* Apakah meredam kompleksitas bobot via penalti $L_1/L_2$, $C$, atau `gamma` mampu menekan lonjakan CoV tanpa merusak *relAEC*?
  2. *Lengan Permutasi Biaya (Cost-Shuffle):* Menguji secara kausal: jika korelasi fitur dan biaya diputus via pengacakan terstratifikasi, apakah instabilitas penjelasan IDCS kembali normal setara model standar?
