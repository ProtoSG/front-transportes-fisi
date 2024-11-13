export interface formField<T> {
  name: keyof T;
  type: string;
  placeholder: string;
  label: string;
}
