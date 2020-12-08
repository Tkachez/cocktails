import {render} from "@testing-library/vue";
import CocktailPreview from "@/components/CocktailPreview";
import Vue from 'vue'
import Vuex from 'vuex';
import stubs from "../stubs";

Vue.use(Vuex)

describe('Cocktail Preview  component', () => {
    let cocktail, store

    beforeEach(() => {
        let cocktails = {
            state: {},
            actions: {
                setCurrentCockTail: jest.fn()
            }
        }
        store = new Vuex.Store({
            modules : {
                cocktails
            },
        });
    });

    it('should render CocktailCard if the cocktail is set', () => {
        cocktail = {
            strDrink: 'White Russian'
        }

        const { getByText } = render(CocktailPreview, {
            store,
            computed: {
                currentCocktail: () => cocktail,
            },
            stubs,
        })

        getByText(cocktail.strDrink)
    })
})
