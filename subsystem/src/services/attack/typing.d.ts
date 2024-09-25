declare namespace API {
    type DatasetUpload = {
        type: number;
        name: string;
        imageName: string;
        imagePath: string;
        fileName: string;
        filePath: string;
        numClasses: number;
    }

    type NetworkUpload = {
        type: number;
        name: string;
        fileName: string;
        pyFilePath: string;
        tenFilePath: string;
    }

    type TriggerUpload = {
        type: number;
        flipName: string;
        flipPath: string;
    }

    type ListItemUpload = {
        frame: string
        networkStructureId: string
        networkStructure: string
        datasetId: string
        dataSet: string
        mean: string
        std: string
        scale: string
        inputSize: string
        attackMethod: string
        attackMethodId: string
        parameterJson: string
        flipFlop: string
    }
}