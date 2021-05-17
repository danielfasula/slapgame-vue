import { reactive } from 'vue'

export const AppState = reactive({
  target: {
    name: 'Rui',
    health: 10000,
    hits: 0,
    items: [],
    debuff: 0
  },
  attacks: [
    {
      name: 'First Form',
      description: 'Water Surface Slash',
      modifier: 5
    },
    {
      name: 'Seventh Form',
      description: 'Piercing Rain Drop',
      modifier: 15
    },
    {
      name: 'Fourth Form',
      description: 'Striking Tide',
      modifier: 10
    },
    {
      name: 'Tenth Form',
      description: 'Constant Flux',
      modifier: 20
    }
  ]
})
