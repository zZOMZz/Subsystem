import {
    PageContainer,
    ProForm,
    ProFormRadio,
    ProFormSelect,
} from '@ant-design/pro-components';
import { Card, Radio, Modal, Upload, message } from 'antd';
import { Button, Col, Form, Input, Row } from 'antd';
import TabInput from './components/TabInput';
import PreParameters from './components/Preprocessing';
import Parameters from './components/Parameters';
import styles from './index.module.scss';
import React, { useState } from 'react';
import { modalConfig, DataModal, AddModal } from './components/modal';


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
    dataset?: string
}[]

const modalConfigInit = [
    {
        name: 'backdoor-CIFAR10-DenseNet121',
        custom: false,
        dataset: 'CIFAR10'
    },
    {
        name: 'clean-CIFAR10-MobileNetV2',
        custom: false,
        dataset: 'CIFAR10'
    },
    {
        name: 'backdoor-GTSRB-VGG11',
        custom: false,
        dataset: 'GTSRB'
    },
    {
        name: 'clean-GTSRB-ResNet18',
        custom: false,
        dataset: 'GTSRB'
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

interface Option {
    value: string,
    label: string
}
// 检测方法
const modalMethods: Record<'PyTorch' | 'TensorFlow', Option[]> = {
    PyTorch: [
        {
            value: 'NeuralCleanse',
            label: 'NeuralCleanse',
        },
        {
            value: 'Tabor',
            label: 'Tabor'
        },
    ],
    TensorFlow: [
        {
            value: 'NeuralCleanse',
            label: 'NeuralCleanse',
        },
        {
            value: 'Tabor',
            label: 'Tabor'
        },
    ]
}

const paraConfig = [
    {
        name: 'batch_size',
        label: '训练批次大小',
        step: '1',
        includes: ['NeuralCleanse', 'Tabor']
    },
    {
        name: 'learning_rate',
        label: '学习率',
        step: '0.1',
        includes: ['NeuralCleanse', 'Tabor']
    },
    {
        name: 'epoch',
        label: '训练轮数',
        step: '1',
        includes: ['NeuralCleanse', 'Tabor']
    }
]

const defaultValue: Record<string, any> = {
    NeuralCleanse: {
        batch_size: 128,
        learning_rate: 0.1,
        epoch: 50
    },
    Tabor: {
        batch_size: 128,
        learning_rate: 0.1,
        epoch: 50
    }
}

export const ModalForm: React.FC = () => {
    const [form] = Form.useForm();
    const [frame, setFrame] = useState<'PyTorch' | 'TensorFlow'>('PyTorch');

    const [modalConfig, setModalConfig] = useState<InputConfig>(modalConfigInit);
    const [modal, setModal] = useState<string>('');
    const [datasetConfig, setDatasetConfig] = useState<InputConfig>(datasetInit);
    const [dataset, setDataset] = useState<string>('');

    const [preParams, setPreParams] = useState<DatasetParams>();

    const [detectMethod, setDetectMethod] = useState<string>('');
    const [attackMethodConfig, setAttackMethodConfig] = useState<Option[]>([]);

    const [params, setParams] = useState<Record<string, number>>({});

    const handleFrame = (value: 'PyTorch' | 'TensorFlow') => {
        setFrame(value);
        setAttackMethodConfig(modalMethods[value]);
    }

    // 添加新的网络结构
    const addModal = (value: string) => {
        setModalConfig([...modalConfig, { name: value, custom: true }])
    }
    // 添加新的数据集
    const addDataset = (value: any) => {
        // setDatasetConfig([...datasetConfig, { name: value, custom: true }])
    }

    const handleModal = (value: string) => {
        setModal(value);
        const item = modalConfig.find(item => item.name === value)
        if (item && item.dataset) {
            console.log('item.dataset', item.dataset);
            handleDataset(item.dataset)
        }
    }

    const handleDataset = (value: string) => {
        setDataset(value);
        setPreParams(defaultPreParams[value]);
    }

    const handlePreParams = (value: DatasetParams) => {
        setPreParams(value);
    }

    const handleParams = (value: Record<string, number>) => {
        const newParms = { ...params, ...value }
        setParams(newParms);
    }

    const deleteModal = (value: string) => {
        const newModalConfig = modalConfig.filter(item => item.name !== value)
        setModalConfig(newModalConfig)
    }

    const deleteDataset = (value: string) => {
        const newDatasetConfig = datasetConfig.filter(item => item.name !== value)
        setDatasetConfig(newDatasetConfig)
    }

    const modalExample = {
        name: '后门模型检测-添加模型.zip',
        url: ''
    }

    const datasetExample = {
        name: '后门模型检测-添加数据集.zip',
        url: ''
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
                            setDetectMethod('')
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
                            <TabInput config={modalConfig} label='待测模型' buttonText='添加模型' modal={AddModal} onChange={handleModal} action={addModal} deleteAction={deleteModal} example={modalExample} selected={modal} />
                            <TabInput config={datasetConfig} label='对应数据集' buttonText='添加数据集' modal={DataModal} onChange={handleDataset} action={addDataset} deleteAction={deleteDataset} example={datasetExample} selected={dataset} />
                            <PreParameters defaultValue={preParams} onPreParametersChange={handlePreParams} />
                        </Col>
                        <Col span={8}>
                            <ProFormSelect
                                width="md"
                                options={attackMethodConfig}
                                name="unusedMode"
                                label="检测方法"
                                onChange={setDetectMethod}
                            />
                            <Parameters method={detectMethod} handleParams={handleParams} paraConfig={paraConfig} defaultValue={defaultValue} />
                        </Col>
                        <Col span={7}>
                            <Button type='primary' style={{ position: 'absolute', bottom: '31px', right: '110px', width: '80px' }}>启动</Button>
                        </Col>
                    </Row>
                </ProForm>
            </Card>
        </PageContainer>
    );
}

