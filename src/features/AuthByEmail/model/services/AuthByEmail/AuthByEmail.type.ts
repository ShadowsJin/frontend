export interface ProfileType {
  fullname: string;
  email: string;
}

export type updateTokenType = () => Promise<false | true>;
export type getMeType = () => Promise<false | ProfileType>;
