import axios from 'axios'

const API_BASE = process.env.VUE_APP_API_URL

export default {
    fetchTotalCocktails(ctx) {
        return new Promise((resolve, reject) => {
            axios.get(`http://localhost:5000/api/cocktails/count`)
                .then(res => res.data)
                .then(total => {
                    ctx.commit('setTotalPages', total)
                    resolve(total)
                }).catch(err => {
                reject(err)
            })
        })
    },
    fetchCocktailsFromDb(ctx, params) {
        return new Promise((resolve) => {
            axios.get(`http://localhost:5000/api/cocktails`, {
                params: {
                    skip: params.page * params.perPage,
                    limit: params.perPage,
                },
            })
                .then(res => res.data)
                .then(list => {
                    ctx.commit('setMyCocktails', list)
                    resolve(list)
                })
                .catch(err => console.log(err))
        })

    },
    addCocktailToDb(ctx, item) {
        return new Promise((resolve, reject) => {
            axios.post(`http://localhost:5000/api/cocktails`, item)
                .then(res => res.data)
                .then(item => {
                    resolve(item)
                })
                .catch(err => {
                    reject(err)
                })
        })

    },
    deleteCocktailFromDb(ctx, item) {
        axios.delete(`http://localhost:5000/api/cocktails/${item._id}`)
            .then(() => {
                ctx.commit('deleteCocktail', item)
            })
            .catch(err => console.log(err))
    },
    searchCocktailById(ctx, query) {
        return new Promise(resolve => {
            axios.get(`${API_BASE}/lookup.php`, {
                params: {
                    i: query
                }
            })
                .then(res => res.data.drinks[0])
                .then(cocktail => {
                    resolve(cocktail)
                }).catch(err => console.log(err))
        })
    },
    searchCocktailsByTitle(ctx, query) {
        axios.get(`${API_BASE}/search.php`,
            {
                params: {
                    s: query
                }
            })
            .then(res => res.data.drinks)
            .then(list => {
                ctx.commit('setCocktailsSearchResults', list)
            }).catch(err => console.log(err))
    },
    searchCocktailsByIngredient(ctx, query) {
        axios.get(`${API_BASE}/filter.php`, {
            params: {
                i: query
            }
        })
            .then(res => res.data.drinks)
            .then(list => {
                ctx.commit('setCocktailsSearchResults', list)
            }).catch(err => console.log(err))
    },
    searchCocktailsByGlass(ctx, query) {
        axios.get(`${API_BASE}/filter.php`,
            {
                params: {
                    g: query
                }
            })
            .then(res => res.data.drinks)
            .then(list => {
                ctx.commit('setCocktailsSearchResults', list)
            }).catch(err => console.log(err))
    },
    randomCocktail(ctx) {
        axios.get(`${API_BASE}/random.php`).then(res => res.data.drinks).then(item => {
            const [result] = item;
            ctx.commit('setCurrentCocktail', result)
        })
    },
    loadFullInfo(ctx, id) {
        axios.get(`${API_BASE}/lookup.php`, {
            params: {
                i: parseInt(id),
            }
        })
            .then(res => {
                const [cocktail] = res.data.drinks
                return cocktail
            })
            .then(cocktail => {
                ctx.commit('setCurrentCocktail', cocktail)
            })
            .catch(err => console.log(err))
    },
    clearMyCocktails(ctx) {
        ctx.commit('clearMyCocktails')
    },
    setCurrentCockTail(ctx, item) {
        ctx.commit('setCurrentCocktail', item)
    },
    addCocktailToMyList(ctx) {
        ctx.commit('addCocktail')
    },
    clearSearch(ctx) {
        ctx.commit('clearSearch')
    },
    incrementPage(ctx) {
        return new Promise(resolve => {
            ctx.commit('incrementPage')
            resolve()
        })
    },
    setCurrentPage(ctx, page) {
        ctx.commit('setCurrentPage', page)
    },
}
