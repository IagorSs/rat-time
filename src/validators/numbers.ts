import * as z from 'zod';
import { ValidatorFunction, ValidatorFunctionWithArg } from './validatorFunction';

export const integer: ValidatorFunction<number> = (num) => z.int().parse(num);

export const nonNegative: ValidatorFunction<number> = (num) => z.number().nonnegative().parse(num);

export const less: ValidatorFunctionWithArg<number, number> = (num, validatorArg) => z.number().lt(validatorArg).parse(num);
