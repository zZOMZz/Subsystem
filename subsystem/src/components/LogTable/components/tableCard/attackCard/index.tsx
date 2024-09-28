import { Card, Row, Col, Button, Input, Image } from "antd"
import defaultText from './default.js'
import styles from './index.module.scss'
import { downloadFile } from "@/services/file/api"

const { TextArea } = Input


interface AttackCardProps {
    jsonObject: any
}

const AttackCard: React.FC<AttackCardProps> = ({ jsonObject }) => {
    const jsonObj = JSON.parse(jsonObject)

    const handleDownload = async (url: string) => {
        const res = await downloadFile(url)
        const blob = res.blob()
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = url
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Card
            className={styles['attackCard']}
        >
            <Row> 
                <Col span={12}>
                    <div>
                        <span>后门模型</span>
                        <Button type="link" onClick={() => { handleDownload(jsonObj.backdoorModel) }}>下载</Button>
                    </div>
                    <div>
                        <span>后门样本</span>
                        <Button type="link" onClick={() => { handleDownload(jsonObj.backdoorSample) }}>下载</Button>
                        <div className={styles['image_group']}>
                            <Image.PreviewGroup
                                preview={{
                                    onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                                }}
                            >
                                {
                                    jsonObj.backdoorSampleImages.map((url: string) => <Image width={150} src={url} />)
                                }
                            </Image.PreviewGroup>
                        </div>
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <span>训练信息统计</span>
                        <TextArea
                            autoSize={{ minRows: 3, maxRows: 20 }}
                            value={jsonObj.statistic}
                        />
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default AttackCard