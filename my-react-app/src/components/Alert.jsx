import React from 'react'

//on peut utiliser la destructuration du paramètre props
// afin de d'extraire et declarer uniquement les props d'interet

//On peut inserer du code (contenu de variables) directement dans le template en utilisant {}

/*La prop children est commune a tous les coposants React elle permet de specifierr un endroit 
du template dans lequel on va pouvoir afficher le template de composant(s) enfant(s) a l'interieur de la balise exportée*/

export default function Alert({ type, message, children}) {


    return (
        <>
            {/*<div className=(type === warning ? 'alert' : null*/}
            <div> {message} </div>
            {
                type === 'Warning' && <div>Attention</div>
            }

        </>
    )


}


