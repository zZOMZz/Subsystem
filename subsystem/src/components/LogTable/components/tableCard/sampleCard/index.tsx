import { Card, Row, Col, Button, Input, Image, Pagination } from "antd"
import styles from './index.module.scss'
import { useState } from 'react'
import type { PaginationProps } from "antd"
import defaultText from './default.js'
const { TextArea } = Input



const SampleCard = () => {

    const [current, setCurrent] = useState(3);
    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    }
    return (
        <Card
            className={styles['sampleCard']}
        >
            <Row gutter={24}>
                <Col span={12}>
                    <span className={styles['left_title']}>检测结果</span>
                    <TextArea
                        autoSize={{ minRows: 8, maxRows: 20 }}
                        value={defaultText}
                        
                    />
                </Col>
                <Col span={12}>
                    <span className={styles['right_tips']}>仅展示压缩包中前五张图像检测结果，更多检测结果请下载</span>
                    <Pagination current={current} onChange={onChange} total={50} className={styles['pagination']} />
                </Col>
            </Row>
        </Card>
    )
}

export default SampleCard