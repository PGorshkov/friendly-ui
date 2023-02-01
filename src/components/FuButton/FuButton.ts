import {defineComponent, h, watch, ref, getCurrentInstance, nextTick, onMounted, PropType} from 'vue'
import './style.scss'

import * as types from './FuButton.d'
export default defineComponent({
  name: 'FuButton',
  props: {
    type: {
      type: String as PropType<types.FuButtonType>,
      default: 'primary',
      required: true
    },
    size: {
      type: String as PropType<types.FuButtonSize>,
      default: 'md',
      required: true
    },
    disabled: {
      type: Boolean,
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
        ],
        disabled: props.disabled
      },
        'asdasda'
      )
  }
})
