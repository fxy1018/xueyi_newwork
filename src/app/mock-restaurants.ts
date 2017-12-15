import {Restaurant} from './restaurant';

export const RESTAURANTS: Restaurant[] = [
    {
        rid: 1,
        name: "Tuc Craft Kitchen",
        street: "60 W Cordova Street",
        unit: "",
        city: "Vancouver",
        province: "BC",
        postal_code: "V6B 1C9"
    },
    {
        rid: 2,
        name: "Fable ",
        street: "1944 W 4th Avenue",
        unit: "",
        city: "Vancouver",
        province: "BC",
        postal_code: "V6J 1MS"
    },
    {
        rid: 3,
        name: "The Flying Pig",
        street: "1168 Hamilton Street",
        unit: "Unit 104",
        city: "Vancouver",
        province: "BC",
        postal_code: "V6B 2S2"
    },
    {
        rid: 4,
        name: "Guu with Garlic",
        street: "1698 Robson Street",
        unit: "",
        city: "Vancouver",
        province: "BC",
        postal_code: "V6G 1C7"
    },
    {
        rid: 5,
        name: "The Flying Pig",
        street: "102 Water Street",
        unit: "",
        city: "Vancouver",
        province: "BC",
        postal_code: "V6B 2K8"
    }
]



//curl -H 'Content-Type:application/json' -X POST 'http://localhost:3000/api/restaurants' -d '{"rid":7, "name":"test1"}'
