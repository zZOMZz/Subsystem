import { request } from "@umijs/max";

// 上传接口
export async function uploadFile(data: FormData) {
    const res = await request('/api/file/upload', {
        method: 'POST',
        data
    })

    return {
        data: res
    }
}

// 下载接口
export async function downloadFile(filepath: string) {
    return request('/api/file/download', {
        method: 'GET',
        params: {
            filepath
        }
    })
}