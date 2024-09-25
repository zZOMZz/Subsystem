import { request } from '@umijs/max';

/** 新建规则 POST /api/rule */
export async function addRule(data: API.ListItemUpload) {
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

// 获取网络结构
export async function getNetwork() {
    const res = await request('/api/network/structure/find', {
        method: 'GET',
        params: {
            type: '2'
        }
    })

    return {
        data: res.result
    }
}

// 网络结构创建
export async function creatNetwork(data: API.NetworkUpload) {
    const res = await request('/api/network/structure/add', {
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return {
        data: res
    }
}

// 网络结构删除
export async function deleteNetwork(dataId: string) {
    const res = await request('/api/network/structure/del', {
        method: 'DELETE',
        params: {
            dataId
        }
    })

    return {
        data: res
    }
}

// 获取数据集
export async function getDataset() {
    const res = await request('/api/data/set/find', {
        method: 'GET',
        params: {
            type: '2'
        }
    })

    return {
        data: res.result
    }
}

// 数据集创建
export async function creatDataset(data: API.DatasetUpload) {
    const res = await request('/api/data/set/add', {
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return {
        data: res
    }
}

// 数据集删除
export async function deleteDataset(dataId: string) {
    const res = await request('/api/data/set/del', {
        method: 'DELETE',
        params: {
            dataId
        }
    })

    return {
        data: res
    }
}

// 获取触发器
export async function getTrigger() {
    const res = await request('/api/flip/flop/find', {
        method: 'GET',
        params: {
            type: '1'
        }
    })

    return {
        data: res.result
    }
}

// 触发器创建
export async function creatTrigger(data: API.TriggerUpload) {
    const res = await request('/api/flip/flop/add', {
        method: 'POST',
        data,
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return {
        data: res
    }
}

// 触发器删除
export async function deleteTrigger(dataId: string) {
    const res = await request('/api/flip/flop/del', {
        method: 'DELETE',
        params: {
            dataId
        }
    })

    return {
        data: res
    }
}

// 任务删除
export async function deleteRule(dataId: string) {
    const res = await request('/api/backdoor/attack/del', {
        method: 'DELETE',
        params: {
            dataId
        }
    })

    return {
        data: res
    }
}

