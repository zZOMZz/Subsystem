import { Form, Card, InputNumber } from "antd"
import styles from './index.module.scss'
import { includes } from "lodash";
import { useEffect } from "react";

interface ParaProps {
    method: string;
    handleParams: (value: Record<string, any>) => void;
    paraConfig: ParaConfigItem[];
    defaultValue: Record<string, any>;
}

interface ParaConfigItem {
    name: string;
    label: string;
    step: string;
    includes: string[];
}

const paraList: React.FC<ParaProps> = ({ method, handleParams, paraConfig, defaultValue }) => {

    useEffect(() => {
        handleParams(defaultValue[method])
    },[method])

    if (!method) {
        return <span className={styles['para_desc']}>请选择攻击方法</span>
    } else {
        return (
            <ul className={styles['para_list']}>
                {
                    paraConfig.map(item => {
                        if (!includes(item.includes, method)) {
                            return null
                        }

                        return (
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
                                        style={{ maxWidth: 160, width: '100%' }}
                                        defaultValue={defaultValue[method][item.name]}
                                        step={item.step}
                                        stringMode
                                        onChange={(value) => { handleParams({ [item.name]: value }) }}
                                    />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

const Parameters: React.FC<ParaProps> = ({ method, handleParams, paraConfig, defaultValue }) => {
    

    return (
        <Form.Item
            label="参数"
            name="parameters"
        >
            <Card
                className={styles['para_card']}
            >
                {
                    paraList({ method, handleParams, paraConfig, defaultValue })
                }
            </Card>
        </Form.Item>
    )
}

export default Parameters