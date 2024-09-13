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
    config: string[],
    label: string,
    buttonText: string
    modal: React.FC<modalConfig>
    onChange: (value: string) => void
    action: (value: string) => void
}

const netConfigInit = ['DenseNet121', 'MobileNetV2', 'VGG11', 'ResNet18']
const datasetInit = ['GTSRB', 'CIFAR10']

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

export const DefaultForm: React.FC = () => {
    const [form] = Form.useForm();
    const [frame, setFrame] = useState<'PyTorch' | 'TensorFlow'>('PyTorch');
    
    const [networkConfig, setNetworkConfig] = useState<string[]>(netConfigInit);
    const [network, setNetwork] = useState<string>('');
    const [datasetConfig, setDatasetConfig] = useState<string[]>(datasetInit);
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
        setNetworkConfig([...networkConfig, value])
    }
    // 添加新的数据集
    const addDataset = (value: string) => {
        setDatasetConfig([...datasetConfig, value])
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
                            <TabInput config={networkConfig} label='网络结构' buttonText='添加网络结构' modal={NetWorkModal} onChange={setNetwork} action={addNetwork} />
                            <TabInput config={datasetConfig} label='数据集' buttonText='添加数据集' modal={DataModal} onChange={handleDataset} action={addDataset} />
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
                            <Parameters attackMethod={attackMethod} handleParams={ handleParams } />
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

