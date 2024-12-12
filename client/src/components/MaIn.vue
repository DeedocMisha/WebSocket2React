<template>
  <form @submit.prevent="handleSubmit" class="login-form">
    <h1>Вход в чат</h1>
    <label for="user">Имя пользователя:</label>
    <input type="text" id="user" v-model="user" required />
    <button type="submit">Отправить</button>
  </form>
</template>



<script>
import { ref, onMounted } from "vue";
import { io } from "socket.io-client";
import { useRouter } from "vue-router"; // Импортирование useRouter для навигации

export default {
  setup() {
    const socket = io("http://localhost:8080");
    const user = ref('');
    const router = useRouter(); // Инициализация роутера

    onMounted(() => {
      socket.on("connect", () => {
        console.log("Connected to websocket server");
      });

      socket.on("message", (data) => {
        console.log("Message from server:", data);
      });
    });

    const handleSubmit = () => {
      if (user.value) {
        // Сохранение имени пользователя в локальное хранилище
        localStorage.setItem("user", user.value);

        // Вы можете использовать router для перехода на новую страницу
        router.push('/chat'); // Переход на страницу чата, на которую вы хотите навигировать
      }
    };

    return {
      user,
      handleSubmit,
    };
  },
};
</script>

