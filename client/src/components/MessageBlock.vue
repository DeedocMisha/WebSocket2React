<script setup>
import { ref } from 'vue';

const {socket} = defineProps({
  socket: {
    type: Object,
    required: true
  }
});

const message = ref(''); // Создаем реактивную переменную

const handleSend = () => {
  const user = localStorage.getItem('user'); // Получаем имя пользователя

  if (message.value.trim() && user) { // Проверяем, не пустое ли сообщение
    console.log({ user, message: message.value }); // Логируем информацию в консоль

    socket.emit('message', {
      text: message.value, // Отправляем текущее сообщение
      name: user,
      id: socket.id,
      socketID: socket.id,
    }); // Отправляем сообщение через сокет

    message.value = ''; // Очищаем поле после отправки
  }
}
</script>

<template>
  <div class="message-block">
    <form @submit.prevent="handleSend">
      <input type="text" class="user-message" v-model="message" placeholder="Введите ваше сообщение..." />
      <button type="submit">Сказать</button>
    </form>
  </div>
</template>

