export interface NetworkItem {
    userId: string
    type: number
    initCorrelation: any
    name: string
    fileName: string
    pyFilePath: string
    tenFilePath: string
    pyPresetPath: any
    tenPresetPath: any
    deleted: boolean
    enabled: number
    createdBy: string
    createdTime: string
    lastModifyBy: string
    lastModifyTime: string
    id: string
    custom: boolean
}

export interface DatasetItem {
    userId: string
    type: number
    initCorrelation: any
    name: string
    imageName: string
    imagePresetPath: any
    imagePath: string
    fileName: string
    filePath: string
    filePresetPath: string
    numClasses: string
    deleted: boolean
    enabled: number
    createdBy: string
    createdTime: string
    lastModifyBy: string
    lastModifyTime: string
    id: string
    custom: boolean
}

export interface TriggerItem {
    userId: string
    type: number
    flipName: string
    flipPath: string
    presetPath: any
    deleted: boolean
    enabled: number
    createdBy: string
    createdTime: string
    lastModifyBy: string
    lastModifyTime: string
    id: string
    custom: boolean
}

export interface ModelItem {
    userId: string
    type: number
    initCorrelation: any
    name: string
    modelName: string
    pyModelPath: string
    tenPresetPath: any
    deleted: boolean
    enabled: number
    createdBy: string
    createdTime: string
    lastModifyBy: string
    lastModifyTime: string
    id: string
    custom: boolean
}