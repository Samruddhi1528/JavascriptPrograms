class APIClient {
    public baseURl: string
    private apiKey: string;
    protected timeout: number;

    constructor(baseURl: string, apiKey: string, timeout: number) {
        this.baseURl = baseURl
        this.apiKey = apiKey
        this.timeout = timeout
    }


    private getAuthHeader(): string {
        return "Bearer " + this.apiKey;
    }

    public sendRequest(path: string): void {
        console.log("GET " + this.baseURl + path);
        console.log("Auth: " + this.getAuthHeader());
        console.log("Timeout: " + this.timeout + "ms");
    }

}

class UserAPIClient extends APIClient {
    getUsers(): void {
        console.log("Fetching users (timeout: " + this.timeout + "ms)"); //You can use protected data of parent class here
        console.log("URL: " + this.baseURl + "/users"); //You can use public data of parent class here
    }
}

let client = new APIClient("https://api.staging.com", "key_secret_123", 5000);
console.log("Base URL:", client.baseURl);
client.sendRequest("/health");