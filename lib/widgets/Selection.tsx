import {
  defineComponent,
  PropType,
  ref,
  watch,
  watchEffect
} from '@vue/runtime-core'

export default defineComponent({
  naem: 'SelectionWWidget',
  props: {
    value: {},
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true
    },
    options: {
      type: Array as PropType<{ key: string; value: any }[]>,
      required: true
    }
  },
  setup(props) {
    const currentValueRef = ref(props.value)

    watch(currentValueRef, (newv) => {
      if (newv === props.value) {
        props.onChange(newv)
      }
    })
    watch(
      () => props.value,
      (v) => {
        if (v === currentValueRef.value) {
          currentValueRef.value = v
        }
      }
    )
    watchEffect(() => {
      console.log(currentValueRef.value, '----------->')
    })
    return () => {
      const { options } = props
      return (
        <select multiple v-model={currentValueRef.value}>
          {options.map((op) => (
            <option key={op.key} value={op.value}>
              {op.key}
            </option>
          ))}
        </select>
      )
    }
  }
})
