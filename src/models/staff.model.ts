import { prop, Typegoose } from 'typegoose';

class Schedule extends Typegoose {
  @prop({ required: true })
  code?: string;

  @prop({ required: true })
  schedule?: Record<string, unknown>;
}

export const scheduleSchema = new Schedule().getModelForClass(Schedule);
