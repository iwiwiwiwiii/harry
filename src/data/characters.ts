export interface ICharacter {
    id: number;
    name: string;
    image: string;
    actor: string;
    gender: string;
    house: string;
    wandCore: string;
    alive: string;
}

export const characters: ICharacter[] = [
    {
        id: 1,
        name: 'Hermione Granger',
        image: '/images/hermiona.jpg',  
        actor: 'Emma Watson',
        gender: 'female',
        house: 'Gryffindor',
        wandCore: 'dragon heartstring',
        alive: 'yes'
    },
    {
        id: 2,
        name: 'Draco Malfoy',
        image: '/images/drako.jpg',
        actor: 'Tom Felton',
        gender: 'male',
        house: 'Slytherin',
        wandCore: 'unicorn tail-hair',
        alive: 'yes'
    },
    {
        id: 3,
        name: 'Hermione Granger',
        image: '/images/hermiona.jpg',
        actor: 'Emma Watson',
        gender: 'female',
        house: 'Gryffindor',
        wandCore: 'dragon heartstring',
        alive: 'yes'
    }
];