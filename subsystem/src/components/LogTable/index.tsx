import { addRule, removeRule, rule, updateRule } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    ModalForm,
    PageContainer,
    ProDescriptions,
    ProFormText,
    ProFormTextArea,
    ProTable,
} from '@ant-design/pro-components';
import { FormattedMessage, useIntl } from '@umijs/max';
import { Button, Drawer, Input, message, Collapse, CollapseProps } from 'antd';
import React, { useRef, useState } from 'react';
import type { FormValueType } from './components/UpdateForm';
import styles from './index.module.scss'
import TableCard from './components/tableCard';
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
const handleUpdate = async (fields: FormValueType) => {
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

    /**
     * @en-US International configuration
     * @zh-CN 国际化配置
     * */
    const intl = useIntl();

    const columns: ProColumns<API.RuleListItem>[] = [
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.serial"
                    defaultMessage="serial number"
                />
            ),
            dataIndex: 'serial',
            valueType: 'index',
            width: 60,
        },
        {
            title: <FormattedMessage id="pages.searchTable.beginTime" defaultMessage="beginTime" />,
            dataIndex: 'beginTime',
            sorter: true,
            valueType: 'dateTime',
            width: 200,
        },
        {
            title: <FormattedMessage id="pages.searchTable.endTime" defaultMessage="endTime" />,
            dataIndex: 'endTime',
            sorter: true,
            valueType: 'dateTime',
            width: 200,
        },
        {
            title: <FormattedMessage id="pages.searchTable.status" defaultMessage="Status" />,
            dataIndex: 'status',
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.status.finished"
                            defaultMessage="finish"
                        />
                    ),
                    status: 'Default',
                },
                1: {
                    text: (
                        <FormattedMessage id="pages.searchTable.status.unfinished" defaultMessage="unfinished" />
                    ),
                    status: 'Processing',
                }
            },
            width: 100,
        },
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.frame"
                    defaultMessage="selected frame"
                />
            ),
            dataIndex: 'frame',
            valueType: 'text',
        },
        {
            title: <FormattedMessage id="pages.searchTable.network" defaultMessage="network constructor" />,
            dataIndex: 'network',
            valueType: 'text',
        },
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.dataset"
                    defaultMessage="dataset"
                />
            ),
            dataIndex: 'dataset',
            valueType: 'text',
        },
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.attack"
                    defaultMessage="attack methods"
                />
            ),
            dataIndex: 'attack',
            valueType: 'text',
        },
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.trigger"
                    defaultMessage="trigger"
                />
            ),
            dataIndex: 'trigger',
            valueType: 'option',
            render: () => {
                return (
                    <Button type='link'>查看</Button>
                )
            },
            width: 100,
        },
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.operate"
                    defaultMessage="operate"
                />
            ),
            dataIndex: 'operate',
            valueType: 'option',
            render: () => {
                return (
                    <>
                        <Button type='link'>下载</Button>
                        <Button type='link'>删除</Button>
                    </>
                )
            }
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
                <Collapse items={items} bordered={false} defaultActiveKey={['1']} />
                <TableCard />
            </>
        )
    }

    return (
        <PageContainer header={{ title: null }}>
            <ProTable<API.ListItem, API.PageParams>
                actionRef={actionRef}
                rowKey="key"
                search={false}
                request={rule}
                columns={columns}
                toolBarRender={false}
                expandable={{expandedRowRender}}
                tableLayout='fixed'
            />
        </PageContainer>
    );
};

export default LogTable;
