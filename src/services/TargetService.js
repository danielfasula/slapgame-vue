import { AppState } from '../AppState'

class TargetService {
  attack(mod) {
    if (AppState.target.health - (AppState.target.debuff * mod) > 0) {
      AppState.target.debuff += (mod / 5)
      AppState.target.health -= (AppState.target.debuff * mod)
      AppState.target.hits++
    } else {
      AppState.target.health = 0
    }
  }
}

export const targetService = new TargetService()
