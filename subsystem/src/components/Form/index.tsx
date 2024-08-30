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
import { Card } from 'antd';

export const DefaultForm: React.FC = () => {
    return (
        <PageContainer>
            <Card>
                <ProForm
                    submitter={{
                        render: (_, dom) => <FooterToolbar>{dom}</FooterToolbar>,
                    }}
                    onFinish={async (values) => console.log(values)}
                >
                    <ProForm.Group>
                        <ProFormText
                            name="name"
                            label="签约客户名称"
                            tooltip="最长为 24 位"
                            placeholder="请输入名称"
                        />
                        <ProFormText
                            width="md"
                            name="company"
                            label="我方公司名称"
                            placeholder="请输入名称"
                        />
                    </ProForm.Group>
                    <ProForm.Group>
                        <ProFormText
                            name={['contract', 'name']}
                            label="合同名称"
                            placeholder="请输入名称"
                        />
                        <ProFormDateRangePicker
                            name={['contract', 'createTime']}
                            label="合同生效时间"
                        />
                    </ProForm.Group>
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
                </ProForm>
            </Card>
        </PageContainer>
    );
}

