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
                        if (existing && existing.pokemons){
                            pokemons = pokemons.concat(existing.pokemons)
                        }
                        if (incoming && incoming.pokemons){
                            pokemons = pokemons.concat(incoming.pokemons)
                        }
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
