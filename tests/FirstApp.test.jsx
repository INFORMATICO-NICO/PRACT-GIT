import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';



describe('Pruebas en <FirstApp/ >', () => { 
    
    test('debe de hacer match con el snapshot', () => {
        
        const title= 'Hola, sOY gOKU'
        const {container} =render( <FirstApp title={ title } />)

        expect( container ) .toMatchSnapshot();

    });

});