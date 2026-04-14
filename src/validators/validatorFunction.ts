export type ValidatorFunction<T> = (value: T | any | unknown) => T;

export type ValidatorFunctionWithArg<
    ValueType,
    ValidatorArgType
> = (
    value: ValueType | any | unknown,
    validatorArg: ValidatorArgType
) => ValueType;
