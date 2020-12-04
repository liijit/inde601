import { prop, Typegoose } from 'typegoose';

class ScheduleCreate extends Typegoose {
  @prop({ required: true })
  code?: string;

  @prop({ required: true })
  schedule?: Record<string, unknown>;
}

export const scheduleSchema = new ScheduleCreate().getModelForClass(ScheduleCreate);
