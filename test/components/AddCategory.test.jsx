import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={ ()=> {} } /> ) //con esto creamos el snapshot... que puede ser consumido con el screen()
        //screen.debug()

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target:{ value:'Saitama' } } );
        expect(input.value).toBe('Saitama');

     });

     test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        
        const inputVaue = 'Saitama';
        //TODO: ???
        render( <AddCategory onNewCategory={ ()=> {} } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input( input, { target:{ value:inputVaue } } );
        fireEvent.submit(form);

        expect ( input.value ).toBe('');


      })

})