import { Form, Card, InputNumber } from "antd"
import styles from './index.module.scss'
import { includes } from "lodash";

interface ParaProps {
    attackMethod: string;
}

const paraConfig = [
    {
        name: 'target_label',
        label: '目标类别',
        defaultValue: '1',
        step: '0.1',
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


const Parameters: React.FC<ParaProps> = ({ attackMethod }) => {
    

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
                                            defaultValue={item.defaultValue}
                                            step={item.step}
                                            stringMode
                                        />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Card>
        </Form.Item>
    )
}

export default Parameters