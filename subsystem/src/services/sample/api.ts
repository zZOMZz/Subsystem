import { request } from "@umijs/max";

export async function getSampleModal() {
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

export async function addRule(data: API.SampleUploadItem) {
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