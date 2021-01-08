import { prop, pre, post, getModelForClass } from '@typegoose/typegoose';
import { model, Schema, Model, Document } from 'mongoose';

class Nhsno {
  @prop({
    required: true,
  })
  no?: number;

  @prop({
    required: true,
  })
  user?: string;
}

export const nhsSchema = getModelForClass(Nhsno, {
  schemaOptions: { timestamps: { createdAt: 'creationAt', updatedAt: 'UpdatesAt' } },
});
