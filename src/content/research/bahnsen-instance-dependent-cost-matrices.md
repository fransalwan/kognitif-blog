---
title: "Fondasi Matriks Biaya Finansial: Evaluasi AEC dan Sensitivitas Threshold Keputusan"
paperTitle: "A novel cost-sensitive framework with instance-dependent cost matrices"
authors: ["Alejandro Correa Bahnsen", "Djamila Aouada", "Björn Ottersten"]
doiOrUrl: "https://doi.org/10.1016/j.eswa.2015.07.056"
venue: "Expert Systems with Applications, 42(22), 8924–8934"
year: 2015
status: "synthesizing"
tags: ["IDCS", "Cost-Matrices", "Credit-Scoring", "AEC", "Thresholding", "Thesis-UGM"]
addedDate: 2026-10-02
---

# Catatan Dekonstruksi Riset: Instance-Dependent Cost Matrices (Bahnsen et al., 2015)

## 1. Tesis Utama Tanpa Jargon (Feynman Explanation)
Dalam machine learning standar, matriks biaya klasifikasi biasanya bersifat konstan antar observasi (misal: penalti *False Positive* selalu dianggap 5x lipat dari *False Negative*). Namun dalam kenyataan operasional kredit, nilai kerugian sangat bergantung pada nominal pinjaman unik masing-masing nasabah ($A_i$).

Bahnsen dkk. merumuskan kerangka kerja matematika matriks biaya instance-dependent:
1. Kerugian jika nasabah macet tidak terdeteksi (*False Negative*): nominal pokok pinjaman dikalikan rasio pemulihan ($A_i \cdot LGD$).
2. Kerugian jika nasabah kredibel ditolak (*False Positive*): kehilangan potensi margin bunga dan biaya operasional ($r_i + C_{alt}$).

Kerangka ini membuktikan secara empiris bahwa mengoptimalkan *Average Expected Cost* (AEC) menghasilkan penghematan finansial (*financial savings*) yang jauh lebih tinggi dibandingkan algoritma yang hanya mengoptimalkan metrik statistik seperti AUC atau F1-Score.

---

## 2. Formulasi Matematika & Permukaan Loss Asimetris
Matriks biaya individual untuk observasi ke-$i$ didefinisikan sebagai:

$$C(y_i, c_i) = \begin{pmatrix} C_{TN}(i) & C_{FP}(i) \\ C_{FN}(i) & C_{TP}(i) \end{pmatrix}$$

Di mana:
- $C_{TN}(i) = 0$
- $C_{FP}(i) = r_i + C_{alt}$ (kehilangan bunga dan peluang alternatif)
- $C_{FN}(i) = A_i \cdot LGD_i$ (pokok pinjaman tak tertagih)
- $C_{TP}(i) = C_{admin}$ (biaya administrasi mitigasi risiko)

Implikasi ke permukaan loss:
Ketika gradien dihitung terhadap parameter bobot model $W$, observasi dengan nominal $A_i$ raksasa mendominasi vektor gradien:

$$\nabla_W \mathcal{L}_{IDCS} = \sum_{i=1}^N \left( \mathbb{I}(y_i=1) \cdot A_i \cdot LGD_i \cdot \nabla_W (1 - s(x_i)) + \mathbb{I}(y_i=0) \cdot (r_i + C_{alt}) \cdot \nabla_W s(x_i) \right)$$

Hal ini menciptakan kurvatur permukaan optimasi yang sangat curam (*steep non-uniform Lipschitz landscape*), di mana sampel minoritas berbiaya besar membengkokkan batas keputusan (*decision boundary*) secara lokal.

---

## 3. Titik Temu dengan Tesis Frans Alwan Purba
- **Hulu Instabilitas:** Fluktuasi penyamplingan beberapa nasabah dengan $A_i$ tinggi pada *cross-validation fold* memicu rotasi batas keputusan lokal.
- **Kebutuhan Regularisasi:** Model tanpa regularisasi ketat ($L_1/L_2$, depth constraint) akan menciptakan *overfitting* lokal terhadap beberapa titik berbiaya tinggi.
- **Validasi Uji:** Intervensi regularisasi parametrik ditujukan untuk meredam sensitivitas gradien lokal terhadap $A_i$ ekstrem tanpa merusak keunggulan *cost savings* yang dihitung oleh metrik Bahnsen dkk.
