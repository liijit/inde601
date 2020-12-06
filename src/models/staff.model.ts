import { prop, getModelForClass } from '@typegoose/typegoose';

class Schedule {
  @prop({ required: true })
  code?: string;

  @prop({ required: true })
  schedule?: Record<string, unknown>;
}

export const scheduleSchema = getModelForClass(Schedule);
