---
title: "Dilema Kerentanan Aksiomatik: Mengapa Sampling Perturbasi SHAP & LIME Runtuh pada Asimetri Biaya"
paperTitle: "Fooling LIME and SHAP: Adversarial Attacks and Empirical Instability on Post hoc Explanation Methods"
authors: ["Dylan Slack", "Sophie Hilgard", "Emily Jia", "Sameer Singh", "Satyapriya Krishna"]
doiOrUrl: "https://doi.org/10.1145/3375627.3375830"
venue: "AAAI/ACM Conference on AI, Ethics, and Society (AIES), 180–186"
year: 2020
status: "deconstructing"
tags: ["Explainable AI", "SHAP", "LIME", "Sampling-Variance", "Adversarial-Robustness", "Thesis-UGM"]
addedDate: 2026-10-01
---

# Catatan Dekonstruksi Riset: Kerentanan Sampling Perturbasi pada Post-hoc XAI (Slack et al., 2020)

## 1. Tesis Utama Tanpa Jargon (Feynman Explanation)
Banyak praktisi AI menganggap SHAP dan LIME sebagai "alat ukur pasti" yang objektif. Namun, Slack dkk. membuktikan bahwa metode penjelasan post-hoc bergantung pada proses aproksimasi stokastik: membuat titik-titik data sintetis acak di sekitar sampel nasabah (*perturbation sampling*).

Jika permukaan keputusan model memiliki ketidakkontinuan yang tajam atau anomali gradien lokal (seperti yang sering terjadi pada model yang dioptimasi dengan pembobotan biaya ekstrem IDCS), titik perturbasi acak akan jatuh ke ruang distribusi luar (*out-of-distribution / OOD*), menghasilkan nilai atribusi fitur (*Shapley values*) yang sangat berfluktuasi antar pengulangan kalkulasi.

---

## 2. Mekanisme Variabilitas Estimator
- **LIME:** Menggunakan sampling Gaussian lokal berbobot jarak kernel eksponensial:
  $$\xi(x) = \arg\min_{g \in G} \mathcal{L}(f, g, \pi_x) + \Omega(g)$$
  Jika boundary $f$ sangat curam akibat bobot biaya, linear surrogate model $g$ akan menghasilkan koefisien bobot $\beta$ yang berayun drastis tergantung pada sampel acak $\pi_x$.
- **KernelSHAP:** Memecahkan regresi linear berbobot untuk mendekati nilai Shapley:
  $$\phi_j = \sum_{S \subseteq F \setminus \{j\}} \frac{|S|!(|F| - |S| - 1)!}{|F|!} \left[ f(S \cup \{j\}) - f(S) \right]$$
  Pada dimensi tinggi dan model non-linier terbobot biaya, varians sampling koalisi subset fitur menyebabkan kesalahan aproksimasi Monte-Carlo yang signifikan.

---

## 3. Pentingnya Konsep "Noise Floor" pada Tesis Frans Alwan Purba
- **Tantangan Metodologi:** Ketika Ballegeer dkk. (2025) melaporkan bahwa model IDCS memiliki instabilitas penjelasan yang jauh lebih tinggi dibanding model standar (AUC), pertanyaannya: *Berapa porsi instabilitas yang disebabkan oleh sifat stokastik SHAP/LIME itu sendiri, dan berapa porsi yang murni akibat model IDCS?*
- **Noise Floor Baseline:** Sebelum menyimpulkan kelemahan model IDCS, peneliti wajib menghitung batas bawah derau (*explainer noise floor*) melalui pengulangan komputasi SHAP pada model statis berulang kali ($B$ repetitions).
- **Hipotesis Kausal Tesis:** Regularisasi parametrik berfungsi menurunkan kekasaran kurvatur lokal pada model IDCS, sehingga perturbasi SHAP/LIME tidak lagi memicu fluktuasi liar atribusi fitur.
