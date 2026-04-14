import * as z from 'zod';
import { ValidatorFunction } from './validatorFunction';

export const integer: ValidatorFunction<number> = (num) => z.int().parse(num);

export const nonNegative: ValidatorFunction<number> = (num) => z.number().nonnegative().parse(num);
