import { InMemoryCache } from "@apollo/client";
// https://www.apollographql.com/docs/tutorial/queries/#merge-cached-results
export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                pokemons: {
                    keyArgs: false,
                    merge(existing,incoming){
                        let pokemons = [];
                        if (existing && existing.results){
                            pokemons = pokemons.concat(existing.results)
                            console.log(existing)
                        
                        }
                        if (incoming && incoming.results){
                            pokemons = pokemons.concat(incoming.results)
                            console.log(incoming.results)
                        }
                        console.log(pokemons)
                        return{
                            ...incoming,
                            pokemons
                        };
                    }
                }
            }
        }
    }
});