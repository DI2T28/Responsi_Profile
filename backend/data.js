// backend/data.js
const educationHistory = [  
 { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
 { id: 2, period: '2019 - 2022', institution: 'SMK Yapis Mimika', major: 'TKJ' } 
 { id: 3, period: '2019 - 2022', institution: 'SMP Negeri 4 Mimika', major: ',' } 
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
{ title: 'JWR Comp', image: 'https://www.pinhome.id/info-area/wp-content/uploads/2021/12/toko-laptop-malang.jpg',
description: 'Toko Komputer dan Berbagai Leptop dan Part PC.', tech: ['Vue.js','Bootstrap', 'Laravel',
'MySQL'], link: 'https://github.com/FERDEVIL87/Final-Project-Web-JWRCOMP' },
{
  title: 'Website Portofolio Responsi',
  image: 'https://cdn.autonomous.ai/static/upload/images/common/upload/20200930/5d8e42001ee.jpg',
  description: 'Website portofolio pribadi yang dibangun menggunakan Vue.js dan Express.js sebagai syarat kelulusan Responsi Praktikum Pemrograman Web.',
  tech: ['Vue.js', 'Express.js', 'Vercel'],
  link: 'https://github.com/DI2T28/Responsi_Profile'
  }
];
module.exports = { educationHistory, skills, projects };