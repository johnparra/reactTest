
import { useFetchFakeAnimals } from '../hooks/useFetchFakeAnimals';
import { FakeAnimalItem } from './FakeAnimalItem';

export const FakeAnimalsGrid = (data:any) => {
    if(!data.fakeanimal) 'type';

    const { images, isLoading } = useFetchFakeAnimals( data.fakeanimal );
    
    return (
        <>
            <h3>{ data.fakeanimal }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            

            <div className="card-grid">
                {
                    images.map( ( image:any ) => (
                        <FakeAnimalItem 
                            key={ image.id } 
                            { ...image }
                        />
                    ))
                }
                
            </div>

        </>
    )
}