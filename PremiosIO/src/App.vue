<script setup></script>

<template>
  <router-view v-slot="{ Component, route }">
      <transition name="slide">
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
    <notifications group="foo" position="top center" class="note" />
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.1s ease-out;
}

.slide-enter-to {
  position: absolute;
  right: 0;
}

.slide-enter-from {
  position: absolute;
  right: -100%;
}

.slide-leave-to {
  position: absolute;
  left: -100%;
}

.slide-leave-from {
  position: absolute;
  left: 0;
}
.note {
  margin-top: 0.7rem;
}
</style>
