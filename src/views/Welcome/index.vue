<template>
  <div class="page-container">
    <div class="page-content">
      <div class="main">
        <div class="info">
          <h1>MF-THREE</h1>
          <h2>一个WEB管理系统模板</h2>
          <h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde est
            non sunt facilis earum nisi, quam tempora hic labore quas minus
            impedit consectetur natus modi aspernatur alias temporibus, officiis
            et?
          </h3>
        </div>
        <img :src="image" alt="image" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import image from "@/assets/images/amico.png";
</script>
<style lang="scss">
.page-container {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
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
}
</style>
