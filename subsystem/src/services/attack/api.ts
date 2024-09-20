import { request } from '@umijs/max';

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
    return request<API.RuleListItem>('/api/rule', {
        method: 'POST',
        data: {
            method: 'post',
            ...(options || {}),
        }
    });
}