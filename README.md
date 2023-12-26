# **🖱** Practicando TDD

### En estos mini proyectos cree mediante (Test driven development) un ejercicio llamado FIZZBUZZ, tambien realize una CALCULADORA con react y en el cual utilize lo siguiente



* `vitest` { libreria para crear los test muy facilmente}
* `react` { libreria para crear la interfaz de usuario}
* `standard` { reglas de eslint para formatear el codigo}
* `mathjs`  {libreria para operaciones matematicas}
* `happy-dom` { crear las api del navegador en virtual para usar los test}


Los pasos que segui fueron

- agregue a la configuracion de vite, para hacer los test
```javascript
 test: { // <---- la config de vitest
    environment: 'happy-dom'
  }
```
- instale la **dependencias** que necesite
- configure eslint con **standard** en el package.json
```json
"eslintConfig": {
    "extends": "./node_modules/standard/eslinrc.json"
  }
```
- cree la carpeta y archivos de **test para fizzbuzz**
- cree la carpeta para el **componente** de react CALCULATOR
- cree en la carpeta de test el **archivo para testear** el componente de react
- cree el **componente de react** en la carpeta correspondiente
- cree un archivo de **CONSTANTS** donde guardo las constantes que uso en CALCULATOR

