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
import Parameters from './components/Parameters';
import Trigger from './components/Trigger';


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

    const paraConfig = [
        {
            name: 'target_label',
            label: '目标类别',
            defaultValue: '1',
            step: '0.1',
        },
        {
            name: 'poisoned_portion',
            label: '投毒率',
            defaultValue: '0.1',
            step: '0.1',
        },
        {
            name: 'trigger_size',
            label: '触发器尺寸',
            defaultValue: '3',
            step: '1',
        },
        {
            name: 'trigger_h',
            label: '触发器纵向位置',
            defaultValue: '0',
            step: '1',
        },
        {
            name: 'trigger_w',
            label: '触发器横向位置',
            defaultValue: '0',
            step: '1',
        },
        {
            name: 'epoch',
            label: '训练轮数',
            defaultValue: '150',
            step: '1',
        },
        {
            name: 'batch_size',
            label: '训练批次大小',
            defaultValue: '256',
            step: '1',
        },
        {
            name: 'learning_rate',
            label: '学习率',
            defaultValue: '0.001',
            step: '0.0001',
        },
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
                            <ProFormSelect
                                width="md"
                                options={[
                                    {
                                        value: 'time',
                                        label: '履行完终止',
                                    },
                                ]}
                                name="unusedMode"
                                label="攻击方法"
                            />
                            <Parameters config={paraConfig} />
                        </Col>
                        <Col span={7}>
                            <Trigger />
                        </Col>
                    </Row>
                </ProForm>
            </Card>
        </PageContainer>
    );
}

