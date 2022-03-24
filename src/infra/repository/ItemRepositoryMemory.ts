import Item from "../../domain/entity/Item";
import ItemRepository from "../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {

    items : Item[];

    constructor(){
        this.items = [
            new Item("UUID-001", "Instrumentos Musicais", "Guitarra", 1000),
            new Item("UUID-002", "Instrumentos Musicais", "Amplificador", 5000),
            new Item("UUID-003", "Acessórios", "Cabo P10", 30)
        ];
    }

    getByID(idItem: string): Item | undefined {
        return this.items.find(item => item.ID === idItem);
    }

}