import { addRule, removeRule, updateRule } from '@/services/ant-design-pro/api';
import { sampleRule } from '@/services/backdoor/api';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    PageContainer,
    ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Input, message, Collapse, CollapseProps, ConfigProvider } from 'antd';
import React, { useRef, useState } from 'react';
// import type { FormValueType } from './components/UpdateForm';
import styles from './index.module.scss'
import SampleCard from './components/tableCard/sampleCard';
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
    /**
     * @en-US Pop-up window of new window
     * @zh-CN 新建窗口的弹窗
     *  */
    const [createModalOpen, handleModalOpen] = useState<boolean>(false);
    /**
     * @en-US The pop-up window of the distribution update window
     * @zh-CN 分布更新窗口的弹窗
     * */
    const [updateModalOpen, handleUpdateModalOpen] = useState<boolean>(false);

    const [showDetail, setShowDetail] = useState<boolean>(false);

    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<API.RuleListItem>();
    const [selectedRowsState, setSelectedRows] = useState<API.RuleListItem[]>([]);

    const columns: ProColumns<API.RuleListItem>[] = [
        {
            title: '序号',
            dataIndex: 'serial',
            valueType: 'index',
            width: 60,
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
            width: 120,
        },
        {
            title: '框架',
            dataIndex: 'frame',
            valueType: 'text',
            width: 130
        },
        {
            title: '待测试样本数',
            dataIndex: 'sampleNumber',
            valueType: 'text',
            width: 120
        },
        {
            title: '模型',
            dataIndex: 'correspondModel',
            valueType: 'text',
        },
        {
            title: '数据集',
            dataIndex: 'dataSet',
            valueType: 'text',
            width: 120
        },
        {
            title: '检测方法',
            dataIndex: 'detectionMethod',
            valueType: 'text',
            width: 140
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
            <>
                <Collapse items={items} bordered={false} style={{ borderRadius: '0px' }} />
                <SampleCard />
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
                <ProTable<API.SampleListItem, API.PageParams>
                    actionRef={actionRef}
                    rowKey="key"
                    search={false}
                    request={sampleRule}
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
