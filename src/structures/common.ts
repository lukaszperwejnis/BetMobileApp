export interface WithChildrenProps {
  children: RenderType;
}

export interface WithExcludedChildrenProps {
  children?: never;
}

export type RenderType =
  | JSX.Element
  | Array<RenderType>
  | string
  | number
  | boolean
  | null;

export interface WithError {
  error: string;
}

export interface WithLoading {
  isLoading: boolean;
}

export interface WithTokenValidation {
  hasInvalidToken: boolean;
}
