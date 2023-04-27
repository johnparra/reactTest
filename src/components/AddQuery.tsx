import { useState } from 'react';


export const AddQuery = ({ onNewFakeanimal }:any) => {
    console.log(onNewFakeanimal)

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }: any) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event: any ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewFakeanimal( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}