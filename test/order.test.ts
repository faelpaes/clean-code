import Item from "../src/item";
import Order from "../src/order";

describe('Order', () => {
    let order: Order;
    let item: Item;
    let itens: Array<Item> = [];

    test('Should create a new order', () => {
        item = new Item(1, 'Item 1', 50, 1);
        itens.push(item);

        item = new Item(2, 'Item 2', 100, 1);
        itens.push(item);

        item = new Item(3, 'Item 3', 80, 3);
        itens.push(item);

        order = new Order(1, '', '', itens);
        
        expect(order.total).toBe(390);
    });

})