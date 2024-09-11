import { Card, Row, Col, Button, Input, Image } from "antd"
import defaultText from './default.js'
import styles from './index.module.scss'
const { TextArea } = Input


const tableCard = () => {
    return (
        <Card>
            <Row> 
                <Col span={12}>
                    <div>
                        <span>后门模型</span>
                        <Button type="link">下载</Button>
                    </div>
                    <div>
                        <span>后门样本</span>
                        <Button type="link">下载</Button>
                        <div className={styles['image_group']}>
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                <Image width={150} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                                <Image
                                    width={150}
                                    src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                                />
                            </Image.PreviewGroup>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <span>训练信息统计</span>
                        <TextArea
                            autoSize={{ minRows: 3, maxRows: 20 }}
                            value={defaultText}
                        />
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default tableCard