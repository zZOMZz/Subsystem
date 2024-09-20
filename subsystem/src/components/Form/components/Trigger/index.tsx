import { ConfigProvider, Form, Radio, Upload, Button, UploadFile, message } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';
import styles from './index.module.scss'
import { useState } from 'react'
import { triggerConfig } from '../../AttackForm'
interface TriggerProps {
    handleTrigger: (value: string) => void
    config: any
    action: (value: triggerConfig) => void
}

interface Upload {
    file: UploadFile
    fileList: UploadFile[]
}

const Trigger: React.FC<TriggerProps> = ({ handleTrigger, config, action }) => {
    const [trigger, setTrigger] = useState('')
    const [options, setOptions] = useState<triggerConfig[]>(config)

    const onRadioChange = (e: any) => {
        setTrigger(e.target.value)
        handleTrigger(e.target.value)
    }

    const handleUpload = (info: Upload) => {
        const { file } = info
        if (!file.originFileObj) return

        if (file.status === 'done') {
            // TODO: 上传图片返回路径
            const newOption = {
                value: Date.now().toString(),
                img: URL.createObjectURL(file.originFileObj),  // "blob:http://localhost:8000/c8fdb687-be89-47b2-a07b-025923ef8904"
                custom: true,
                imgPath: ''
            }

            setOptions([newOption, ...options])

            // setTrigger(newOption.value)
            action(newOption)
            message.success(`${file.name} 上传成功`);
        } else if (file.status === 'error') {
            message.error(`${file.name} 上传失败`);
        }
    }

    const handleDelete = (value: any) => {
        const newOptions = options.filter(item => item.value !== value)
        setOptions(newOptions)
        message.success('删除成功')
    }

    const rightCornerIcon = (item: any) => {
        if (trigger === item.value) {
            return <img src="/imgs/check.png" alt="" className={styles['check_img']} />
        } else if (item.custom) {
            return <img src="/imgs/delete.png" alt="删除" className={styles['delete_img']} onClick={() => handleDelete(item.value)} />
        }
    }

    return (
        <ConfigProvider
            theme={{
                components: {
                    Radio: {
                        buttonSolidCheckedActiveBg: '#fff',
                    }
                }
            }}
        >
            <Form.Item
                label="触发器"
                name="trigger"
            >
                <Radio.Group className={styles['radio_group']} defaultValue={'a'} onChange={onRadioChange} value={trigger}>
                    {
                        options.map(item => {
                            return (
                                <Radio.Button value={item.value} className={styles['radio_button']}>
                                    <img src={item.img} alt="触发器" className={styles['inner_img']} />
                                    {rightCornerIcon(item)}
                                </Radio.Button>
                            )
                        })
                    }
                </Radio.Group>
                <Upload
                    name="file"
                    showUploadList={false} // 不显示上传列表
                    accept=".png" // 只允许上传 png 格式
                    customRequest={({ file, onSuccess = () => { } }) => {
                        // TODO: 上传图片
                        setTimeout(() => {
                            onSuccess('ok'); // 模拟上传成功
                        }, 1000);
                    }}
                    onChange={handleUpload}
                    className={styles['upload']}
                >
                    <Button type="link" className={styles['upload_button']} >上传图片</Button>
                </Upload>
            </Form.Item>
        </ConfigProvider>
    )
}

export default Trigger