import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { attackRule } from '@/services/backdoor/api';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    PageContainer,
    ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Input, message, Collapse, CollapseProps, ConfigProvider, Modal, Image } from 'antd';
import React, { useRef, useState } from 'react';
// import type { FormValueType } from './components/UpdateForm';
import styles from './index.module.scss'
import AttackCard from './components/tableCard/attackCard';
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
    const imgRef = useRef(null);
    const [isPreviewVisible, setIsPreviewVisible] = useState(false);
    const [previewTrigger, setPreviewTrigger] = useState<string | undefined>();

    const columns: ProColumns<API.AttackListItem>[] = [
        {
            title: '序号',
            dataIndex: 'serial',
            valueType: 'index',
            width: 60,
        },
        {
            title: '开始时间',
            dataIndex: 'beginTime',
            sorter: true,
            valueType: 'dateTime',
        },
        {
            title: '完成时间',
            dataIndex: 'endTime',
            sorter: true,
            valueType: 'dateTime',
        },
        {
            title: '状态',
            dataIndex: 'status',
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
            width: 140
        },
        {
            title: '网络结构',
            dataIndex: 'network',
            valueType: 'text',
        },
        {
            title: '数据集',
            dataIndex: 'dataset',
            valueType: 'text',
        },
        {
            title: '攻击方法',
            dataIndex: 'attack',
            valueType: 'text',
        },
        {
            title: '触发器',
            dataIndex: 'trigger',
            valueType: 'option',
            render: (_, record) => {
                const hasTrigger = record.trigger !== undefined;

                return (
                    <Button type='link'
                        style={{ padding: '0' }}
                        disabled={!hasTrigger}
                        onClick={() => {
                            setPreviewTrigger(record.trigger);
                            setIsPreviewVisible(true);
                        }}
                    >
                        查看
                    </Button>
                )
            },
            width: 90,
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
            width: 120
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

    const preParamsContent = (preParams: preParamsType) => {
        return (
            <div className={styles['params']}>
                <span className={styles['item']} >
                    <span>mean:[{preParams.mean.join(', ')}]</span>
                </span>
                <span className={styles['item']}>
                    <span>std:[{preParams.std.join(', ')}]</span>
                </span>
                <span className={styles['item']}>
                    <span>scale:[{preParams.scale.join(', ')}]</span>
                </span>
                <span className={styles['item']}>
                    <span>inputSize:[{preParams.inputSize.join(', ')}]</span>
                </span>
            </div>
        )
    }
        

    const paramsContent = (params: paramsType) => {
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
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: '预处理参数',
            children: preParamsContent(preParams),
        },
        {
            key: '2',
            label: '参数',
            children: paramsContent(params),
        },
    ];


    const expandedRowRender = () => {
        return (
            <div>
                <Collapse items={items} bordered={false} style={{ borderRadius: '0px' }}/>
                <AttackCard />
            </div>
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
                <ProTable<API.AttackListItem, API.PageParams>
                    actionRef={actionRef}
                    rowKey="key"
                    search={false}
                    request={attackRule}
                    columns={columns}
                    toolBarRender={false}
                    expandable={{ expandedRowRender, expandedRowClassName : () => styles['expandedRow'], defaultExpandAllRows: false }}
                    tableLayout='fixed'
                    style={{ padding: '16px', borderRadius: '8px', backgroundColor: '#fff'}}
                />
                <Image
                    preview={{
                        visible: isPreviewVisible,
                        onVisibleChange: setIsPreviewVisible
                    }}
                    src={previewTrigger || ''}
                />
            </ConfigProvider>
        </PageContainer>
    );
};

export default LogTable;
