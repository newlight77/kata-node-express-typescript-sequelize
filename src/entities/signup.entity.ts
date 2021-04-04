import { Table, Column, Model, HasMany, Index, PrimaryKey, IsUUID } from 'sequelize-typescript'
import SignupModel from '../models/signup.model';
import { SignupModelBuilder } from '../models/signup.model';

@Table({
    timestamps: true
})
class SignupEntity extends Model {

    @IsUUID(4)
    @PrimaryKey
    @Column
    id: string = '';
    
    @Index
    @Column
    username: string = '';

    @Column
    firstname: string = '';

    @Column
    lastname: string = '';

    @Column
    phoneNumber: string = '';

    public getUsername(): string {return this.username;}
    public getFirstname(): string {return this.firstname;}
    public getLastname(): string {return this.lastname;}
    public getPhoneNumber(): string {return this.phoneNumber;}
}

export function fromEntity(entity: SignupEntity): SignupModel {
    return new SignupModelBuilder(entity.getUsername())
            .setFirstname(entity.getFirstname())
            .setLastname(entity.getLastname())
            .setPhoneNumber(entity.getPhoneNumber())
            .build();
}

export function toEntity(model: SignupModel): SignupEntity {
    return new SignupEntity({ 
        username: model.username,
        firstname: model.firstname,
        lastname: model.lastname,
        phoneNumber: model.phoneNumber,
    });
}


export default SignupEntity;