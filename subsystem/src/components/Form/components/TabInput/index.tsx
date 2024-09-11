import { Form, Button, Radio, Modal, Input, Upload, message } from "antd";
import styles from './TabInput.module.scss'
import { useState } from "react";
import { TabInputConfig } from "../../index";


const TabInput: React.FC<TabInputConfig> = ({config, label, buttonText, modal}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleOk = () => {
        setIsModalOpen(false)
    }
    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <Form.Item
            label={label}
            className={styles['tabInput_item']}
        >
            <Button className={styles['form-item_topButton']} type="link" size="small" onClick={() => setIsModalOpen(true)}>{ buttonText }</Button>
            <Radio.Group className={styles['form-item_radioGroup']} buttonStyle="solid" >
                {config.map((item: any) => 
                    <div className={styles['form-item_radioItem']}><Radio.Button value={item.value} >{ item.label }</Radio.Button></div>
                )}
            </Radio.Group>
            {
                modal({isModalOpen, handleCancel, handleOk})
            }
        </Form.Item>
    );
}

export default TabInput;