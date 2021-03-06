import { Module } from '@nestjs/common';
import { DonationsController } from './donations.controller';
import { DonationsService } from './donations.service';
import { TrackingService } from './tracking.service';
import { MongooseModule } from '@nestjs/mongoose';
import DonationSchema from '../../database/schemas/donation.schema';
import TrackingSchema from '../../database/schemas/tracking.schema';
import TrackingStepSchema from '../../database/schemas/trackingStep.schema';
import { SuppliesModule } from '../supplies/supplies.module';
import { HealthCentersModule } from '../health-centers/health-centers.module';
import { OrdersModule } from '../orders/orders.module';
import { PeopleModule } from '../people/people.module';
import { CommonModule } from '../common';

@Module({
  imports: [
  	MongooseModule.forFeature([{ name: 'Donation', schema: DonationSchema }]),
  	MongooseModule.forFeature([{ name: 'Tracking', schema: TrackingSchema }]),
  	MongooseModule.forFeature([{ name: 'TrackingStep', schema: TrackingStepSchema }]),
  	SuppliesModule,
  	HealthCentersModule,
  	OrdersModule,
    PeopleModule,
    CommonModule
  ],
  controllers: [DonationsController],
  providers: [DonationsService, TrackingService],
})
export class DonationsModule {}
