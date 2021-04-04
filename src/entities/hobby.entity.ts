import { Table, Column, Model } from 'sequelize-typescript'

@Table({
    timestamps: true
})
class HobbyEntity extends Model {
    @Column
    name: string = "";

    @Column
    description: string = "";
}

export default HobbyEntity