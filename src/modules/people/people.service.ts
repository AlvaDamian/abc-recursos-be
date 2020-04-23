import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './interfaces/person';
//import { UserExistsException } from './exceptions/user-exists.exception';
import { CreatePersonDto } from './dto/create-person.dto';
//import { PersonOutDto } from './dto/person-out.dto';


@Injectable()
export class PeopleService {

  constructor(@InjectModel('Person') private personModel: Model<Person>) {}


  async create(
    createPersonDto: CreatePersonDto,
  ): Promise<Person> {
    const createdPerson = new this.personModel(createPersonDto);
    return createdPerson.save();
  }

}
