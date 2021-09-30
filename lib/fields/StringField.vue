<template>
  <input type="text" :value="props.value" @input="handleChange" />
</template>

<script lang="ts" setup="props">
import { defineProps } from 'vue'
import { FieldPropsDefine } from '../types'
/* *
error
 */
// export default {
//   props: FieldPropsDefine
// }

const props = defineProps(FieldPropsDefine)
// declare const props: {
//   value: any
//   onChange: (v: string) => void
//   schema: Schema
// }
const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
