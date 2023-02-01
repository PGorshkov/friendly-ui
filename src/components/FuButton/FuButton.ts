import {defineComponent, h, watch, ref, getCurrentInstance, nextTick, onMounted, PropType} from 'vue'
import './style.scss'

import * as types from './FuButton.d'

interface IFuButtonProps {
  type: types.FuButtonType,
  size: types.FuButtonSize
}
export default defineComponent({
  name: 'FuButton',
  props: {
    type: {
      type: String as PropType<IFuButtonProps['type']>,
      default: 'primary',
      required: true
    },
    size: {
      type: String as PropType<IFuButtonProps['size']>,
      default: 'md',
      required: true
    }
  },
  setup(props) {
    return () => h(
        'button',
      {
        class: [
          'FuButton',
          props.type,
          props.size
        ]
      },
        'asdasda'
      )
  }
})
