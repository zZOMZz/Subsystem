import { ConfigProvider, Form, Radio } from "antd";
import styles from './index.module.scss'
import { useState } from 'react'

const Trigger: React.FC = () => {
    const [trigger, setTrigger] = useState('a')
    
    const onRadioChange = (e: any) => {
        setTrigger(e.target.value)
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
                <Radio.Group className={styles['radio_group']} defaultValue={'a'}  onChange={onRadioChange} value={trigger}>
                    <Radio.Button value="a" className={styles['radio_button']}>
                        <img src="/imgs/BackdoorAttack_trigger_FF.png" alt="" className={styles['inner_img']} />
                        {trigger === 'a' && <img src="/imgs/check.png" alt="" className={styles['check_img']} />}
                    </Radio.Button> 
                    <Radio.Button value="b" className={styles['radio_button']}>
                        <img src="/imgs/BackdoorAttack_trigger_10.png" alt="" className={styles['inner_img']} />
                        {trigger === 'b' && <img src="/imgs/check.png" alt="" className={styles['check_img']} />}
                    </Radio.Button>
                    <Radio.Button value="c" className={styles['radio_button']}>
                        <img src="/imgs/BackdoorAttack_trigger_apple.png" alt="" className={styles['inner_img']} />
                        {trigger === 'c' && <img src="/imgs/check.png" alt="" className={styles['check_img']} />}
                    </Radio.Button>
                </Radio.Group>
            </Form.Item>
        </ConfigProvider>
    )
}

export default Trigger