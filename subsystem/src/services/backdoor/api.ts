import { request } from "@umijs/max";

export async function attackRule(
    params: {
        // query
        /** 当前的页码 */
        current?: number;
        /** 页面的容量 */
        pageSize?: number;
    },
    options?: { [key: string]: any },
) {
    const res = await request('/api/backdoor/attack/find', {
        method: 'GET',
        params: {
            // TODO: 转换参数
            // ...params,
            size: '10',
            page: '0',
        },
        ...(options || {}),
    });
    console.log('table rules res', res);
    return {
        data: res.result.content,
        total: res.result.totalElements,
        success: true
    }
}

export async function modalRule(
    params: {
        // query
        /** 当前的页码 */
        current?: number;
        /** 页面的容量 */
        pageSize?: number;
    },
    options?: { [key: string]: any },
) {
    const res = await request('/api/backdoor/model/find', {
        method: 'GET',
        params: {
            size: '10',
            page: '0'
        },
        ...(options || {}),
    });

    console.log('modal rules res', res);
    return {
        data: res.result.content,
        total: res.result.totalElements,
        success: true
    }
}

export async function sampleRule(
    params: {
        // query
        /** 当前的页码 */
        current?: number;
        /** 页面的容量 */
        pageSize?: number;
    },
    options?: { [key: string]: any },
) {
    const res = await request('/api/backdoor/sample/find', {
        method: 'GET',
        params: {
            size: '10',
            page: '0'
        },
        ...(options || {}),
    });

    console.log('sample rules res', res);
    return {
        data: res.result.content,
        total: res.result.totalElements,
        success: true
    }
}


