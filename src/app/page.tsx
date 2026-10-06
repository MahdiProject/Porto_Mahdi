"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const skills = [
    {
      title: "Programming",
      items: ["PHP", "Python", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Framework & Tools",
      items: ["Laravel", "Tailwind CSS", "WordPress", "Next.js", "Git / GitHub"],
    },
    {
      title: "Database & Data AI",
      items: ["MySQL", "Pandas", "Scikit-learn", "TF-IDF", "Logistic Regression", "OpenCV"],
    },
    {
      title: "Networking & Digital",
      items: ["Computer Networking", "Linux / SSH", "SEO", "Keyword Research", "Blogspot"],
    },
  ];

  const services = [
    {
      num: "01",
      title: "Pengembangan Web",
      desc: "Membangun aplikasi web dengan Laravel, PHP, Next.js, dan Tailwind CSS.",
    },
    {
      num: "02",
      title: "Database & Backend",
      desc: "Merancang database MySQL, autentikasi, dan pengelolaan data berbasis pengguna.",
    },
    {
      num: "03",
      title: "Machine Learning & Data",
      desc: "Pengolahan data dan citra dengan Python, Scikit-learn, dan OpenCV.",
    },
    {
      num: "04",
      title: "SEO & Digital",
      desc: "Optimasi konten website dengan prinsip SEO dan keyword research.",
    },
  ];

  const experiences = [
    {
      title: "Web Developer (Project-based)",
      place: "Freelance / Independent",
      period: "2023 — Sekarang",
      desc: "Mengerjakan berbagai project web development menggunakan Laravel, Next.js, dan WordPress. Fokus pada fungsionalitas, tampilan responsif, dan performa.",
    },
    {
      title: "Machine Learning & Data Practice",
      place: "Personal Projects",
      period: "2024 — Sekarang",
      desc: "Mengerjakan proyek machine learning dan pengolahan citra menggunakan Scikit-learn, Pandas, dan OpenCV sebagai bagian dari pembelajaran dan eksperimen.",
    },
  ];

  return (
    <div className="min-h-screen bg-grid">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b1120]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            <span className="text-sky-400">Mahdi</span>
            <span className="text-slate-400">.dev</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-400 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-800 px-5 py-4 flex flex-col gap-3 bg-[#0b1120]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-sky-400"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center px-5 pt-24 pb-16">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">
            <div>
              <p className="text-sky-400 text-sm font-medium mb-4 tracking-wide">
                Halo, saya
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
                Muhammad Mahdi
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-400 font-medium mb-6">
                Web Developer & IT Student
              </h2>
              <p className="text-slate-400 max-w-xl leading-relaxed mb-8">
                Mahasiswa Teknik Informatika dengan pengalaman praktik dalam web
                development, SEO, WordPress, database, dan pengolahan data.
                Terbiasa mengembangkan aplikasi menggunakan HTML, PHP, Tailwind
                CSS, Python, dan JavaScript dengan framework Laravel serta
                Next.js. Turut mengerjakan proyek machine learning dan
                pengolahan citra menggunakan Scikit-learn dan OpenCV.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold rounded-lg transition-colors"
                >
                  Lihat Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border border-slate-600 hover:border-sky-500 text-slate-300 hover:text-sky-400 rounded-lg transition-colors"
                >
                  Hubungi Saya
                </a>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="space-y-6 text-sm border-l border-slate-800 pl-6 hidden lg:block">
              <div>
                <p className="text-slate-500 uppercase tracking-wider text-xs mb-1">
                  Berbasis di
                </p>
                <p className="text-slate-300">Banjarbaru, Kalimantan Selatan</p>
              </div>
              <div>
                <p className="text-slate-500 uppercase tracking-wider text-xs mb-1">
                  Spesialisasi
                </p>
                <p className="text-slate-300">
                  Web Developer — IT & Software Development
                </p>
              </div>
              <div>
                <p className="text-slate-500 uppercase tracking-wider text-xs mb-1">
                  Kontak
                </p>
                <a
                  href="mailto:muhammadmahdi@example.com"
                  className="text-sky-400 hover:underline"
                >
                  muhammdmahdi.2018@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-800">
            <div>
              <p className="text-3xl font-bold text-white">3</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Proyek Utama
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">7</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Semester Kuliah
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10+</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Teknologi Dikuasai
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">2023</p>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                Mulai Kuliah
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide">
            — Tentang Saya
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Developer di Balik Layar
          </h2>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 sm:p-8">
              <p className="text-slate-300 leading-relaxed mb-4">
                Saya mahasiswa di{" "}
                <span className="text-sky-400">
                  Universitas Islam Kalimantan Muhammad Arsyad Al Banjari
                </span>
                , jurusan Teknik Informatika.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Ketertarikan saya ada di web development (frontend & backend),
                pengolahan data dengan Python, serta networking. Saya senang
                mencoba teknologi baru dan menerapkannya ke project yang nyata.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Memiliki kemampuan belajar mandiri, problem solving, dan
                adaptasi terhadap teknologi baru. Tujuan saya: jadi developer
                yang bisa membangun solusi digital yang berguna dan mudah
                digunakan.
              </p>
            </div>

            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 flex flex-col justify-center">
              <p className="text-sky-400 text-4xl mb-4">“</p>
              <p className="text-slate-300 italic leading-relaxed mb-4">
                Aku mungkin programmer, tapi soal kamu,
                logikaku selalu kalah dengan perasaan.
              </p>
              <p className="text-slate-500 text-sm">— Muhammad Mahdi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-5 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide">
            — Keahlian
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Teknologi yang Saya Kuasai
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="bg-[#111827] border border-slate-800 rounded-xl p-6 hover:border-sky-500/40 transition-colors"
              >
                <h3 className="text-sky-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                  {skill.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 bg-slate-800/80 text-slate-300 rounded-md border border-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide">
            — Layanan
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Apa yang Bisa Saya Bantu
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                key={s.num}
                className="bg-[#111827] border border-slate-800 rounded-xl p-6 hover:border-sky-500/40 transition-colors"
              >
                <span className="text-slate-600 text-sm font-mono">{s.num}</span>
                <h3 className="text-white font-semibold mt-2 mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-5 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide">
            — Pengalaman
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Pengalaman & Praktik
          </h2>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className="bg-[#111827] border border-slate-800 rounded-xl p-6 hover:border-sky-500/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-white font-semibold">{exp.title}</h3>
                  <span className="text-sky-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-slate-500 text-sm mb-3">{exp.place}</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide">
            — Pendidikan
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
            Education
          </h2>

          <div className="bg-[#111827] border border-slate-800 rounded-2xl p-6 flex gap-5 items-start">
            <div className="w-11 h-11 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 text-xl shrink-0">
              🎓
            </div>
            <div>
              <h3 className="font-semibold text-white text-lg">
                Universitas Islam Kalimantan Muhammad Arsyad Al Banjari
              </h3>
              <p className="text-sky-400 text-sm mt-1">Teknik Informatika</p>
              <p className="text-slate-500 text-sm mt-1">2023 — Sekarang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-5 bg-[#0a0f1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide">
            — Proyek
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Projects
          </h2>

          {/* 1 kolom, berbaris ke bawah */}
          <div className="flex flex-col gap-8">

            {/* Project 1 */}
            <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/40 transition-colors group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/projek/Badminton.png"
                  alt="Project 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-sky-400 transition-colors">
                  Project ke 1 saya 
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Web Lapangan Badminton
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2.5 py-1 bg-sky-500/10 text-sky-400 rounded border border-sky-500/20">
                    Laravel
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-sky-500/10 text-sky-400 rounded border border-sky-500/20">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#111827] border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/40 transition-colors group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/projek/Ikanasin.png"
                  alt="Project 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-sky-400 transition-colors">
                  Project ke 2 saya 
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Web Toko Ikan Asin.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs px-2.5 py-1 bg-sky-500/10 text-sky-400 rounded border border-sky-500/20">
                    Next.js
                  </span>
                  <span className="text-xs px-2.5 py-1 bg-sky-500/10 text-sky-400 rounded border border-sky-500/20">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-sky-400 text-sm font-medium mb-2 tracking-wide text-center">
            — Kontak & Kolaborasi
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
            Mari Berkolaborasi
          </h2>
          <p className="text-slate-400 mb-12 max-w-lg mx-auto text-center">
            Tertarik kerja sama project, magang, atau sekadar diskusi soal tech?
            Silakan hubungi saya.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <a
              href="mailto:muhammadmahdi@example.com"
              className="bg-[#111827] border border-slate-800 rounded-xl p-6 text-center hover:border-sky-500/40 transition-colors"
            >
              <p className="text-sky-400 text-2xl mb-3">✉</p>
              <p className="text-white font-medium text-sm mb-1">Email</p>
              <p className="text-slate-500 text-xs">muhammdmahdi.2018@gmail.com</p>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] border border-slate-800 rounded-xl p-6 text-center hover:border-sky-500/40 transition-colors"
            >
              <p className="text-sky-400 text-2xl mb-3">⌘</p>
              <p className="text-white font-medium text-sm mb-1">GitHub</p>
              <p className="text-slate-500 text-xs">github.com</p>
            </a>
            <div className="bg-[#111827] border border-slate-800 rounded-xl p-6 text-center">
              <p className="text-sky-400 text-2xl mb-3">📍</p>
              <p className="text-white font-medium text-sm mb-1">Lokasi</p>
              <p className="text-slate-500 text-xs">
                Banjarbaru, Kalimantan Selatan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 text-center text-slate-500 text-sm">
        <p>
          © {new Date().getFullYear()} Muhammad Mahdi · Built with Next.js &
          Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
