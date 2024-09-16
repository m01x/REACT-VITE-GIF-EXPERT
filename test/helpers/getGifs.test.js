import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas en /helpers/getGifs', () => { 
    
    test('should return an array of gifs', async() => { 
        
        const gifs = await getGifs('One Punch');

        //Que traiga por lo menos algun resultado.
        expect(gifs.lenght).toBeGreaterThan( 0 );

        //Que la respuesta contenga la estructura esperada
        expect(gifs[0]).toEqual({
            id: expect.any( String ), //Espero lo que sea, que sea un string
            title: expect.any( String ),
            url: expect.any( String ),
        });

     });
 });