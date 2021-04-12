import { IdentityService } from "../app/identity.service";

export function initializer(identityService: IdentityService): () => Promise<any> {
  return (): Promise<any> => identityService.init();
}