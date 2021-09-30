import { defineComponent, toRef } from 'vue'
import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props) {
    const value = toRef(props, 'value')
    const handleChange = (e: any) => {
      props.onChange(+e.target.value)
    }
    return () => {
      return (
        <input
          type="number"
          value={value.value as number}
          onInput={handleChange}
        />
      )
    }
  }
})
