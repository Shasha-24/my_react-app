





/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Alert from './components/Alert'
import './App.css'
import MyComponent from './components/MyComponent'

//importer le nouveau composant et l'afficher 
// dans le temple du composant App

function App() {
  
/* useSate est un hook d'état qui fournit une variable 
d'état et une fonction pour la mettre  a jour.
const [state, setState]= useState(initialState)*/

const [count, setCount] = useState(0)


// handleClick clickHandler
const handleClick = () =>{
 setCount(count + 1)
}

  const handleClick2 = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Compteur</h1>
      {count}

      {/* <Alert message={'test'} type={'Warning'} />
      <alert message={'j/'utilise des balises ouvrante/fermantes'}type=('Not Warning') >
      <p>Contenu</p>
      <Alert*/}
      <br/>
      <button onClick={handleClick}>Plus un</button>
      <button onClick={handleClick2}>moins un</button>
    </>
  )
}

export default App



// ici type a une valeur par defaut (information)
// l'objet props est destructure ici
export function Alert({ type = 'information', heading, children, closable, onClose }: Props) {
  // inference de type: ts devine le type des variables grace
  // au type de retour des fonctions
  const [visible, setVisible] = useState<boolean>(true);

  if (!visible) {
    return null;
  }

  // closeClickHandler handleCloseClick
  function handleCloseClick() {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  }

  return (
    <div className="Alert">
      <div>
        <span role="img" aria-label={type === 'warning' ? 'Warning' : 'Information'}>
          {type === 'warning' ? '⚠' : 'ℹ️'}
        </span>
        <span>{heading}</span>
      </div>

      {closable && (
        <button aria-label="Close" onClick={handleCloseClick}>
          <span role="img" aria-label="Close">
            ❌
          </span>
        </button>
      )}
      <div>{children}</div>
    </div>
  );
}*/

