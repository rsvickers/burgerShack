import { Burger } from "../models/Burger.js";

class FakeDb {
    constructor() {
        this.burgers = [
            new Burger({ name: 'Ye old 🧙‍♂️ Burger', description: 'This burger feels like magic in your mouth. Id explain it, but I am to lazy.', isSpicy: false, id: 1, price: 6.99, }),
            new Burger({ name: 'The Dirty 🧌 Burger', description: 'This burger tastes good, but looks weird. Covered in chili and such.', isSpicy: false, id: 2, price: 5.45, }),
            new Burger({ name: 'Spicy 🧟‍♀️ Burger', description: 'Is a spicy burg if I have ever seen one.', isSpicy: true, id: 3, price: 2.06, }),
        ]
    }
}


export const fakeDb = new FakeDb()