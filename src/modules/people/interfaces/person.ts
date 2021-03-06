import { Schema, Document } from 'mongoose';
import { Phone } from '../../phones/interfaces/phone.interface';
import { Address } from '../../locations/interfaces/address.interface';

export interface Person extends Document {

	readonly name: string;
	readonly lastname: string;
	readonly address: Address;
	readonly phone: Phone;
	readonly user_id: string;
  readonly email: string;
}
