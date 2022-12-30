<template>
  <div class="page-container">
    <div class="page-content">
      <div class="main">
        <img :src="image" alt="image" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import image from "@/assets/images/amico.png";
</script>
<style lang="scss">
.page-content {
  @include flex($justify: center, $align: center);
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-2);
  padding: 20px;
  box-sizing: border-box;
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    .info {
      width: 400px;
      display: flex;
      flex-direction: column;
      // align-items: center;
      text-align: left;
      h1 {
        font-size: 3.5rem;
        font-weight: 500;
        font-family: "Rubik", sans-serif;
        margin: 15px 0;
      }
      h2 {
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        margin: 10px 0;
      }
      h3 {
        color: #9b9bae !important;
        line-height: 26px;
      }
    }
  }
  img {
    width: 40%;
  }
}
</style>
