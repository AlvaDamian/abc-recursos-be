import { Schema, Document } from 'mongoose';
import { Donation } from './Donation';
import { DonationItem } from './DonationItem';
import { TrackingStep } from './TrackingStep';

/**
Traking information of a donation.
*/
export interface Tracking extends Document {

  /**
  Tracking unique number.
  */
  readonly number: String;

  /**
  Donation beign tracked.
  */
  readonly donation: Schema.Types.ObjectId;

  /**
  Tracking steps made throug donation lifetime.
  */
  readonly steps: Array<TrackingStep>
}