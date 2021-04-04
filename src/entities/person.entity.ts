import { Table, Column, Model, HasMany, Index, PrimaryKey, IsUUID } from 'sequelize-typescript'
import HobbyEntity from './hobby.entity';

@Table({
    timestamps: true
})
class PersonEntity extends Model {

    @IsUUID(4)
    @PrimaryKey
    @Column
    id: string = '';
    
    @Index
    @Column
    name: string = '';

    @Column
    birthday: Date = new Date();

    @HasMany(() => HobbyEntity)
    hobbies: HobbyEntity[] = [];
}

export default PersonEntity;