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
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadProps } from 'antd';


interface modalConfig {
    isModalOpen: boolean,
    handleCancel: () => void,
    handleOk: () => void
}

export interface TabInputConfig {
    config: string[],
    label: string,
    buttonText: string
    modal: React.FC<modalConfig>
    onChange: (value: string) => void
}
// 添加网络模型modal
const NetWorkModal: React.FC<modalConfig> = ({ isModalOpen, handleCancel, handleOk }) => {
    const beforeUpload = (file: File) => {
        const isTxtOrZip = file.type === 'text/plain' || file.type === 'application/zip';
        if (!isTxtOrZip) {
            message.error('只能上传txt或zip文件');
        }
        return isTxtOrZip || Upload.LIST_IGNORE
    }
    return (
        <Modal title="添加自定义网络结构" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={styles['network-modal']}>
            <div className={styles['modal-top']}>
                <span className={styles['top_span']}>网络结构名称:</span>
                <Input placeholder="网络结构" style={{ display: 'inline-block', width: '250px' }} />
            </div>
            <div className={styles['modal-upload']}>
                <Upload beforeUpload={beforeUpload}>
                    <Button type="link">上传本地网络结构文件</Button>
                </Upload>
            </div>
            <div className={styles['modal-tips']}>
                <ul className={styles['tip_list']}>
                    <li className={styles['tip_item']}>提示:</li>
                    <li className={styles['tip_item']}> 添加网络结构说明： 应上传一个压缩包,大小不超过5G,包含：<br /> 1. 一个.py文件,包含网络结构定义及网络结构加载函数:load_model(weight_path) <br />2. (可选,如需加载权重则上传)一个模型参数文件(PyTorch框架为'.pt', '.pth', '.pkl'格式的模型文件， TensorFlow框架为包含SavedModel格式模型的文件夹或.h5格式模型文件)</li>
                    <li className={styles['tip_item']}>
                        平台模型加载方式示例： <br />- 压缩包内包含 test.py 和 test.pth(无权重文件时，将传入 weight_path=None)
                        <div>import imp</div>
                        <div>net = imp.load_source('net','test.py')</div>
                        <div>model = net.load_model(weight_path='test.pth')</div>
                    </li>
                    <li className={styles['tip_item']}> 详细的参考示例请点击： <a href="">后门攻击-添加网络结构.zip</a></li>
                </ul>
            </div>
        </Modal>
    )
}

// 自定义数据集modal
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
const DataModal: React.FC<modalConfig> = ({ isModalOpen, handleCancel, handleOk }) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const getBase64 = (img: FileType, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
    };

    const beforeUpload = (file: FileType) => {
        // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        // if (!isJpgOrPng) {
        //     message.error('You can only upload JPG/PNG file!');
        // }
        // const isLt2M = file.size / 1024 / 1024 < 2;
        // if (!isLt2M) {
        //     message.error('Image must smaller than 2MB!');
        // }
        // return isJpgOrPng && isLt2M;
        return true
    };

    const handleChange: UploadProps['onChange'] = (info) => {
        // if (info.file.status === 'uploading') {
        //     setLoading(true);
        //     return;
        // }
        // if (info.file.status === 'done') {
        //     // Get this url from response in real world.
        //     getBase64(info.file.originFileObj as FileType, (url) => {
        //         setLoading(false);
        //         setImageUrl(url);
        //     });
        // }
        // TODO: 服务端响应接收到上传的图片
        console.log('info',info);
        getBase64(info.file.originFileObj as FileType, (url) => {
            setLoading(false);
            console.log('url',url);
            setImageUrl(url);
        });
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    return (
        <Modal title="添加自定义数据集" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className={styles['dataset-modal']}>
            <div className={styles['dataset-name']}>
                <span className={styles['dataset_span']}>网络结构名称:</span>
                <Input placeholder="数据集" style={{ display: 'inline-block', width: '250px' }} />
            </div>
            <div className={styles['dataset-img']}>
                <span className={styles['dataset_span']}>图像:</span>
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                    beforeUpload={beforeUpload}
                    onChange={handleChange}
                >
                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
            </div>
            <div className={styles['dataset-upload']}>
                <span className={styles['dataset_span']}>ground-truth labels:</span>
                <Upload beforeUpload={beforeUpload}>
                    <Button type="link" style={{padding: 0}}>上传文档(.txt)</Button>
                </Upload>
            </div>
            <div className={styles['dataset-input']}>
                <span className={styles['dataset_span']}>num_classes:</span>
                <Input placeholder="num_classes" style={{ display: 'inline-block', width: '250px' }} />
            </div>
            <div className={styles['dataset-tips']}>
                <ul className={styles['tip_list']}>
                    <li className={styles['tip_item']}>提示:</li>
                    <li className={styles['tip_item']}>数据集名称：待上传数据集的名称</li>
                    <li className={styles['tip_item']}>图像:包含训练数据的压缩包,大小不超过500M</li>
                    <li className={styles['tip_item']}>ground-truth labels:一个txt文档,每行包括一个训练图像名称和其真实标签,中间以空格隔开,大小不超过100M<br /> 示例:test.JPEG 0 </li>
                    <li className={styles['tip_item']}>num_classes:数据集的类别总数</li>
                    <li className={styles['tip_item']}> 详细的参考示例请点击:<a href="">后门攻击-添加数据集.zip</a></li>
                </ul>
            </div>
        </Modal>
    )
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
    const [frame, setFrame] = useState<'PyTorch' | 'TensorFlow'>('PyTorch');
    
    const [networkConfig, setNetworkConfig] = useState<string[]>(netConfigInit);
    const [network, setNetwork] = useState<string>('');
    const [datasetConfig, setDatasetConfig] = useState<string[]>(datasetInit);
    const [dataset, setDataset] = useState<string>('');

    const [preParams, setPreParams] = useState<DatasetParams>();

    const [attackMethod, setAttackMethod] = useState<string>('');
    const [attackMethodConfig, setAttackMethodConfig] = useState<attackOption[]>([]);

    const handleFrame = (value: 'PyTorch'|'TensorFlow') => {
        setFrame(value);
        setAttackMethodConfig(attackMethods[value]);
    }

    // 添加新的网络结构
    const addNetwork = (value: string) => {
        setNetworkConfig([...network, value])
    }
    // 添加新的数据集
    const addDataset = (value: string) => {
        setDatasetConfig([...dataset, value])
    }

    const handleDataset = (value: string) => {
        setDataset(value);
        setPreParams(defaultPreParams[value]);
    }

    
    return (
        <PageContainer header={{ title: null }}>
            <Card>
                <ProForm
                    submitter={false}
                    onFinish={async (values) => console.log(values)}
                >
                    <Row gutter={24}>
                        <Col span={9}>
                            <ProFormRadio.Group
                                label="框架"
                                name="invoiceType"
                                initialValue=""
                                options={['PyTorch', 'TensorFlow']}
                                fieldProps={{ onChange: (e) => { handleFrame(e.target.value)} }}
                            />
                            <TabInput config={networkConfig} label='网络结构' buttonText='添加网络结构' modal={NetWorkModal} onChange={setNetwork} />
                            <TabInput config={datasetConfig} label='数据集' buttonText='添加数据集' modal={DataModal} onChange={handleDataset} />
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
                            <Parameters attackMethod={attackMethod} />
                        </Col>
                        <Col span={7}>
                            <Trigger />
                            <Button type='primary' style={{ position: 'absolute', bottom: '31px', right: '110px', width: '80px' }}>启动</Button>
                        </Col>
                    </Row>
                </ProForm>
            </Card>
        </PageContainer>
    );
}

