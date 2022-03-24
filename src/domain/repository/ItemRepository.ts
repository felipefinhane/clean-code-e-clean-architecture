import Item from "./../entity/Item";

export default interface ItemRepository{
    getByID(idItem: string): Item | undefined ; 
}