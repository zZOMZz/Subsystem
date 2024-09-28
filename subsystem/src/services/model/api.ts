import { request } from "@umijs/max";

export async function getTestModal() {
    const res = await request('/api/customize/model/find', {
        method: 'GET',
        params: {
            type: '5'
        }
    });

    return {
        data: res.result
    }
}

export async function addRule(data: API.ModelUploadItem) {
    const res = await request('/api/rule', {
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return {
        data: res
    }
}