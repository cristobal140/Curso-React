import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp.js";
//para el test 3 es necesario lo siguiente para hacerlo de buena forma
import heroes from "../../src/data/heroes.js";

describe('pruebas en 08', () => { 
    // TEST 1
    test('debe retornar el heroe por ID', () => { 
        const id = 1;
        const heroe = getHeroeById ( id );

        expect (heroe).toEqual({id:1, name: 'Batman', owner:'DC'});
     })
    // TEST 2
     test('debe retornar undefined si el id no existe', () => { 
        const id = 100;
        const heroe = getHeroeById ( id );

        console.log(heroe);
        expect (heroe).toBeFalsy();
     })
     //TEST 3
     // Tarea
     // Debe de retornar un arreglo con los heroes de DC
     // Length = 3
     // toEqual al arreglo filtrado

     // debe retornar un arreglo con los heroes de Marvel
     // length = 2

     test('getHeroesByOwner heroes de DC', () => { 
            const  owner = 'DC';
            const heroes1 = getHeroesByOwner ( owner );
                 
            expect (heroes1.length).toBe(3);
            expect (heroes1).toEqual([
                { id: 1, name: 'Batman', owner: 'DC'},
                {id: 3, name: 'Superman',owner: 'DC'},
                {id: 4,name: 'Flash',owner: 'DC'}
            ]);
            //manera correcta de hacerlo:
            expect (heroes1).toEqual(heroes1.filter( (heroe) => heroe.owner === owner ));
            
            console.log(heroes1);
        })

    test('getHeroesByOwner heroes de Marvel', () => { 
            const owner = 'Marvel';
            const heroem = getHeroesByOwner (owner);

            expect (heroem.length).toBe(2);
            //manera correcta de hacerlo:
            expect (heroem).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
            console.log(heroem);
     })
 })