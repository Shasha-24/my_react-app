# Cours_TS_React
# Introduction a React

Une bibliothèque open-source qui permet la construction d'interfaces graphiques avec HTML, CSS et JavaScript.

Dans cette intro nous allons:
    - Comprendre les avantages apportés par React
    - découvrir le **JSX** --> pour JavaScript XML, qui est une extension de JavaScript 
    - Créer les **composants** --> Une fonction qui retourne du JSX
    - Comprendre les imports et les exports 
    - Utiliser des **props**
    - Utiliser le State 
    - Utiliser les events en React 

React --> framework en JS 

JavaScript permet de manipuler le DOM : c'est le représentation 'objet' des element HTML qui constitue une page web. Autrement dit, c'est une interface qui permet d'interagir avec la structure des pages web.

Définition de DOM : https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model

React utilise un DOM virtuel pour afficher ses composants (virtual DOM, shadow DOM), car manipuler le DOM directement peut être très couteux.

## JSX

- Le JSX ressemble a de l'HTML mais ce n'est pas de l'HTML
- le JSX c'est pas de l'HTML ni du JS mais un mélange des 2 
- ex: 'class' en HTML est remplacée par 'className' dans le JSX

Le JSX n'est pas directement execute par les navigateurs Web
Transpiler (compiler); l'outil pour transpiler c'est **babel** (https://babeljs.io/repl)

codesandbow: https://codesandbox.io/


## REACT 

React 2 bibliothèque: 
 - React 
 - React-dom/client

React DOM utilise root pour racine, indique le point d'entrée de l'application 


```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

## Imports/Exports

Les imports et les exports en JS :
 - Les exports/imports nommes
 - L'export default 

vite outils qui va permettre de faire plusieurs chose rapidement, ça fonctionne avec react mais pas que avec plusieurs autre bibliothèque.


## Vite 

```
npm create vite my-react-app -- --template react
cd my-vue-app
npm install
npm run dev

```

## pour node_module

```
npm install
```

A chaque fois qu'on met un dossier, le fichier mettre une masjuscule


## ES7+ React/Redux/React-Native snippets

Installer, rfc etc...

attribus jsx 

Les porps correspond 


creer un composant qui affiche les alerte 

childrens permet d'afficher les elements du composants 

## exemple alerte 

```
function App() {

const [count, setCount] = useState(0)

  return (
    <>
      <h1>Alert</h1>

      <Alert message={'test'} type={'Warning'} />
    </>
  )
}
export default App

```

## Le state 

L'etat d'un composant designe une variable speciale qui contient des informations sur le contenu actuel du composant. Par exemple, un composant peut être en état d'erreur ou de chargement.
Un changement de cet état va entraîner ce qu'on appelle comunement un : 're-ender'

- useSate est un hook d'état qui fournit une variable 
  d'état et une fonction pour la mettre  a jour.
  const [state, setState]= useState(initialState)

**handler** fonction qui va te laisser t'occuper de tout 

# Typescript

- installation de manière global : npm install -g typescript 
- tsc = pour pvr l'utiliser sur les navigateur
- npm init 
- cd ./typescript
- npm init 
- npm install
- npm run dev

Une variable peut avoir plusieurs types.


## Interface

interfaces utiliser pour typer une variable.
On peut comparer une interface a un contrat, implementer une interface c'est s'engager a posseder toutes les proprietes presentees dans l'interfaces


## Class
mode d'emplois, avec leur propres interface, qui vont être 'autonome'.
Class => categorie 

