import { writable, get } from "svelte/store"

export const Items = writable<cartItem[]>([]);

//Add to cart
export const addToCart = (id: String) => {
    let items = get(Items)
    let position = items.findIndex(
        (item) => { return item.id == id}
    )
    if (position !== -1) {
        //If not in cart
        Items.update(() => {
            let updated = items.map((item) => {
                if (item.id === id) {
                    return {...item, quantity: item.quantity + 1};
                }

                return item;
            });
            return updated;
        })
    } else {
        //If in cart already
        Items.update(() => {
            return [...items, {id : id, quantity : 1}];
        })
    }
}

//Delete from cart
export const deleteFromCart = (id: String) => {
    let items = get(Items)
    let position = items.findIndex(
        (item) => { return item.id == id}
    )
    if (items[position].quantity - 1 === 0) {
        items.splice(position, 1);
    } 

    Items.update(() => {
        let updated = items.map((item) => {
            if (item.id === id) {
                return {...item, quantity: item.quantity - 1};
            }
            return item;
        });
        return updated;
    })
}