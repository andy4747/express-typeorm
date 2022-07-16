import multer from "multer";
import {MulterConfig} from "../../../config/multer";

class FileService extends MulterConfig{
    static initFileService = ( fieldName : string, fileLimit : number ) => multer({ storage : MulterConfig.Init()}).array( fieldName, fileLimit )
}

/**
 * Default File Upload Multer
 * @param fieldName
 * @param fileLimit
 * @constructor
 */
export const FileUpload = ( fieldName : string, fileLimit : number ) => FileService.initFileService( fieldName, fileLimit )