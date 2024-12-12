<script setup>
import { useRouter } from 'vue-router'; // Импортируем useRouter

const router = useRouter(); // Создаём экземпляр роутера

const handleLeave = () => {
  localStorage.removeItem('user'); // Удаляем пользователя из localStorage
  router.push('/'); // Используем router.push для навигации на главную страницу
}
</script>

<template>
  <header class="header">
    <button class="btn" @click="handleLeave">Покинуть чат</button> <!-- Используем @click вместо onclick -->
  </header>

  <div class="container">
    <div class="chats">
      <p>Вы</p>
      <div class="message-sender">
        <p>Hello</p>
      </div>
    </div>

    <div class="chats">
      <p>Вы</p>
      <div class="message-recipient">
        <p>Hello</p>
      </div>
    </div>
  </div>
</template>
