# Las 10 reglas para trabajar con JSX

## 1. pintar algo con react-js
```javascript
ReactDOM.render(
  element,// estructura jsx para pintar
  document.getElementById('root')// elemento donde se pintara
);
```
## 2. ejemplo basico de jsx en una sola linea
```javascript
const element = <h1>Hello, world!</h1>;
```
## 3. dentro de llaves en JSX. Por ejemplo, 2 + 2, user.firstName, o formatName(user) son todas expresiones válidas de Javascript

ejemplo 1:
```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
```
ejemplo 2:

```javascript
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

## 4. Dividimos JSX en varias líneas para facilitar la lectura. Aunque no es necesario, cuando hagas esto también te recomendamos envolverlo entre paréntesis para evitar errores por la inserción automática del punto y coma.

## 5. JSX también es una expresión
Esto significa que puedes usar JSX dentro de declaraciones if y bucles for, asignarlo a variables, aceptarlo como argumento, y retornarlo desde dentro de funciones:

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
## 6. atributos con JSX
Puedes utilizar comillas para especificar strings literales como atributos:

```javascript
const element = <div tabIndex="0"></div>;
```
## 7. También puedes usar llaves para insertar una expresión JavaScript en un atributo:

```javascript
const element = <img src={user.avatarUrl}></img>;
```

## 8. No pongas comillas rodeando llaves cuando insertes una expresión JavaScript en un atributo. Debes utilizar comillas (para los valores de los strings) o llaves (para las expresiones), pero no ambas en el mismo atributo.

## 9. Advertencia:

Dado que JSX es más cercano a JavaScript que a HTML, React DOM usa la convención de nomenclatura camelCase en vez de nombres de atributos HTML.

Por ejemplo, class se vuelve className en JSX, y tabindex se vuelve tabIndex.

## 10. practica :P