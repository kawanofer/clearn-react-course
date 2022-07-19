import { AuthenticationParams } from "../usecases/authentication";

export const mockAuthentication = (): AuthenticationParams => ({
    email: 'test@test.com', password: 'test'
})