import { Form, Card, InputNumber } from "antd"
import styles from './index.module.scss'
import { includes } from "lodash";
import { useEffect } from "react";

interface ParaProps {
    attackMethod: string;
    handleParams: (value: Record<string, any>) => void;
}

const paraConfig = [
    {
        name: 'target_label',
        label: '目标类别',
        defaultValue: '1',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'poisoned_portion',
        label: '投毒率',
        defaultValue: '0.1',
        step: '0.1',
        includes: ['BadNet', 'WaNet']
    },
    {
        name: 'trigger_size',
        label: '触发器尺寸',
        defaultValue: '3',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN']
    },
    {
        name: 'trigger_h',
        label: '触发器纵向位置',
        defaultValue: '0',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN']
    },
    {
        name: 'trigger_w',
        label: '触发器横向位置',
        defaultValue: '0',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN']
    },
    {
        name: 'epoch',
        label: '训练轮数',
        defaultValue: '150',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'batch_size',
        label: '训练批次大小',
        defaultValue: '256',
        step: '1',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'learning_rate',
        label: '学习率',
        defaultValue: '0.001',
        step: '0.0001',
        includes: ['BadNet', 'TrojanNet', 'TrojanNN', 'WaNet']
    },
    {
        name: 'select_point',
        label: '触发器黑色像素个数',
        defaultValue: '3',
        step: '1',

        includes: ['TrojanNet']
    },
    {
        name: 'neuron_num',
        label: '选择神经元个数',
        defaultValue: '1',
        step: '2',

        includes: ['TrojanNN']
    },
    {
        name: 'neuron_epoch',
        label: '触发器生成的迭代轮数',
        defaultValue: '500',
        step: '1',

        includes: ['TrojanNN']
    },
    {
        name: 'grid_s',
        label: '触发网',
        defaultValue: '0.5',
        step: '0.1',

        includes: ['WaNet']
    },
    {
        name: 'grid_k',
        label: '触发网格尺寸',
        defaultValue: '4',
        step: '1',

        includes: ['WaNet']
    },
    {
        name: 'cross_ratio',
        label: '噪声训练样本比例',
        defaultValue: '0.2',
        step: '0.1',

        includes: ['WaNet']
    }
]

const defaultValue: Record<string,any> = {
    BadNet: {
        target_label: '0',
        poisoned_portion: '0.1',
        trigger_size: '3',
        trigger_h: '0',
        trigger_w: '0',
        epoch: '150',
        batch_size: '256',
        learning_rate: '0.001',
    },
    TrojanNet: {
        target_label: '0',
        trigger_size: '3',
        select_point: '3',
        trigger_h: '0',
        trigger_w: '0',
        epoch: '500',
        batch_size: '128',
        learning_rate: '0.01',
    },
    TrojanNN: {
        target_label: '0',
        trigger_size: '3',
        trigger_h: '0',
        trigger_w: '0',
        epoch: '100',
        batch_size: '256',
        learning_rate: '0.001',
        neuron_num: '2',
        neuron_epoch: '500',
    },
    WaNet: {
        target_label: '0',
        poisoned_portion: '0.1',
        epoch: '500',
        batch_size: '128',
        learning_rate: '0.01',
        grid_s: '0.5',
        grid_k: '4',
        cross_ratio: '0.2',
    }
}

const paraList: React.FC<ParaProps> = ({ attackMethod, handleParams }) => {

    useEffect(() => {
        handleParams(defaultValue[attackMethod])
    },[attackMethod])

    if (!attackMethod) {
        return <span className={styles['para_desc']}>请选择攻击方法</span>
    } else {
        return (
            <ul className={styles['para_list']}>
                {
                    paraConfig.map(item => {
                        if (!includes(item.includes, attackMethod)) {
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
                                        defaultValue={defaultValue[attackMethod][item.name]}
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


const Parameters: React.FC<ParaProps> = ({ attackMethod, handleParams }) => {
    

    return (
        <Form.Item
            label="参数"
            name="parameters"
        >
            <Card
                className={styles['para_card']}
            >
                {
                    paraList({ attackMethod, handleParams })
                }
            </Card>
        </Form.Item>
    )
}

export default Parameters