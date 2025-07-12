// backend/data.js
const educationHistory = [  
 { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
 { id: 2, period: '2019 - 2022', institution: 'SMK Yapis Mimika', major: 'TKJ' } 
];
const skills = [ 
  { name: 'Vue.js', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'JavaScript', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Tailwind CSS', level: 'Mahir', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Node.js', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Git & GitHub', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'HTML5 & CSS3', level: 'Mahir', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'Laravel', level: 'Menengah', icon: 'https://raw.githubusercontent.com/devicons/devicon/v2.15.1/icons/laravel/laravel-plain.svg' },
  { name: 'MySQL', level: 'Menengah', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
];
const projects = [ 
{ title: 'JWR Comp', image: 'https://photos.google.com/u/1/photo/AF1QipPARyi_wsEqpbo6r_AWeSlT75QIl5m6n50v1PM" alt="Project preview',
description: 'Toko Komputer dan Berbagai Leptop dan Part PC.', tech: ['Vue.js','Bootstrap', 'Laravel',
'MySQL'], link: 'https://github.com/FERDEVIL87/Final-Project-Web-JWRCOMP' },
{
  title: 'Website Portofolio Responsi',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
  description: 'Website portofolio pribadi yang dibangun menggunakan Vue.js dan Express.js sebagai syarat kelulusan Responsi Praktikum Pemrograman Web.',
  tech: ['Vue.js', 'Express.js', 'Vercel'],
  link: 'https://github.com/DI2T28/Web_Profile'
  }
];
module.exports = { educationHistory, skills, projects };