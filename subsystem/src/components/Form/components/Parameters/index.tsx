import { Form, Card, InputNumber } from "antd"
import styles from './index.module.scss'

interface ParaProps {
    config: {
        name: string,
        label: string,
        defaultValue: string,
        step: string,
    }[]
}

const Parameters: React.FC<ParaProps> = ({ config }) => {
    return (
        <Form.Item
            label="参数"
            name="parameters"
        >
            <Card
                className={styles['para_card']}
            >
                <ul className={styles['para_list']}>
                    {
                        config.map(item => (
                            <li
                                key={item.name}
                                className={styles['para_item']}
                            >
                                <div
                                    className={styles['para_explain']}
                                >
                                    <span className={styles['explain_name']}>{item.name}</span>
                                    <span className={styles['explain_main']}>{item.label}</span>
                                </div>
                                <div>
                                    <InputNumber<string>
                                        style={{ width: 200 }}
                                        defaultValue={item.defaultValue}
                                        step={item.step}
                                        stringMode
                                    />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </Card>
        </Form.Item>
    )
}

export default Parameters