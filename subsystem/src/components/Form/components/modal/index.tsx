import { message, Modal, Upload, Input, Button, Form } from "antd"
import styles from './index.module.scss'
import type { GetProp, UploadProps } from 'antd';
import { useEffect, useState } from "react";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

export interface modalConfig {
    isModalOpen: boolean,
    handleCancel: () => void,
    handleOk: () => void
    action: (value: string) => void
    example: {
        name: string,
        url: string
    }
}
// 添加网络模型modal
export const NetWorkModal: React.FC<modalConfig> = ({ isModalOpen, handleCancel, handleOk, action,example}) => {
    const [form] = Form.useForm();
    const beforeUpload = (file: File) => {
        const isTxtOrZip = file.type === 'text/plain' || file.type === 'application/zip';
        if (!isTxtOrZip) {
            message.error('只能上传txt或zip文件');
        }
        return isTxtOrZip || Upload.LIST_IGNORE
    }

    const onOk = () => {
        console.log('onOk');
        form.validateFields().then((values) => {
            // TODO: 服务端响应接收到上传的网络结构
            console.log('values', values);
            action(values.network)
            form.resetFields()
        })
        handleOk()
    }

    const onCancel = () => {
        console.log('onCancel');
        handleCancel()
        form.resetFields()
    }


    return (
        <Modal title="添加自定义网络结构" open={isModalOpen} onOk={onOk} onCancel={onCancel} className={styles['network-modal']}>
            <Form form={form} onValuesChange={() => { }}>
                <div className={styles['modal-top']}>
                    <span className={styles['top_span']}>网络结构名称:</span>
                    <Form.Item name='network' style={{ display: 'inline-block' }}  >
                        <Input placeholder="网络结构" style={{ display: 'inline-block', width: '250px' }} />
                    </Form.Item>
                </div>
                <Form.Item name='upload' className={styles['modal-upload']}>
                    <Upload beforeUpload={beforeUpload}>
                        <Button type="link">上传本地网络结构文件</Button>
                    </Upload>
                </Form.Item>
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
                        <li className={styles['tip_item']}> 详细的参考示例请点击： <a href={example.url}>{ example.name }</a></li>
                    </ul>
                </div>
            </Form>
        </Modal>
    )
}

// 自定义数据集modal
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];
export const DataModal: React.FC<modalConfig> = ({ isModalOpen, handleCancel, handleOk, action,example}) => {
    const [form] = Form.useForm();
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
        console.log('info', info);
        getBase64(info.file.originFileObj as FileType, (url) => {
            setLoading(false);
            console.log('url', url);
            setImageUrl(url);
        });
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

    const onOk = () => {
        console.log('onOk');

        form.validateFields().then((values) => {
            // TODO: 服务端响应接收到上传的数据集

            action(values.dataset)
            console.log('values', values);

            form.resetFields()
        })

        handleOk()
    }

    const onCancel = () => {
        console.log('onCancel');
        form.resetFields()
        handleCancel()
    }


    return (
        <Modal title="添加自定义数据集" open={isModalOpen} onOk={onOk} onCancel={onCancel} className={styles['dataset-modal']}>
            <Form
                form={form}
            >
                    <div className={styles['dataset-name']}>
                        <span className={styles['dataset_span']}>数据集名称:</span>
                        <Form.Item name='dataset' style={{ display: 'inline-block' }}  >
                            <Input placeholder="数据集" style={{ display: 'inline-block', width: '250px' }} />
                        </Form.Item>
                    </div>
                    <div className={styles['dataset-img']}>
                        <span className={styles['dataset_span']}>图像:</span>
                        <Form.Item name='upload_img' style={{ display: 'inline-block' }}>
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
                        </Form.Item>
                    </div>
                    <div className={styles['dataset-upload']}>
                        <span className={styles['dataset_span']}>ground-truth labels:</span>
                        <Form.Item name='upload_label' style={{ display: 'inline-block' }}>
                            <Upload beforeUpload={beforeUpload}>
                                <Button type="link" style={{ padding: 0 }}>上传文档(.txt)</Button>
                            </Upload>
                        </Form.Item>
                    </div>
                    <div className={styles['dataset-input']}>
                        <span className={styles['dataset_span']}>num_classes:</span>
                        <Form.Item name='num_classes' style={{ display: 'inline-block' }}>
                            <Input placeholder="num_classes" style={{ display: 'inline-block', width: '250px' }} />
                        </Form.Item>
                    </div>
                    <div className={styles['dataset-tips']}>
                        <ul className={styles['tip_list']}>
                            <li className={styles['tip_item']}>提示:</li>
                            <li className={styles['tip_item']}>数据集名称：待上传数据集的名称</li>
                            <li className={styles['tip_item']}>图像:包含训练数据的压缩包,大小不超过500M</li>
                            <li className={styles['tip_item']}>ground-truth labels:一个txt文档,每行包括一个训练图像名称和其真实标签,中间以空格隔开,大小不超过100M<br /> 示例:test.JPEG 0 </li>
                        <li className={styles['tip_item']}>num_classes:数据集的类别总数</li>
                        <li className={styles['tip_item']}> 详细的参考示例请点击: <a href={example.url}>{ example.name }</a></li>
                        </ul>
                    </div>
                </Form>
            </Modal>

    )
}

