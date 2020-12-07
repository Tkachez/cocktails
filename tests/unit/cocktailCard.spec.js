import { render } from '@testing-library/vue'
import CocktailCard from "@/components/CocktailCard"
import stubs from "../stubs"

describe('CocktailCard.vue component', () => {
  let cocktail;

  it('should render component with some props', () => {
    cocktail = {
      strDrink: 'White Russian',
    }

    const { getByText } = render(CocktailCard, {
      props: { cocktail },
      stubs
    })

    getByText(cocktail.strDrink)
  })
})



