import { Card, Row, Col, Button, Input, Image } from "antd"
import styles from './index.module.scss'
const { TextArea } = Input

interface ModalCardProps {
    jsonObject: any
}

const ModalCard: React.FC<ModalCardProps> = ({ jsonObject }) => {

    const leftContent = (json: any) => {
        if (!json) return

        return (
            json.reverseFlipFlop ? (
                <div>
                    <span>逆向触发器</span>
                    <Image src={json.reverseFlipFlop} />
                </div>
            ) : (
                <div>
                    <span>对抗极值对应扰动图</span>
                    <Image src={json.disturbanceDiagram} />
                </div>
            )
        )
    }
        
    

    return (
        <Card
            className={styles['modalCard']}
        >
            <Row gutter={24}>
                <Col span={12}>
                    { leftContent(jsonObject) }
                </Col>
                <Col span={12}>
                    <div>
                        <span>检测结果</span>
                        <TextArea
                            autoSize={{ minRows: 3, maxRows: 20 }}
                            value={jsonObject?.detectionResult}
                        />
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default ModalCard