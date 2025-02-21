<template>
  <BaseModal title="设备详情" :footer="false">
    <div class="container">
      <div class="container-left">
        <BaseDescriptions
          size="small"
          :column="3"
          :configs="configs"
          :modelValue="record"
          bordered
        />
      </div>
      <div class="container-right" style="margin-top: 15px">
        <Tabs type="capsule" :destroy-on-hide="true" :lazy-load="true">
          <TabPane key="apply" title="申领记录">
            <ApplyRecord />
          </TabPane>
          <TabPane key="retire" title="清退记录">
            <RetireRecord />
          </TabPane>
          <TabPane key="change" title="更换记录">
            <ChangeRecord />
          </TabPane>
          <TabPane key="scrap" title="报废记录">
            <ScrapRecord />
          </TabPane>
        </Tabs>
      </div>
    </div>
  </BaseModal>
</template>
<script setup lang="ts">
import { computed, ref, reactive } from 'vue'
import { BaseModal, BaseDescriptions } from '@/components'
import { Tabs, TabPane } from '@arco-design/web-vue'
import { SecretHierarchyEnum, DeviceCategoryEnum } from '@/enums'
import ApplyRecord from './applyRecord.vue'
import ChangeRecord from './changeRecord.vue'
import RetireRecord from './retireRecord.vue'
import ScrapRecord from './scrapRecord.vue'

interface PropsType {
  record: any
}
const props = defineProps<PropsType>()

const configs = [
  {
    label: '设备编号',
    name: 'code',
  },
  {
    label: '设备名称',
    name: 'name',
  },
  {
    label: '设备型号',
    name: 'model',
  },
  {
    label: '设备品牌',
    name: 'brand',
  },
  {
    label: '设备类别',
    name: 'category',
    render: (record) => {
      return DeviceCategoryEnum[record]
    },
  },
  {
    label: '设备密级',
    name: 'security',
    render: (record) => {
      return SecretHierarchyEnum[record]
    },
  },
  {
    label: '生产厂商',
    name: 'manufacturer',
  },
  {
    label: '设备数量',
    name: 'quantity',
  },
  {
    label: '设备单位',
    name: 'unit',
  },
  {
    label: '入库人',
    name: 'registeredBy',
  },
  {
    label: '入库时间',
    name: 'registerDate',
  },
  {
    label: '购置时间',
    name: 'purchaseDate',
  },
]
</script>

<style lang="scss" scoped>
.container {
  height: 622px;
}
</style>
