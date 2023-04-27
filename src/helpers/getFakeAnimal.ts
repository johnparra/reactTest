import {  faker } from '@faker-js/faker';


export const getFakeAnimal = async( animal: string ) => {
    
    
    const getUrl = () => faker.internet.url();
    const getImage = () => faker.image.animals(644, 362, true);
    const getText = () => faker.lorem.sentences();
    const getTitle = () => faker.animal["type"]();

    const data = [...new Array(100)].map((item, index) => {
        return ({
            id: index + 1,
            url: getUrl(),
            title: getTitle(),
            description: getText(),
            image: getImage(),
        });
    });

    const fakeAnimals = data.filter( anim => anim.title === animal);
    
    return fakeAnimals;
}