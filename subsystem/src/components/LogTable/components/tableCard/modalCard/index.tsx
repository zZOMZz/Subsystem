import { Card, Row, Col, Button, Input, Image, Pagination } from "antd"
import styles from './index.module.scss'
import { useState } from 'react'
import type { PaginationProps } from "antd"
const { TextArea } = Input



const ModalCard = () => {

    const [current, setCurrent] = useState(3);
    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    }
    return (
        <Card
            className={styles['modalCard']}
        >
            <Row>
                <Col span={12}>
                    <div>
                        <span>检测结果</span>
                    </div>
                    <TextArea
                        autoSize={{ minRows: 3, maxRows: 20 }}
                        value={''}
                    />
                </Col>
                <Col span={12}>
                    <div>
                        <span>仅展示压缩包中前五张图像检测结果，更多检测结果请下载</span>
                    </div>
                    <Pagination current={current} onChange={onChange} total={50} />
                </Col>
            </Row>
        </Card>
    )
}

export default ModalCard