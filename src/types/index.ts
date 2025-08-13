export type EntityId = string | number
export type StringEnum<T> = T | (string & Record<never, never>)
