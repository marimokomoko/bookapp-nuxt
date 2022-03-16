<template>
 <div>
   <p>{{ value }}</p>
   <p>{{ enable }}</p>
   <p>{{ count }}</p>
 </div>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
 value: string
 enable: boolean
 count: number
}

export default Vue.extend({
 name: 'TestPage',
 data(): DataType {
   return {
     value: 'hoge',
     enable: true,
     count: 0
   }
 }
})
</script>