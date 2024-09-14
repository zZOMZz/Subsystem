import { Form, Input } from 'antd'
import styles from './index.module.scss'
import { mean, set } from 'lodash'
import { DatasetParams } from '../../AttackForm'
import { useState, useEffect } from 'react'
interface PreParametersProps {
    defaultValue: DatasetParams | undefined;
    onPreParametersChange: (value: DatasetParams) => void;
}

const PreParameters: React.FC<PreParametersProps> = ({ defaultValue, onPreParametersChange }) => {
    // console.log('defaultValue', defaultValue);
    const [mean, setMean] = useState<number[]>(Array(3).fill(''))
    const [std, setStd] = useState<number[]>(Array(3).fill(''))
    const [scale, setScale] = useState<number[]>(Array(2).fill(''))
    const [inputsize, setInputsize] = useState<number[]>(Array(2).fill(''))

    const [form] = Form.useForm()

    useEffect(() => {
        if (defaultValue) {
            setMean(defaultValue['mean'])
            setStd(defaultValue['std'])
            setScale(defaultValue['scale'])
            setInputsize(defaultValue['inputsize'])
        }
    }, [defaultValue])

    const handleMean = (index: number, value: number) => {
        let newMean = [...mean]
        newMean[index] = value
        setMean(newMean)
        
        onPreParametersChange({
            mean: newMean,
            std,
            scale,
            inputsize
        })
    }

    const handleStd = (index: number, value: number) => {
        let newStd = [...std]
        newStd[index] = value
        setStd(newStd)
        onPreParametersChange({
            mean,
            std: newStd,
            scale,
            inputsize
        })
    }

    const handleScale = (index: number, value: number) => {
        let newScale = [...scale]
        newScale[index] = value
        setScale(newScale)
        onPreParametersChange({
            mean,
            std,
            scale: newScale,
            inputsize
        })
    }

    const handleInputsize = (index: number, value: number) => {
        let newInputsize = [...inputsize]
        newInputsize[index] = value
        setInputsize(newInputsize)
        onPreParametersChange({
            mean,
            std,
            scale,
            inputsize: newInputsize
        })
    }

    return (
        <Form
            form={form}
            className={styles['pre_form']}
        >
            <Form.Item
                label="预处理参数"
                name="preParameters"
            >
                <ul className={styles['pre_ul']}>
                    <li className={styles['pre_li']}>
                        <span className={styles['li_span']}>mean:</span>
                        {
                            mean.map((item, index) => {
                                return (
                                    <Input key={index} className={styles['pre_input']} type="number" value={item} onChange={(e) => { handleMean(index, Number(e.target.value)) }} />
                                )
                            })
                        }
                        <span className={styles['explain']}>均值(R,G,B)</span>
                    </li>
                    <li className={styles['pre_li']}>
                        <span className={styles['li_span']}>std:</span>
                        {
                            std.map((item, index) => {
                                return (
                                    <Input key={index} className={styles['pre_input']} type="number" value={item} onChange={(e) => { handleStd(index, Number(e.target.value)) }} />
                                )
                            })
                        }
                        <span className={styles['explain']}>方差(R,G,B)</span>
                    </li>
                    <li className={styles['pre_li']}>
                        <span className={styles['li_span']}>scale:</span>
                        {
                            scale.map((item, index) => {
                                return (
                                    <Input key={index} className={styles['pre_input']} type="number" value={item} onChange={(e) => { handleScale(index, Number(e.target.value)) }} />
                                )
                            })
                        }
                        <span className={styles['explain']}>数据范围</span>
                    </li>
                    <li className={styles['pre_li']}>
                        <span className={styles['li_span']}>inputsize:</span>
                        {
                            inputsize.map((item, index) => {
                                return (
                                    <Input key={index} className={styles['pre_input']} type="number" value={item} onChange={(e) => { handleInputsize(index, Number(e.target.value)) }} />
                                )
                            })
                        }
                        <span className={styles['explain']}>模型输入大小</span>
                    </li>
                </ul>

            </Form.Item>
        </Form>
    )
}

export default PreParameters;