import { defineComponent, toRef } from 'vue'
import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'StringField',
  props: FieldPropsDefine,
  setup(props) {
    const value = toRef(props, 'value')
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => {
      return (
        <input
          type="text"
          value={value.value as string}
          onInput={handleChange}
        />
      )
    }
  }
})
