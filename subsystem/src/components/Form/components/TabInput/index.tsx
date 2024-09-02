import { Form, Button, Radio } from "antd";
import styles from './TabInput.module.scss'
import { values } from "lodash";

interface TabInputConfig {
    config: {
        value: string;
        label: string;
    }[],
    label: string,
    buttonText: string
}

const TabInput: React.FC<TabInputConfig> = ({config, label, buttonText}) => {

    return (
        <Form.Item
            label={label}
            className={styles['tabInput_item']}
        >
            <Button className={styles['form-item_topButton']} type="link" size="small">{ buttonText }</Button>
            <Radio.Group className={styles['form-item_radioGroup']} buttonStyle="solid" >
                {config.map((item) => 
                    <div className={styles['form-item_radioItem']}><Radio.Button value={item.value} >{ item.label }</Radio.Button></div>
                )}
            </Radio.Group>
        </Form.Item>
    );
}

export default TabInput;