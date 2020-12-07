export default {
    cocktails: [],
    myCocktails: [],
    currentCocktail: null,
    perPage: 6,
    currentPage: 1,
    totalPages: null,
    language: 'En',
    navigationPages: [
        {
          id: 1,
          value: 'home',
          title: 'Home',
          link: '/'
        },
        {
            id: 2,
            value: 'profile',
            title: 'Profile',
            link: '/profile'
        },
        {
            id: 3,
            value: 'about',
            title: 'About us',
            link: '/about'
        },
    ]
}
