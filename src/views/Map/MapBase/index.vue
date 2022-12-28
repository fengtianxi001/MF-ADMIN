<template>
  <BaseMap>
    <StaffLocation />
    <CarLocation />
    <FenceLocation />
  </BaseMap>
</template>
<script setup lang="ts">
import BaseMap from "@/components/BaseMap/index.vue";
import StaffLocation from "./widgets/StaffLocation.vue";
import CarLocation from "./widgets/CarLocation.vue";
import FenceLocation from "./widgets/FenceLocation.vue";
</script>
