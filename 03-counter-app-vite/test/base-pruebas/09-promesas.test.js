import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas.js";

describe('pruebas en 09-promesas.test.js', () => { 
    test(' getHeroeByIdAsync debe retornar un heroe', () => { 
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
            })
    });
 });