import { prop, Typegoose } from 'typegoose';

class Schedule extends Typegoose {
  @prop({ required: true })
  date?: Date;

  @prop({ required: true })
  account?: string;
}

export const scheduleSchema = new Schedule().getModelForClass(Schedule);
