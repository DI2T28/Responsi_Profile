<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navItems = [
  { label: 'Profil', href: '#profil', icon: '👤' },
  { label: 'Pendidikan', href: '#pendidikan', icon: '🎓' },
  { label: 'Skill', href: '#skill', icon: '🛠️' },
  { label: 'Proyek', href: '#proyek', icon: '💻' },
  { label: 'Kontak', href: '#kontak', icon: '📞' }
];
</script>

<template>
  <header class="bg-white shadow-md sticky top-0 z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold text-gray-800">Didit</div>

      <!-- Desktop -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="item in navItems" :key="item.href">
          <a :href="item.href" class="text-gray-600 hover:text-blue-500 hover:-translate-y-0.5 transition-all duration-300">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <!-- Burger Button (Mobile Only) -->
      <button class="md:hidden" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle Menu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Dropdown -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="md:hidden px-6 pb-4 bg-white shadow-md">
        <ul class="flex flex-col space-y-4">
          <li v-for="item in navItems" :key="item.href">
            <a :href="item.href" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <span>{{ item.icon }}</span>
              <span>{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
