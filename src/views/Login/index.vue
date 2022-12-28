<template>
  <div class="page">
    <div class="container">
      <div class="container-header">
        <div class="title">MF-ADMIN-TEMPLATE</div>
        <div class="desc">一个管理系统的模板</div>
      </div>
      <div class="container-main">
        <a-input v-model="account" allow-clear placeholder="请输入账号">
          <template #prefix>
            <IconUser />
          </template>
        </a-input>
        <a-input-password
          v-model="password"
          allow-clear
          placeholder="请输入密码"
        >
          <template #prefix>
            <IconLock />
          </template>
        </a-input-password>
        <div class="container-main-code">
          <a-input v-model="captcha" allow-clear placeholder="验证码">
            <template #prefix>
              <IconRobot />
            </template>
          </a-input>
          <img
            :src="caprchaSrc"
            class="container-main-code-vaild"
            @click="captchaRefresh"
          />
        </div>
        <a-button type="primary" @click="onLogin">登录</a-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconUser, IconLock, IconRobot } from "@arco-design/web-vue/es/icon";
import useLogin from "./hooks/useLogin";

const { account, password, captcha, caprchaSrc, onLogin, captchaRefresh } =
  useLogin();
</script>
<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  .container {
    width: 320px;
    height: 500px;
    .container-header {
      .title {
        color: var(--color-text-1);
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
      }
      .desc {
        color: var(--color-text-3);
        font-size: 16px;
        line-height: 24px;
      }
    }
    .container-main {
      display: grid;
      grid-gap: 20px;
      margin-top: 30px;
      .container-main-code {
        display: flex;
        grid-gap: 10px;
        .container-main-code-vaild {
          width: 100px;
          border-radius: var(--border-radius-small);
          background-color: var(--color-secondary);
          font-size: 0;
          overflow: hidden;
          &:hover {
            background-color: #e5e6eb;
          }
        }
      }
    }
  }
}
</style>
