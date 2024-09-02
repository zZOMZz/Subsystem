import { Form } from 'antd'
import styles from './index.module.scss'

const PreParameters: React.FC = () => {
    return (
        <Form.Item
            label="预处理参数"
            name="preParameters"
        >
            <ul className={styles['pre_ul']}>
                <li className={styles['pre_li']}>
                    <span className={styles['li_span']}>mean:</span>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <span className={styles['explain']}>均值(R,G,B)</span>
                </li>
                <li className={styles['pre_li']}>
                    <span className={styles['li_span']}>std:</span>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <span className={styles['explain']}>方差(R,G,B)</span>
                </li>
                <li className={styles['pre_li']}>
                    <span className={styles['li_span']}>scale:</span>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <span className={styles['explain']}>数据范围</span>
                </li>
                <li className={styles['pre_li']}>
                    <span className={styles['li_span']}>inputsize:</span>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <div>
                        <input className={styles['pre_input']} type="number" />
                    </div>
                    <span className={styles['explain']}>模型输入大小</span>
                </li>
            </ul>

        </Form.Item>
    )
}

export default PreParameters;