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
        
        //Aplicar Jest Functions para hacer funciones Mock (funciones simuladas o data simulada)
        const inputVaue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={onNewCategory} /> ); //sujeto de pruebas✅

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target:{ value:inputVaue } } );
        fireEvent.submit(form);

        expect( input.value ).toBe(''); //* Se espera que una vez enviado el submit, el input sea limpiado...
        expect( onNewCategory ).toHaveBeenCalled(); //* Se espera que onNewCategory haya sido llamado o ejecutado.
        expect( onNewCategory ).toHaveBeenCalledTimes(1); //* Se espera que haya sido llamada x veces.
        expect( onNewCategory ).toHaveBeenCalledWith(inputVaue); //*Se espera que haya sido llamado con 'Saitama' valor...
        
      });

      test('No debe de llamar onNewCategory si el input está vacío', () => { 
        
        const inputValue = ''
        const onNewCategory = jest.fn(); //* Mock function!

        render( <AddCategory onNewCategory={onNewCategory} /> ); //*Test Sujeto!

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        
        fireEvent.input( input, { target:{ value:inputValue } } ); //escribimos '' en el input, ahora evaluemos..
        expect( input.value ).toBe('');


        fireEvent.submit(form);
        expect( onNewCategory ).toHaveBeenCalledTimes(0); //* Se espera que No haya sido ejecutado.
        

        
      });

})