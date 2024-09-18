import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload, Form, Alert } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import styles from './index.module.scss';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

interface UploadFileItem extends UploadFile {
    modal?: string
}

interface TestSamplesProps {
    choseImg: (value: string) => void
}

const TestSamples: React.FC<TestSamplesProps> = ({ choseImg }) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState<UploadFileItem[]>([
        {
            uid: '-1',
            name: 'sample_1_1',
            status: 'done',
            url: '/imgs/BackdoorDetSample_test_sample_1_1.png',
            modal: 'CIFAR10-DenseNet121'
        },
        {
            uid: '-2',
            name: 'sample_1_2',
            status: 'done',
            url: '/imgs/BackdoorDetSample_test_sample_1_2.png',
            modal: 'CIFAR10-DenseNet121'
        },
        {
            uid: '-3',
            name: 'sample_2_1',
            status: 'done',
            url: '/imgs/BackdoorDetSample_test_sample_2_1.png',
            modal: 'GTSRB-VGG11'
        },
        {
            uid: '-4',
            name: 'sample_2_2',
            status: 'done',
            url: '/imgs/BackdoorDetSample_test_sample_2_2.png',
            modal: 'GTSRB-VGG11'
        }
    ]);
    const [selectedFile, setSelectedFile] = useState<UploadFileItem>(fileList[0]);

    const handlePreview = async (file: UploadFileItem) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as FileType);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>上传图片</div>
        </button>
    );

    const itemRender = (originNode: React.ReactNode, file: UploadFileItem) => {
        const isSelected = selectedFile.uid === file.uid;

        return (
            <div
                className={isSelected ? styles['selected'] : ''}
                onClick={() => {
                    if (file.modal) {
                        choseImg(file.modal)
                    }
                    setSelectedFile(file)
                }}
            >
                {originNode}
                { isSelected && <img src='/imgs/check.png' alt='check' className={styles['check_icon']} />}
            </div>
        )
    }

    return (
        <Form.Item
            label="待检测样本"
            name="testSamples" 
            className={styles['upload-list']}
        >
            <Alert message="图像:包含若干待测图像的压缩包,大小不超过500M" type="info" closable />
            {/* TODO: action */}
            <Upload
                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                itemRender={itemRender}
                style={{ borderRadius: '5px'}}
            >
                {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {previewImage && (
                <Image
                    wrapperStyle={{ display: 'none' }}
                    preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                        afterOpenChange: (visible) => !visible && setPreviewImage(''),
                    }}
                    src={previewImage}
                />
            )}
        </Form.Item>
    );
};

export default TestSamples;