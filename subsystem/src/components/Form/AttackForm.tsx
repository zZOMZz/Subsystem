import {
    PageContainer,
    ProForm,
    ProFormRadio,
    ProFormSelect,
} from '@ant-design/pro-components';
import { Card, Radio , Modal, Upload, message} from 'antd';
import { Button, Col, Form, Input, Row } from 'antd';
import TabInput from './components/TabInput';
import PreParameters from './components/Preprocessing';
import Parameters from './components/Parameters';
import Trigger from './components/Trigger';
import styles from './index.module.scss';
import React, { useState } from 'react';
import { modalConfig, DataModal, NetWorkModal } from './components/modal';


export interface TabInputConfig {
    config: InputConfig,
    label: string,
    buttonText: string
    modal: React.FC<modalConfig>
    onChange: (value: string) => void
    action: (value: string) => void
    deleteAction: (value: string) => void
}

type InputConfig = {
    name: string,
    custom: boolean
}[]

const netConfigInit = [
    {
        name: 'ResNet18',
        custom: false
    },
    {
        name: 'DenseNet121',
        custom: false
    },
    {
        name: 'VGG16',
        custom: false
    },
    {
        name: 'MobileNetV2',
        custom: false
    }
]
const datasetInit = [
    {
        name: 'GTSRB',
        custom: false
    },
    {
        name: 'CIFAR10',
        custom: false
    }
]

export interface DatasetParams {
    mean: number[];
    std: number[];
    scale: number[];
    inputsize: number[];
}

// 预处理参数默认值
const defaultPreParams: Record<string, DatasetParams> = {
    CIFAR10: {
        mean: [0.4914, 0.4822, 0.4465],
        std: [0.2023, 0.1994, 0.201],
        scale: [0, 1],
        inputsize: [32, 32]
    },
    GTSRB: {
        mean: [0.3337, 0.3064, 0.3171],
        std: [0.2672, 0.2564, 0.2629],
        scale: [0, 1],
        inputsize: [32, 32]
    }
}

interface attackOption {
    value: string,
    label: string
}
// 攻击方法
const attackMethods: Record<'PyTorch' | 'TensorFlow', attackOption[]> = {
    PyTorch: [
        {
            value: 'BadNet',
            label: 'BadNet'
        },
        {
            value: 'TrojanNet',
            label: 'TrojanNet'
        },
        {
            value: 'WaNet',
            label: 'WaNet'
        },
        {
            value: 'TrojanNN',
            label: 'TrojanNN'
        }
    ],
    TensorFlow: [
        {
            value: 'BadNet',
            label: 'BadNet'
        },
        {
            value: 'TrojanNet',
            label: 'TrojanNet'
        },
        {
            value: 'WaNet',
            label: 'WaNet'
        }
    ]
}

const paraConfig = [
    {
        name: 'target_label',
        label: '目标类别',
        defaultValue: '1',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'poisoned_portion',
        label: '投毒率',
        defaultValue: '0.1',
        step: '0.1',
        includes: ['BadNet', 'WaNet']
    },
    {
        name: 'trigger_size',
        label: '触发器尺寸',
        defaultValue: '3',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN']
    },
    {
        name: 'trigger_h',
        label: '触发器纵向位置',
        defaultValue: '0',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN']
    },
    {
        name: 'trigger_w',
        label: '触发器横向位置',
        defaultValue: '0',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN']
    },
    {
        name: 'epoch',
        label: '训练轮数',
        defaultValue: '150',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'batch_size',
        label: '训练批次大小',
        defaultValue: '256',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'learning_rate',
        label: '学习率',
        defaultValue: '0.001',
        step: '0.0001',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'select_point',
        label: '触发器黑色像素个数',
        defaultValue: '3',
        step: '1',

        includes: ['TrojanNet']
    },
    {
        name: 'neuron_num',
        label: '选择神经元个数',
        defaultValue: '1',
        step: '2',

        includes: ['TrojanNN']
    },
    {
        name: 'neuron_epoch',
        label: '触发器生成的迭代轮数',
        defaultValue: '500',
        step: '1',

        includes: ['TrojanNN']
    },
    {
        name: 'grid_s',
        label: '触发网',
        defaultValue: '0.5',
        step: '0.1',

        includes: ['WaNet']
    },
    {
        name: 'grid_k',
        label: '触发网格尺寸',
        defaultValue: '4',
        step: '1',

        includes: ['WaNet']
    },
    {
        name: 'cross_ratio',
        label: '噪声训练样本比例',
        defaultValue: '0.2',
        step: '0.1',

        includes: ['WaNet']
    }
]

