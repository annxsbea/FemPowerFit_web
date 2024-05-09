export async function api<R, B>(endpoint: string, method = 'GET', body: null | B = null): Promise<R> {
    const url = 'https://jsonplaceholder.typicode.com/' + endpoint;
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    const init: RequestInit = {
        method,
        headers,
    }

    if (body) init.body = JSON.stringify(body);

    const response = await fetch(url, init);
    const jsonToObject = await response.json();
    return jsonToObject;
}