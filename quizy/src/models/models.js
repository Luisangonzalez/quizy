import mongoose from 'mongoose';
import {
  userSchema,
  cuestionBaseSchema,
  chooseCuestionSchema,
  oneCuestionSchema,
  arrowCuestionSchema,
  testSchema  } from './schemas';

export const User = mongoose.model('User', userSchema);
export const CuestionBase = mongoose.model('CuestionBase', cuestionBaseSchema);
export const ChooseCuestion = mongoose.model('CuestionChoose', chooseCuestionSchema);
export const ArrowCuestion = mongoose.model('ArrowCuestion', arrowCuestionSchema);
export const OneCuestion = mongoose.model('OneCuestion', oneCuestionSchema);
export const Test = mongoose.model('Test', testSchema);
