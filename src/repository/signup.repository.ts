import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import SignupEntity, { fromEntity, toEntity } from "../entities/signup.entity";
import SignupModel from "../models/signup.model";


class SignupRepository {

    public create(model: SignupModel) {
        try {
            const signup = toEntity(model);
            console.info(signup);
            signup.save();
        } catch (error) {
            console.error("an error occured while saving a signup", error);
        }
    }

    public update(name: string, model: SignupModel) {
        this.findOne(name).subscribe( p => {
            const signup = toEntity(model);
            SignupEntity.update(
                signup,
                { where: { name } }
            ).then(() => console.info(`updated the signup model by name ${name}`))
        })
    }

    public delete(name: string) {
        SignupEntity.destroy(
            { where: { name } }
        ).then(() => `delete the signup model by name ${name}`);
    }

    public findOne(name: string): Observable<SignupModel | null> {
        const entity: Promise<SignupEntity | null> = SignupEntity.findOne({where: {name}});
        let model = from(entity)
            .pipe( 
                map(e => {
                    if (e == null) return null;
                    return fromEntity(e);
                })
            );
        return model;
    }

    public findAll(): Observable<SignupModel[]> {
        const entities: Promise<SignupEntity[]> = SignupEntity.findAll();
        let models = from(entities)
            .pipe( 
                map(list => list.map(e => fromEntity(e)))
            );
        return models;
    }

}

export default new SignupRepository();