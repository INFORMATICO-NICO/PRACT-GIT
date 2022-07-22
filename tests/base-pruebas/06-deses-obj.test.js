import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Pruebas en 06-deses-obj ', () => {
    
    test('usContext debe retornar un objeto', () => {
        
        const obj = {
            clave: 5414,
            nombre: 'nicolas',
            edad: 27,
            rango: 'dios',
        }

        const {clave,nombre,edad,rango} = obj;

        const context = usContext({ clave, nombre, edad, rango });

        expect(context).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });

    })

})