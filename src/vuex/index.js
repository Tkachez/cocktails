import Vue from 'vue'
import Vuex from 'vuex'

//import cocktails modules
import cocktailsState from './cocktails/state'
import cocktailsActions from './cocktails/actions'
import cocktailsMutations from './cocktails/mutations'
import cocktailsGetters from './cocktails/getters'

//import ingredients modules
import ingredientsState from './ingredients/state'
import ingredientsActions from './ingredients/actions'
import ingredientsMutations from './ingredients/mutations'
import ingredientsGetters from './ingredients/getters'

//import glasses modules
import glassesState from './glasses/state'
import glassesActions from './glasses/actions'
import glassesMutations from './glasses/mutations'
import glassesGetters from './glasses/getters'

//import common modules
import commonState from './common/state'
import commonActions from './common/actions'
import commonMutations from './common/mutations'
import commonGetters from './common/getters'

Vue.use(Vuex)
const cocktails = {
    state: cocktailsState,
    mutations: cocktailsMutations,
    actions: cocktailsActions,
    getters: cocktailsGetters
}

const ingredients = {
    state: ingredientsState,
    mutations: ingredientsMutations,
    actions: ingredientsActions,
    getters: ingredientsGetters
}

const glasses = {
    state: glassesState,
    mutations: glassesMutations,
    actions: glassesActions,
    getters: glassesGetters
}

const common = {
    state: commonState,
    mutations: commonMutations,
    actions: commonActions,
    getters: commonGetters
}

export default new Vuex.Store({
    modules: {
        cocktails,
        ingredients,
        glasses,
        common
    }
})


