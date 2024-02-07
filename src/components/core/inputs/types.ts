export type CoreInputProps = {
  placeholder?: string;
  label?: string;
  icon?: string;
  type?: string;
  name?: string;
  required?: boolean;
  autoFocus?: boolean;

  /** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete */
  autocomplete?: string;
};
