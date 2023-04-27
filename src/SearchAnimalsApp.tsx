import { useState } from 'react';
import { AddQuery, FakeAnimalsGrid } from './components';

export const SearchAnimalsApp = () => {

  const [ fakeanimal, setFakeanimal ] = useState(['']);
    
    const onAddFakeAnimal = ( newFakeAnimal: string ):void => {
      if ( fakeanimal.includes( newFakeAnimal ) ) return;
      setFakeanimal([ newFakeAnimal ]);
    }

  return (
    <>

    <h1>Google</h1>

    <AddQuery 
      onNewFakeanimal = { (value:string ) => onAddFakeAnimal(value) }
    />

    { 
        fakeanimal.map( ( fakeanimal ) => (
          <FakeAnimalsGrid 
            key={ fakeanimal } 
            fakeanimal={ fakeanimal } />
        ))
    }
    </>
  )
}


