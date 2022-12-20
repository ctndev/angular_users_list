import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    private apiKeys: string[] = [
        'd5370c5c3367e73b30600210b571265a',
    ];
    validateApiKey(apiKey: string) {
        return this.apiKeys.find(_apiKey => apiKey === _apiKey);
    }

}
