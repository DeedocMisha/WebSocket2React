<script setup >
import SideBar from "./SideBar.vue";
import BoDy from "./BoDy.vue";
import MessageBlock from "./MessageBlock.vue";

// Экспорт компонента не требуется в script setup
</script>

<template>
    <div class="chat">
      <SideBar />
      <main class="main">
        <BoDy />
        <MessageBlock :socket="socket"/> //Подкл к странице сокет
      </main>
    </div>
  </template>


