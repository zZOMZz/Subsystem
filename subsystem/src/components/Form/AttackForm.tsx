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
import { addRule } from '@/services/attack/api';
import { mean, method } from 'lodash';


export interface TabInputConfig {
    config: InputConfig,
    label: string,
    buttonText: string
    modal: React.FC<modalConfig>
    onChange: (value: string) => void
    action: (value: any) => void
    deleteAction: (value: string) => void
    example: {
        name: string,
        url: string
    },
    selected?: string
}

type InputConfig = {
    name: string,
    custom: boolean
}[]

interface networkConfig {
    name: string,
    filePath: string,
    custom: boolean
}

const netConfigInit = [
    {
        name: 'ResNet18',
        filePath: 'ResNet18',
        custom: false
    },
    {
        name: 'DenseNet121',
        filePath: 'DenseNet121',
        custom: false
    },
    {
        frame: 'TensorFlow',
        name: 'VGG11',
        filePath: 'VGG11',
        custom: false
    },
    {
        name: 'MobileNetV2',
        filePath: 'MobileNetV2',
        custom: false
    },
]

interface datasetConfig {
    name: string,
    imgPath: string,
    filePath: string,
    num_classes: number,
    custom: boolean
}

const datasetInit = [
    {
        name: 'GTSRB',
        imgPath: '/Backdoor/data/GTSRB/train',
        filePath: '/Backdoor/data/GTSRB/train_data.txt',
        num_classes: 43,
        custom: false
    },
    {
        name: 'CIFAR10',
        imgPath: '/Backdoor/data/cifar/train',
        filePath: '/Backdoor/data/cifar/trainLabels.txt',
        num_classes: 10,
        custom: false
    }
]

export interface DatasetParams {
    mean: number[];
    std: number[];
    scale: number[];
    inputsize: number[];
}

export interface triggerConfig {
    value: string,
    img: string,
    imgPath: string,
    custom: boolean
}

// 触发器配置
const triggerInit: triggerConfig[] = [
    {
        value: 'a',
        img: '/imgs/BackdoorAttack_trigger_FF.png',
        imgPath: '/Backdoor/data/BackdoorAttack/triggers/trigger_FF.png',
        custom: false
    },
    {
        value: 'b',
        img: '/imgs/BackdoorAttack_trigger_10.png',
        imgPath: '/Backdoor/data/BackdoorAttack/triggers/trigger_10.png',
        custom: false
    },
    {
        value: 'c',
        img: '/imgs/BackdoorAttack_trigger_apple.png',
        imgPath: '/Backdoor/data/BackdoorAttack/triggers/trigger_apple.png',
        custom: false
    }
]

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
    
    const [networkConfig, setNetworkConfig] = useState<networkConfig[]>(netConfigInit);
    const [network, setNetwork] = useState<string>('');

    const [datasetConfig, setDatasetConfig] = useState<datasetConfig[]>(datasetInit);
    const [dataset, setDataset] = useState<string>('');

    const [preParams, setPreParams] = useState<DatasetParams>();

    const [attackMethod, setAttackMethod] = useState<string>('');
    const [attackMethodConfig, setAttackMethodConfig] = useState<attackOption[]>([]);

    const [params, setParams] = useState<Record<string, number>>({});

    const [triggerConfig, setTriggerConfig] = useState<triggerConfig[]>(triggerInit);
    const [trigger, setTrigger] = useState<string>('');

    const handleFrame = (value: 'PyTorch'|'TensorFlow') => {
        setFrame(value);
        setAttackMethodConfig(attackMethods[value]);
    }

    // 添加新的网络结构
    const addNetwork = (value: networkConfig) => {
        setNetworkConfig([...networkConfig, value])
    }
    // 添加新的数据集
    const addDataset = (value: datasetConfig) => {
        setDatasetConfig([...datasetConfig, value])
    }
    // 添加新的触发器
    const addTrigger = (value: triggerConfig) => {
        console.log('trigger value', value);
        setTriggerConfig([...triggerConfig, value])
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

    const networkExample = {
        name: '后门攻击-添加网络结构.zip',
        url: ''
    }

    const datasetExample = {
        name: '后门攻击-添加数据集.zip',
        url: ''
    }

    const handleStart = async () => {
        // TODO: Modal中的数据, 各种path
        let netfilePath = frame === 'PyTorch' ? '/Backdoor/checkpoints/pytorch/BackdoorAttack' : '/Backdoor/checkpoints/tensorflow2/BackdoorAttack';
        const dataSetItem = datasetConfig.find(item => item.name === dataset) as datasetConfig;
        const triggerItem = triggerConfig.find(item => item.value === trigger) as triggerConfig;
        console.log('triggerItem', triggerItem);
        const data = {
            frame,
            ai_type: 1,
            networkStructure: {
                filePath: `${netfilePath}/${network}`,
                name: network
            },
            dataset: {
                name: dataset,
                imagePath: dataSetItem.imgPath,
                filePath: dataSetItem.filePath,
                num_classes: dataSetItem.num_classes,
            },
            mean: preParams?.mean,
            std: preParams?.std,
            scale: preParams?.scale,
            inputsize: preParams?.inputsize,
            method: attackMethod,
            parameterJson: params,
            flipFlop: triggerItem.imgPath,
            outPutPath: ''
        }
        console.log('data', data);
        await addRule(data)
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
                            <TabInput config={networkConfig} label='网络结构' buttonText='添加网络结构' modal={NetWorkModal} onChange={setNetwork} action={addNetwork} deleteAction={deleteNetWork} example={networkExample} selected={network} />
                            <TabInput config={datasetConfig} label='数据集' buttonText='添加数据集' modal={DataModal} onChange={handleDataset} action={addDataset} deleteAction={deleteDataset} example={datasetExample} selected={dataset} />
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
                            {shouldTriggerRender && <Trigger handleTrigger={handleTrigger} config={triggerConfig} action={addTrigger} /> }
                            <Button
                                type='primary'
                                style={{ position: 'absolute', bottom: '31px', right: '110px', width: '80px' }}
                                onClick={handleStart}
                            >
                                启动
                            </Button>
                        </Col>
                    </Row>
                </ProForm>
            </Card>
        </PageContainer>
    );
}

