import PersonEntity from "../entities/person.entity";
import PersonModel from "../models/person.model";


class TodoService {

    public async create(model: PersonModel) {
        try {
            const person = PersonEntity.build({ 
                name: model.name, 
                birthday: model.birthday
            })
            person.save()
        } catch (error) {
            console.error(error);
        }
    }

    public async findAll() {
        return PersonEntity.findAll();
    }

    public async update(name: string) {
        PersonEntity.update(
            {
                name: 'bobby'
            },
            { where: { id: 1 } }
        ).then(() => {})
    }
}

export default TodoService;