import { Course } from './course';

export const COURSES: Course[] = [
        {
            cid: 1,
            rid: 1,
            category: "entree",
            name: "halibut eggs benedict",
            price: 15,
            image: "https://s3-media3.fl.yelpcdn.com/bphoto/9A0iSEqXuKCEJgEHIuI2uw/o.jpg",
            ingredient: "halibut, egg, english muffin",
            option: "fully cooked, poached",
            vegetarian: "N",
            rating: 4,
            waiting_time: 5,
            new: "N"
        },
        {
            cid: 2,
            rid: 1,
            category: "breakfast",
            name: "pulled pork johnny cakes",
            price: 10,
            image: "https://s3-media2.fl.yelpcdn.com/bphoto/4ar51TSoULeQX-ifN3BSMQ/o.jpg",
            ingredient: "pork, pancake",
            option: "",
            vegetarian: "N",
            rating: 4.5,
            waiting_time: 10,
            new: "N"
        },
        {
            cid: 3,
            rid: 1,
            category: "salad",
            name: "octopus salad",
            price: 12,
            image: "https://s3-media4.fl.yelpcdn.com/bphoto/FGoDMcMNa2QLeVyPXh83eA/o.jpg",
            ingredient: "spinach, beet",
            option: "",
            vegetarian: "Y",
            rating: 3,
            waiting_time: 2,
            new: "Y"
        },
        {
            cid: 4,
            rid: 2,
            category: "main",
            name: "ceviche and chicharron",
            price: 10,
            image: "https://s3-media2.fl.yelpcdn.com/bphoto/qVEmU8PUqzjUE6N_CxauEw/o.jpg",
            ingredient: "fish",
            option: "",
            vegetarian: "N",
            rating: 4.2,
            waiting_time: 3,
            new: "N"
        },
        {
            cid: 5,
            rid: 2,
            category: "meat",
            name: "rib eye and frites",
            price: 18,
            image: "https://s3-media2.fl.yelpcdn.com/bphoto/47cXycxBA0x6e9-Ktb6Gww/o.jpg",
            ingredient: "rib, potato",
            option: "",
            vegetarian: "N",
            rating: 3.8,
            waiting_time: 6,
            new: "Y"
        },
        {
            cid: 6,
            rid: 2,
            category: "appetizer",
            name: "beef al forno",
            price: 20,
            image: "https://s3-media3.fl.yelpcdn.com/bphoto/Yyw-7SMBus7BxnCMd2bjfA/o.jpg",
            ingredient: "beef, cheese",
            option: "",
            vegetarian: "N",
            rating: 3.9,
            waiting_time: 8,
            new: "N"
        }
    
];