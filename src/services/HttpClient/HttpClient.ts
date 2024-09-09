import { IHttpClient, IHttpClientRequest, THttpData, THttpHeaders, THttpURL } from "./types";

export class HttpClient implements IHttpClient {
    baseUrl = ''; 
    queryKeyParams = '';
    queryParams = '';

    constructor(url = '', queryParams?: string) {
        this.baseUrl = url;
        this.queryKeyParams = queryParams || '';
    }

    async request({ method, url, data, headers = {}, query = "" }: IHttpClientRequest) {
        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: data ? JSON.stringify(data) : null,
        };

        this.setQueryParams(query);

        const finalyUrl = () => {
            if(this.queryParams && this.queryKeyParams){
              return this.baseUrl + url + '?' + [this.queryParams, this.queryKeyParams].join('&')
            } else if(this.queryParams){
              return this.baseUrl + url + '?' + this.queryParams
            } else {
              return this.baseUrl + url;
            }
        } 

        try {
            const response = await fetch(finalyUrl(), options);
            
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP Error ${response.status}: ${errorText}`);
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
           // console.error('HTTP Request Error:', error);
            throw error;
        }
    }

    setQueryParams = (query?: string) => {
        if(query){
            this.queryParams = query;
        } else{
            this.queryParams = ""
        }
    }

    get(url: THttpURL, query?: string, headers: THttpHeaders = {}) {
      return this.request({ method: 'GET', url, headers, query });
    }

    delete(url: THttpURL, headers: THttpHeaders = {}) {
        return this.request({ method: 'DELETE', url, headers});
    }

    post(url: THttpURL, data: THttpData, headers: THttpHeaders = {}) {
        return this.request({ method:'POST', url, data, headers});
    }

    put(url: THttpURL, data: THttpData, headers: THttpHeaders = {}) {
        return this.request({ method: 'PUT', url, data, headers});
    }

   
}


