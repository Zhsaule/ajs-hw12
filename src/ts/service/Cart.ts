import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotalCost(): number {
        let totalCost = 0;
        for (const item of this._items) {
            const quantity = item.quantity ?? 1;
            totalCost += item.price * quantity;
        }
        return totalCost;
    }

    getTotalCostWithDiscount(discount: number): number {
        const totalCost = this.getTotalCost();
        if (discount >= 100) {
            discount = 0;
        }
        const discountedCost = totalCost - (totalCost * discount / 100);
        return discountedCost;
    }

    removeItemById(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }

    decreaseQuantityById(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
            const existingItem = this._items[index];
            //decreaseQuantityById
            if (existingItem.quantity && existingItem.quantity > 1) {
                existingItem.quantity--;
            } else
            //removeItemById if Item <= 1
            if (existingItem.quantity ?? 1 === 1) {
                this._items.splice(index, 1);
            }
        }
    }
}