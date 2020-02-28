import { UrlParamMapper } from './url-state.types';

export const StringMapper: UrlParamMapper<string> = {
  toString: typedValue => typedValue,
  fromString: stringValue => stringValue
};

export const IntMapper: UrlParamMapper<number> = {
  toString: typedValue => typedValue.toString(),
  fromString: stringValue => parseInt(stringValue, 10)
};

export const FloatMapper: UrlParamMapper<number> = {
  toString: typedValue => typedValue.toString(),
  fromString: stringValue => parseFloat(stringValue)
};

export const BooleanMapper: UrlParamMapper<boolean> = {
  toString: typedValue => typedValue.toString(),
  fromString: stringValue => stringValue.toUpperCase() === 'TRUE'
};

export const DEFAULT_MAPPER: UrlParamMapper<any> = {
  toString: typedValue => typedValue as string,
  fromString: stringValue => stringValue
};
