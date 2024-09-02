import {
    FooterToolbar,
    PageContainer,
    ProForm,
    ProFormDateRangePicker,
    ProFormDigit,
    ProFormRadio,
    ProFormSelect,
    ProFormText,
    ProFormTextArea,
    ProFormUploadButton,
} from '@ant-design/pro-components';
import { Card, Radio } from 'antd';
import { Button, Col, Form, Input, Row, Select, Space, theme } from 'antd';
import TabInput from './components/TabInput';
import { values } from 'lodash';
import PreParameters from './components/Preprocessing';


export const DefaultForm: React.FC = () => {
    const newConfig = [
        {
            value: 'DenseNet121',
            label: 'DenseNet121'
        },
        {
            value: 'MobileNetV2',
            label: 'MobileNetV2'
        },
        {
            value: 'VGG11',
            label: 'VGG11'
        },
        {
            value: 'ResNet18',
            label: 'ResNet18'
        }
    ]

    const dataConfig = [
        {
            value: 'GTSRB',
            label: 'GTSRB'
        },
        {
            value: 'CIFAR10',
            label: 'CIFAR10'
        }
    ]

    return (
        <PageContainer>
            <Card>
                <ProForm
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                    onFinish={async (values) => console.log(values)}
                >
                    <Row gutter={24}>
                        <Col span={9}>
                            <ProFormRadio.Group
                                label="框架"
                                name="invoiceType"
                                initialValue=""
                                options={['PyTorch', 'TensorFlow']}
                            />
                            <TabInput config={newConfig} label='网络结构' buttonText='添加网络结构' />
                            <TabInput config={dataConfig} label='数据集' buttonText='添加数据集' />
                            <PreParameters />
                        </Col>
                        <Col span={8}>
                            <ProForm.Group>
                                <ProFormSelect
                                    options={[
                                        {
                                            value: 'chapter',
                                            label: '盖章后生效',
                                        },
                                    ]}
                                    width="xs"
                                    name="chapter"
                                    label="合同约定生效方式"
                                />
                                <ProFormSelect
                                    width="xs"
                                    options={[
                                        {
                                            value: 'time',
                                            label: '履行完终止',
                                        },
                                    ]}
                                    name="unusedMode"
                                    label="合同约定失效效方式"
                                />
                            </ProForm.Group>
                            <ProForm.Group>
                                <ProFormRadio.Group
                                    label="发票类型"
                                    name="invoiceType"
                                    initialValue="发票"
                                    options={['发票', '普票', '无票']}
                                />
                            </ProForm.Group>
                            <ProFormUploadButton
                                extra="支持扩展名：.jpg .zip .doc .wps"
                                label="倒签报备附件"
                                name="file"
                                title="上传文件"
                            />
                        </Col>
                        <Col span={7}>
                        </Col>
                    </Row>
                </ProForm>
            </Card>
        </PageContainer>
    );
}

