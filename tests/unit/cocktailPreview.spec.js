import {render} from "@testing-library/vue";
import CocktailPreview from "@/components/CocktailPreview";
import stubs from "../stubs";

describe('Cocktail Preview  component', () => {

    it('should render CocktailCard if the cocktail is set', () => {
        cocktail = {
            strDrink: 'White Russian'
        }

        const { getByText } = render(CocktailPreview, {
            computed: {
                currentCocktail: () => cocktail,
            },
            stubs,
        })

        getByText(cocktail.strDrink)
    })
})
