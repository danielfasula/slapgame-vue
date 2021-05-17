<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center text-center mt-4">
      <div class="col-4">
        <h1>Name: {{ state.target.name }}</h1>
      </div>
      <div class="col-4">
        <h1>Health: {{ state.target.health }}</h1>
      </div>
      <div class="col-4">
        <h1>Hits: {{ state.target.hits }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <img src="../assets/img/rui.webp" alt="" height="500" />
      </div>
    </div>
    <div class="row mt-4 d-flex justify-content-center">
      <Attack
        v-for="attack in state.attacks"
        :key="attack.name"
        :attack="attack"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      target: computed(() => AppState.target),
      attacks: computed(() => AppState.attacks)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
</style>
