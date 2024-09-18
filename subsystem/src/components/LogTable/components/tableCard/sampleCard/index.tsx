import { Card, Row, Col, Button, Input, Image } from "antd"
import styles from './index.module.scss'
const { TextArea } = Input


const SampleCard = () => {
    return (
        <Card
            className={styles['sampleCard']}
        >
            <Row gutter={24}>
                <Col span={12}>
                    <div>
                        <span>逆向触发器</span>
                        <TextArea
                            autoSize={{ minRows: 3, maxRows: 20 }}
                            value={''}
                        />
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <span>检测结果</span>
                        <TextArea
                            autoSize={{ minRows: 3, maxRows: 20 }}
                            value={''}
                        />
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default SampleCard