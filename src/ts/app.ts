import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Gadget from './domain/gadget';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1018, 'The Avengers', '2012', 'США', '"Avengers Assemble!"', ['фантастика', 'боевик', 'фэнтэзи', 'приключения'], 137, 100));

console.log(cart.items);
console.log(cart.getTotalCost());
console.log(cart.getTotalCostWithDiscount(10));

cart.removeItemById(1001);
console.log(cart.items);

cart.add(new Gadget(1028, 'Smartphone1', 10, 1000));
console.log(cart.items);
console.log(cart.getTotalCost());
console.log(cart.getTotalCostWithDiscount(10));

cart.decreaseQuantityById(1028);
console.log(cart.items);
console.log(cart.getTotalCost());
console.log(cart.getTotalCostWithDiscount(10));

cart.decreaseQuantityById(1018);
console.log(cart.items);
