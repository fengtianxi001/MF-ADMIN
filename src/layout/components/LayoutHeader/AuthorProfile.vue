<template>
  <a-dropdown position="bl" popup-container="#app" class="author-profile-wrap">
    <img class="author-avatar" alt="avatar" :src="user.info.avatar" />
    <template #content>
      <a-doption @click="() => open(LINKS.repo)">
        <div class="author-profile">
          <img class="author-avatar" alt="avatar" :src="user.info.avatar" />
          <div class="author-profile-info">
            <em class="name">{{ user.info.name }}</em>
            <em class="desc">{{ user.info.email }}</em>
          </div>
        </div>
      </a-doption>
      <a-doption
        v-for="item in operate_list"
        :key="item.text"
        @click="item.onClick"
      >
        <template #icon>
          <component :is="item.icon" />
        </template>
        <template #default>{{ item.text }}</template>
      </a-doption>
    </template>
  </a-dropdown>
</template>
<script setup lang="ts">
import { useUser } from "@/stores/user";
import { IconCodeBlock, IconPen } from "@arco-design/web-vue/es/icon";

const user = useUser();
const APP_NAME = import.meta.env.VITE_APP_NAME;

const LINKS = {
  author: "https://github.com/fengtianxi001",
  repo: `https://github.com/fengtianxi001/${APP_NAME}`,
  issues: "https://github.com/fengtianxi001/${APP_NAME}/issues/new",
};

const operate_list = [
  {
    icon: IconCodeBlock,
    text: "查看源代码",
    onClick: () => {
      window.open(LINKS.repo);
    },
  },
  {
    icon: IconPen,
    text: "建议与意见",
    onClick: () => {
      window.open(LINKS.repo);
    },
  },
];
const open = (url: string) => window.open(url);
</script>
<style lang="scss">
.author-profile-wrap {
  margin-left: -5px;
  .arco-dropdown-list {
    padding: 0 4px;
    .arco-dropdown-option {
      padding: 0 8px;
      width: 100%;
      &:not(:last-child) {
        border-bottom: 1px solid var(--color-fill-2);
      }
    }
  }
}
.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid rgb(var(--gray-2));
}
.author-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  .author-profile-info {
    display: grid;
    grid-gap: 6px;
    .name {
      font-size: 14px;
      line-height: 14px;
      font-weight: bold;
    }
    .desc {
      font-size: 12px;
      line-height: 12px;
      color: #999;
    }
  }
}
</style>
