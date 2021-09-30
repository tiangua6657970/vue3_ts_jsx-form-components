<template>
  <input type="number" :value="props.value" @input="handleChange" />
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

const handleChange = (e: any) => {
  console.log(e)
  if (Number.isNaN(Number(e.target.value))) {
    props.onChange(undefined)
    return
  }
  props.onChange(Number(e.target.value))
}
</script>
