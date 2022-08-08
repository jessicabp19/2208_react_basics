import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js', () => {
  
    test('should return an url', async () => { 
        const url = await getImagen();
        console.log(url);
        expect( typeof url ).toBe('string');
     })

})
