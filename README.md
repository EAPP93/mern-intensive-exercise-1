# **package.json**

## **Scripts**

---

### **build**: *npx tsc* - ejecuta el tsconfig y generara lo que se ha especificado en el, en estro caso genera una carpeta dist con la solucion index.js dentro

### **start**: *node dist/index.js* - ejecutara el codigo transpilado de nuestro archivo index.ts *index.js*

### **dev*: *concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\"* - ejecuta 2 comandos de manera concurrente, el primero de ellos lo que hace es escuchar cualquier modificacion en nuesto archivo index.ts para transpilarla y el segundo lo que hara es ejecutar un demon de nuestro proyecto en especifico de nuestro *dist/index.js*

### **serve:coverage**: *npm run test && cd coverage/lcov-report && npx serve* - primero lanza un test, luego que se muestre la cobertura de test y se sirva en un servidor web

## **Dependencias**

---

### **Express**: este es un framework de node que sirve para crear una aplicacion de backend con node

### **Dotenv**: sirve para crear y manejar variables de entorno en todo el proyecto

### **Nodemon**: sirve para automatizar el reinicio de el server tras un cambio en el proyecto

### **TypeScript**: Dependencia necesaria para utilizar typescript el cual agrega tipos y otras funcionalidades a javascript

* **ts-node**: version para ejecutar typescript en node

### **webpack**: sirve para enpaquetar nuestro solucion final para hacerla mas ligera

* **webpack-cli**: sirve para ejercutar webpack

* **webpack-node-externals**: no

* **webpack-shell-plugin**: sirver para hacer la configuracion de webpack

### **eslint**: sirve establecer reglas a la hora de programar y codigo limpio que tendremos que seguir en equipo

### **jest**: sirver para hacer testing unitario e integracion

* **ts-jest**: es la version de typescritp para jest

* **@types/jest**: necesario para transpilar de typescritp a javascript

### **supertest**: sirve para hacer multriples test

### **serve**: servir el informe de cobertura de test en un server web

* @types/express: nos permite la exportacion de tipos de forma adecuada en express
* @types/node: nos permite la exportacion de tipos de forma adecuada en node

### **Concurrently**: ejecuta multiples comandos de manera concurrente

## **Variables de entorno**

---

### **PORT**: 8000

