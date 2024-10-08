import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { modalRule } from '@/services/backdoor/api';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    PageContainer,
    ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Input, message, Collapse, CollapseProps, ConfigProvider } from 'antd';
import React, { useRef, useState } from 'react';
// import type { FormValueType } from './components/UpdateForm';
import styles from './index.module.scss'
import ModalCard from './components/tableCard/modalCard';
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */
const handleAdd = async (fields: API.RuleListItem) => {
    const hide = message.loading('正在添加');
    try {
        await addRule({ ...fields });
        hide();
        message.success('Added successfully');
        return true;
    } catch (error) {
        hide();
        message.error('Adding failed, please try again!');
        return false;
    }
};

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */
const handleUpdate = async (fields: any) => {
    const hide = message.loading('Configuring');
    try {
        await updateRule({
            name: fields.name,
            desc: fields.desc,
            key: fields.key,
        });
        hide();

        message.success('Configuration is successful');
        return true;
    } catch (error) {
        hide();
        message.error('Configuration failed, please try again!');
        return false;
    }
};

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */
const handleRemove = async (selectedRows: API.RuleListItem[]) => {
    const hide = message.loading('正在删除');
    if (!selectedRows) return true;
    try {
        await removeRule({
            key: selectedRows.map((row) => row.key),
        });
        hide();
        message.success('Deleted successfully and will refresh soon');
        return true;
    } catch (error) {
        hide();
        message.error('Delete failed, please try again');
        return false;
    }
};

const LogTable: React.FC = () => {
    const actionRef = useRef<ActionType>();

    const columns: ProColumns<API.RuleListItem>[] = [
        {
            title: '序号',
            dataIndex: 'serial',
            valueType: 'index',
            width: 80,
        },
        {
            title: '启动时间',
            dataIndex: 'startTime',
            sorter: true,
            valueType: 'dateTime',
        },
        {
            title: '完成时间',
            dataIndex: 'completeTime',
            sorter: true,
            valueType: 'dateTime',
        },
        {
            title: '状态',
            dataIndex: 'state',
            valueEnum: {
                0: {
                    text: '未完成',
                    status: 'Default',
                },
                1: {
                    text: '已完成',
                    status: 'Processing',
                }
            },
            width: 140,
        },
        {
            title: '框架',
            dataIndex: 'frame',
            valueType: 'text',
        },
        {
            title: '待测试模型',
            dataIndex: 'modelTest',
            valueType: 'text',
        },
        {
            title: '数据集',
            dataIndex: 'dataSet',
            valueType: 'text',
        },
        {
            title: '检测方法',
            dataIndex: 'detectionMethod',
            valueType: 'text',
        },
        {
            title: '操作',
            dataIndex: 'operate',
            valueType: 'option',
            render: () => {
                return (
                    <>
                        <Button type='link' style={{ padding: '0', marginRight: '20px' }}>下载</Button>
                        <Button type='link' style={{ padding: '0' }}>删除</Button>
                    </>
                )
            },
            width: 160
        },
    ];

    // TODO: Collapse组件的items数据
    type preParamsType = {
        mean: number[],
        std: number[],
        scale: number[],
        inputSize: number[]
    }
    const preParams: preParamsType = {
        mean: [0.4914, 0.4822, 0.4465],
        std: [0.2023, 0.1994, 0.2010],
        scale: [0, 1],
        inputSize: [32, 32],
    }
    type paramsType = {
        [key: string]: number
    }

    const params: paramsType = {
        grid_s: 0.5,
        batch_size: 128,
        epochs: 200,
        poisoned_portion: 0.1,
        grid_k: 4,
        cross_ratio: 0.2,
        learning_rate: 0.01,
        target_label: 0
    }

    const preParamsContent = (record: any) => {
        return (
            <div className={styles['params']}>
                <span className={styles['item']} >
                    <span>mean:[{record.mean}]</span>
                </span>
                <span className={styles['item']}>
                    <span>std:[{record.std}]</span>
                </span>
                <span className={styles['item']}>
                    <span>scale:[{record.scale}]</span>
                </span>
                <span className={styles['item']}>
                    <span>inputSize:[{record.inputSize}]</span>
                </span>
            </div>
        )
    }


    const paramsContent = (record: any) => {
        const params = JSON.parse(record.parameterJson);
        return (
            <div className={styles['params']}>
                {
                    Object.keys(params).map((key) => {
                        return <span key={key} className={styles['item']} >{key}:{params[key]}</span>
                    })
                }
            </div>
        )
    }
    
    const expandedRowRender = (record: any) => {
        const items: CollapseProps['items'] = [
            {
                key: '1',
                label: '预处理参数',
                children: preParamsContent(record),
            },
            {
                key: '2',
                label: '参数',
                children: paramsContent(record),
            },
        ];

        return (
            <>
                <Collapse items={items} bordered={false} style={{ borderRadius: '0px' }} />
                <ModalCard jsonObject={record.jsonObject} />
            </>
        )
    }

    return (
        <PageContainer header={{ title: null }}>
            <ConfigProvider
                theme={{
                    components: {
                        'Table': {
                            'headerBg': '#fff',
                            'headerSplitColor': '#fff'
                        }
                    }
                }}
            >
                <ProTable<API.ModalListItem, API.PageParams>
                    actionRef={actionRef}
                    rowKey="key"
                    search={false}
                    request={modalRule}
                    columns={columns}
                    toolBarRender={false}
                    expandable={{ expandedRowRender, expandedRowClassName: () => styles['expandedRow'], defaultExpandAllRows: false }}
                    tableLayout='fixed'
                    style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#fff' }}
                />
            </ConfigProvider>
        </PageContainer>
    );
};

export default LogTable;
