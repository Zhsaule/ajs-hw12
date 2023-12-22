export default interface Buyable {
    readonly id: number,
    readonly name: string,
    quantity?: number,    
    readonly price: number,
}