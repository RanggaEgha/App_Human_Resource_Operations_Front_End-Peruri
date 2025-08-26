# Peruri – Human Resource Operations (Front-End)
<p align="left">
  <a href="#"><img src="https://img.shields.io/badge/HTML5-UI-E34F26?logo=html5&logoColor=white" alt="HTML"></a>
  <a href="#"><img src="https://img.shields.io/badge/CSS-Styles-1572B6?logo=css3&logoColor=white" alt="CSS"></a>
  <a href="#"><img src="https://img.shields.io/badge/JavaScript-Interactions-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"></a>
  <a href="#"><img src="https://img.shields.io/badge/SCSS-Architecture-CC6699?logo=sass&logoColor=white" alt="SCSS"></a>
  <a href="#"><img src="https://img.shields.io/badge/Gulp-Build-CF4647?logo=gulp&logoColor=white" alt="Gulp"></a>
  <a href="#"><img src="https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify&logoColor=white" alt="Netlify"></a>
</p>

Front-end **statis** untuk modul *Human Resource Operations*. Disusun dengan **HTML/CSS/SCSS/JS**, di-build menggunakan **Gulp**.

> Repo ini UI saja (tanpa backend). Halaman ada di `pages/` serta file mandiri seperti `index.html`; komponen di `partials/`.

---

## Fitur
- **Komponen UI**: header, sidebar, kartu, tabel, form (reusable via `partials/`).
- **Halaman**: modul operasi SDM (lihat `pages/`), halaman mandiri (`index.html`, login jika ada).
- **SCSS terstruktur**: source di `scss/` → compile ke `css/`.
- **Vendor assets**: pustaka pihak ketiga disimpan di `vendors/`.
- **Build & Deploy**: Gulp tasks untuk kompilasi/minify; siap publikasi ke Netlify.
