import Cart from '../service/Cart';
import Buyable from '../domain/Buyable';

describe('Cart', () => {
    let cart: Cart;
    let item1: Buyable;
    let item2: Buyable;
    let item3: Buyable;

    beforeEach(() => {
        cart = new Cart();
        item1 = { id: 1, name: 'Item 1', quantity: 2, price: 10 };
        item2 = { id: 2, name: 'Item 2', quantity: 1, price: 20 };
        item3 = { id: 3, name: 'Item 3', price: 30 };
    });

    test('new card should be empty', () => {
        expect(cart.items.length).toBe(0);
    });

    test('should add items to the cart', () => {
        cart.add(item1);
        cart.add(item2);
        cart.add(item3);

        expect(cart.items).toEqual([item1, item2, item3]);
    });

    test('should calculate the total cost without discount', () => {
        cart.add(item1);
        cart.add(item2);
        cart.add(item3);

        const totalCost = cart.getTotalCost();

        expect(totalCost).toBe(70);
    });

    test('should calculate the total cost with discount', () => {
        cart.add(item1);
        cart.add(item2);
        cart.add(item3);

        const totalCostWithDiscount = cart.getTotalCostWithDiscount(10);

        expect(totalCostWithDiscount).toBe(63);
    });

    test('should calculate the total cost with discount 100', () => {
        cart.add(item1);
        cart.add(item2);
        cart.add(item3);

        const totalCostWithDiscount = cart.getTotalCostWithDiscount(100);

        expect(totalCostWithDiscount).toBe(70);
    });

    test('should remove an item from the cart by id', () => {
        cart.add(item1);
        cart.add(item2);

        cart.removeItemById(1);

        expect(cart.items).toEqual([item2]);
    });

    test('should decrease the quantity of an item by id', () => {
        cart.add(item1);

        cart.decreaseQuantityById(1);

        expect(cart.items.length).toBe(1);
    });

    test('should remove an item from the cart if the quantity is 1', () => {
        cart.add(item2);

        cart.decreaseQuantityById(2);

        expect(cart.items).toEqual([]);
    });

    test('should not remove an item from the cart if the quantity is empty', () => {
        cart.add(item3);

        cart.decreaseQuantityById(3);

        expect(cart.items).toEqual([]);
    });
});