// 添加模型modal
export const AddModal: React.FC<modalConfig> = ({ isModalOpen, handleCancel, handleOk, action, example }) => {
    const [form] = Form.useForm();
    const beforeUpload = (file: File) => {
        const isTxtOrZip = file.type === 'text/plain' || file.type === 'application/zip';
        if (!isTxtOrZip) {
            message.error('只能上传txt或zip文件');
        }
        return isTxtOrZip || Upload.LIST_IGNORE
    }

    const onOk = () => {
        console.log('onOk');
        form.validateFields().then((values) => {
            // TODO: 服务端响应接收到上传的网络结构
            console.log('values', values);
            action(values.network)
            form.resetFields()
        })
        handleOk()
    }

    const onCancel = () => {
        console.log('onCancel');
        handleCancel()
        form.resetFields()
    }


    return (
        <Modal title="添加自定义模型" open={isModalOpen} onOk={onOk} onCancel={onCancel} className={styles['network-modal']}>
            <Form form={form} onValuesChange={() => { }}>
                <div className={styles['modal-top']}>
                    <span className={styles['top_span']}>模型名称:</span>
                    <Form.Item name='network' style={{ display: 'inline-block' }}  >
                        <Input placeholder="模型名称" style={{ display: 'inline-block', width: '250px' }} />
                    </Form.Item>
                </div>
                <Form.Item name='upload' className={styles['modal-upload']}>
                    <Upload beforeUpload={beforeUpload}>
                        <Button type="link">上传本地模型</Button>
                    </Upload>
                </Form.Item>
                <div className={styles['modal-tips']}>
                    <ul className={styles['tip_list']}>
                        <li className={styles['tip_item']}>提示:</li>
                        <li className={styles['tip_item']}> 添加模型说明： 应上传一个压缩包,大小不超过5G,包含：<br /> 1. 一个.py文件,包含模型定义及模型加载函数:load_model(weight_path) <br />2. 一个模型参数文件(PyTorch框架为'.pt', '.pth', '.pkl'格式的模型文件， TensorFlow框架为包含SavedModel格式模型的文件夹或.h5格式模型文件)</li>
                        <li className={styles['tip_item']}>
                            平台模型加载方式示例： <br />- 压缩包内包含 test.py 和 test.pth
                            <div>import imp</div>
                            <div>net = imp.load_source('net','test.py')</div>
                            <div>model = net.load_model(weight_path='test.pth')</div>
                        </li>
                        <li className={styles['tip_item']}> 详细的参考示例请点击： <a href={example.url}>{ example.name }</a></li>
                    </ul>
                </div>
            </Form>
        </Modal>
    )
}