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
import Trigger from './components/Trigger';
import TestSamples from './components/samples';
import styles from './index.module.scss';
import React, { useState } from 'react';
import { modalConfig, DataModal, AddModal } from './components/modal';
import { includes } from 'lodash';


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
    custom: boolean,
    dataset?: string
}[]

const modalConfigInit = [
    {
        name: 'CIFAR10-DenseNet121',
        dataset: 'CIFAR10',
        custom: false
    },
    {
        name: 'GTSRB-VGG11',
        dataset: 'GTSRB',
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

interface detectOption {
    value: string,
    label: string
}
// 检测方法
const detectMethods: Record<'PyTorch', detectOption[]> = {
    PyTorch: [
        {
            value: 'TECO',
            label: 'TECO'
        }
    ]
}

const paraConfig = [
    {
        name: 'max_severity',
        label: '最大腐蚀强度',
        step: '1',
        includes: ['TECO']
    },
    {
        name: 'batch_size',
        label: '训练批次大小',
        step: '1',
        includes: ['TECO']
    },
    {
        name: 'threshold',
        label: 'mad阈值',
        step: '0.1',
        includes: ['TECO']
    }
]

const defaultValue: Record<string, any> = {
    TECO: {
        max_severity: 6,
        batch_size: 100,
        threshold: 1.0
    }
}

export const SampleForm: React.FC = () => {
    const [form] = Form.useForm();
    const [frame, setFrame] = useState<'PyTorch'>('PyTorch');

    const [modalConfig, setModalConfig] = useState<InputConfig>(modalConfigInit);
    const [modal, setModal] = useState<string>('');
    const [datasetConfig, setDatasetConfig] = useState<InputConfig>(datasetInit);
    const [dataset, setDataset] = useState<string>('');

    const [preParams, setPreParams] = useState<DatasetParams>();

    const [detectMethodConfig, setDetectMethodConfig] = useState<detectOption[]>([]);
    const [detectMethod, setDetectMethod] = useState<string>('');

    const [params, setParams] = useState<Record<string, number>>({});
    const [trigger, setTrigger] = useState<string>('');

    const handleFrame = (value: 'PyTorch') => {
        setFrame(value);
        setDetectMethodConfig(detectMethods[value]);
    }

    // 添加新的网络结构
    const addModal = (value: string) => {
        setModalConfig([...modalConfig, { name: value, custom: true }])
    }
    // 添加新的数据集
    const addDataset = (value: any) => {
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

    const handleModal = (value: string) => {
        setModal(value);
        if (modalConfigInit.some(item => item.name === value)) {
            setPreParams(defaultPreParams[modalConfigInit.find(item => item.name === value)?.dataset as string])
        }
    }

    const deleteModal = (value: string) => {
        const newModalConfig = modalConfig.filter(item => item.name !== value)
        setModalConfig(newModalConfig)
    }

    const deleteDataset = (value: string) => {
        const newDatasetConfig = datasetConfig.filter(item => item.name !== value)
        setDatasetConfig(newDatasetConfig)
    }

    const sampleExample = {
        name: '后门样本检测-添加模型.zip',
        url: ''
    }

    const datasetExample = {
        name: '后门样本检测-添加数据集.zip',
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
                        <Col span={10}>
                            <ProFormRadio.Group
                                label="框架"
                                name="invoiceType"
                                initialValue=""
                                options={['PyTorch']}
                                fieldProps={{ onChange: (e) => { handleFrame(e.target.value) } }}
                            />
                            <TestSamples choseImg={handleModal} />
                            <TabInput config={modalConfig} label='测试模型' buttonText='添加模型' modal={AddModal} onChange={handleModal} action={addModal} deleteAction={deleteModal} example={sampleExample} selected={modal} />
                            {/* <TabInput config={datasetConfig} label='对应数据集' buttonText='添加数据集' modal={DataModal} onChange={handleDataset} action={addDataset} deleteAction={deleteDataset} example={datasetExample}/> */}
                            <PreParameters defaultValue={preParams} onPreParametersChange={setPreParams} />
                        </Col>
                        <Col span={8}>
                            <ProFormSelect
                                width="md"
                                options={detectMethodConfig}
                                name="unusedMode"
                                label="检测方法"
                                onChange={setDetectMethod}
                            />
                            <Parameters method={detectMethod} handleParams={handleParams} paraConfig={paraConfig} defaultValue={defaultValue} />
                        </Col>
                        <Col span={4}>
                            <Button type='primary' style={{ position: 'absolute', bottom: '31px', right: '110px', width: '80px' }}>启动</Button>
                        </Col>
                    </Row>
                </ProForm>
            </Card>
        </PageContainer>
    );
}

