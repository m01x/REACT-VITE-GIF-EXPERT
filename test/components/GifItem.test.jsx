import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => { 
    
    const title = 'makima';
    const url = 'https://media0.giphy.com/media/VIcRzb0tOPwk7ebiqM/100.gif?cid=fd6452dac4aju8daynrbfewi149ph14auj1gu7d4cp93wk0h&ep=v1_gifs_search&rid=100.gif&ct=g';

    test('Test - Match con el Snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        
        expect(container).toMatchSnapshot();

    });


    test('Debe mostrar la imagen con el url y el ALT indicado', () => { 
        
        render( <GifItem title={title} url={url}/> );
        //Para ver lo renderizado, screen.debug();

        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe( url );
        expect(alt).toBe( alt );
     });


     test('debe Mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url}/> );
        expect( screen.getByText( title )).toBeTruthy();

     });



});