const defaultValue: Record<string, any> = {
    BadNet: {
        target_label: '0',
        poisoned_portion: '0.1',
        trigger_size: '3',
        trigger_h: '0',
        trigger_w: '0',
        epoch: '150',
        batch_size: '256',
        learning_rate: '0.001',
    },
    TrojanNet: {
        target_label: '0',
        trigger_size: '3',
        select_point: '3',
        trigger_h: '0',
        trigger_w: '0',
        epoch: '500',
        batch_size: '128',
        learning_rate: '0.01',
    },
    TrojanNN: {
        target_label: '0',
        trigger_size: '3',
        trigger_h: '0',
        trigger_w: '0',
        epoch: '100',
        batch_size: '256',
        learning_rate: '0.001',
        neuron_num: '2',
        neuron_epoch: '500',
    },
    WaNet: {
        target_label: '0',
        poisoned_portion: '0.1',
        epoch: '500',
        batch_size: '128',
        learning_rate: '0.01',
        grid_s: '0.5',
        grid_k: '4',
        cross_ratio: '0.2',
    }
}

export const AttackForm: React.FC = () => {
    const [form] = Form.useForm();
    const [frame, setFrame] = useState<'PyTorch' | 'TensorFlow'>('PyTorch');
    
    const [networkConfig, setNetworkConfig] = useState<InputConfig>(netConfigInit);
    const [network, setNetwork] = useState<string>('');
    const [datasetConfig, setDatasetConfig] = useState<InputConfig>(datasetInit);
    const [dataset, setDataset] = useState<string>('');

    const [preParams, setPreParams] = useState<DatasetParams>();

    const [attackMethod, setAttackMethod] = useState<string>('');
    const [attackMethodConfig, setAttackMethodConfig] = useState<attackOption[]>([]);

    const [params, setParams] = useState<Record<string, number>>({});
    const [trigger, setTrigger] = useState<string>('');

    const handleFrame = (value: 'PyTorch'|'TensorFlow') => {
        setFrame(value);
        setAttackMethodConfig(attackMethods[value]);
    }

    // 添加新的网络结构
    const addNetwork = (value: string) => {
        setNetworkConfig([...networkConfig, { name: value, custom: true }])
    }
    // 添加新的数据集
    const addDataset = (value: string) => {
        setDatasetConfig([...datasetConfig, { name: value, custom: true }])
    }

    const handleDataset = (value: string) => {
        setDataset(value);
        setPreParams(defaultPreParams[value]);
    }

    const handleParams = (value: Record<string, number>) => {
        const newParms = { ...params, ...value }
        setParams(newParms);
    }

    const handleTrigger = (value: string) => {
        setTrigger(value);
    }

    const shouldTriggerRender = attackMethod === 'TrojanNN' || attackMethod === 'BadNet';

    const deleteNetWork = (value: string) => {
        const newNetworkConfig = networkConfig.filter(item => item.name !== value)
        setNetworkConfig(newNetworkConfig)
    }

    const deleteDataset = (value: string) => {
        const newDatasetConfig = datasetConfig.filter(item => item.name !== value)
        setDatasetConfig(newDatasetConfig)
    }   
    
    return (
        <PageContainer header={{ title: null }}>
            <Card>
                <ProForm
                    submitter={false}
                    onFinish={async (values) => console.log(values)}
                    form={form}
                    onValuesChange={(changedValues) => { 
                        if (changedValues.invoiceType) { 
                            form.setFieldsValue({ unusedMode: undefined });
                            setAttackMethod('')
                        }
                    }}  
                >
                    <Row gutter={24}>
                        <Col span={9}>
                            <ProFormRadio.Group
                                label="框架"
                                name="invoiceType"
                                initialValue=""
                                options={['PyTorch', 'TensorFlow']}
                                fieldProps={{ onChange: (e) => { handleFrame(e.target.value) } }}
                            />
                            <TabInput config={networkConfig} label='网络结构' buttonText='添加网络结构' modal={NetWorkModal} onChange={setNetwork} action={addNetwork} deleteAction={deleteNetWork} />
                            <TabInput config={datasetConfig} label='数据集' buttonText='添加数据集' modal={DataModal} onChange={handleDataset} action={addDataset} deleteAction={deleteDataset} />
                            <PreParameters defaultValue={preParams} onPreParametersChange={setPreParams} />
                        </Col>
                        <Col span={8}>
                            <ProFormSelect
                                width="md"
                                options={attackMethodConfig}
                                name="unusedMode"
                                label="攻击方法"
                                onChange={setAttackMethod}
                            />
                            <Parameters method={attackMethod} handleParams={ handleParams } paraConfig={paraConfig} defaultValue={defaultValue}/>
                        </Col>
                        <Col span={7}>
                            { shouldTriggerRender && <Trigger handleTrigger={handleTrigger} /> }
                            <Button type='primary' style={{ position: 'absolute', bottom: '31px', right: '110px', width: '80px' }}>启动</Button>
                        </Col>
                    </Row>
                </ProForm>
            </Card>
        </PageContainer>
    );
}

