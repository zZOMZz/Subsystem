import { Form, Button, Radio, Modal, Input, Upload, message, Popover } from "antd";
import styles from './TabInput.module.scss'
import { useState } from "react";
import { TabInputConfig } from "../../AttackForm";



const TabInput: React.FC<TabInputConfig> = ({config, label, buttonText, modal, onChange, action, deleteAction}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    const handleDelete = (value: string) => {
        console.log('handleDelete', value);
        deleteAction(value)
    }

    return (
        <Form.Item
            label={label}
            className={styles['tabInput_item']}
        >
            <Button className={styles['form-item_topButton']} type="link" size="small" onClick={() => setIsModalOpen(true)}>{ buttonText }</Button>
            <Radio.Group className={styles['form-item_radioGroup']} buttonStyle="solid" onChange={(e) => { onChange(e.target.value) }}>
                {config.map((item: any) => 
                    <div className={styles['form-item_radioItem']}>
                        <Popover content={item.name} trigger="hover">
                            <Radio.Button value={item.name} >
                                <span className={styles['desc']}>{item.name}</span>
                            </Radio.Button>
                        </Popover>
                        {item.custom && <img src="/imgs/delete.png" alt="删除" className={styles['delete_img']} onClick={() => handleDelete(item.name)} />}
                    </div>
                )}
            </Radio.Group>
            {
                modal({isModalOpen, handleCancel, handleOk, action})
            }
        </Form.Item>
    );
}

export default TabInput;