<template>
  <button type="button" class="btn btn-danger mx-4" @click="hit">
    {{ attack.name }}
  </button>
</template>

<script>
import { targetService } from '../services/TargetService'

export default {
  name: 'Attack',
  props: {
    attack: { type: Object, required: true }
  },
  setup(props) {
    return {
      hit() {
        targetService.attack(props.attack.modifier)
      }
    }
  },
  components: {}
}
</script>
