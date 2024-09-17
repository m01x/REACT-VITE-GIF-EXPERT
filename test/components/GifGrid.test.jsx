import  { render, screen } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en <GifGrid/> ', () => { 
    
    const category = 'One Punch';

    test('Debe de mostrar el Loading inicialmente', () => { 
        
        render(<GifGrid category={category}/>);
        expect(screen.getByText('🔄️ Cargando...'));
        expect(screen.getByText(category));

        screen.debug();
        
     });

     test('debe mostrar items cuando se cargar las imágenes mediante useFetchGifs', ()=>{

     });
 });