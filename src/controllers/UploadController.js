const FileUpload = require('../models/Uploads')

const FileUploadController = async (req, res) => {
 
  try {
    const uploadedFilesData = new FileUpload({
      fieldname: req.file.fieldname,
      originalname: req.file.originalname,
      filename: req.file.filename,
      encoding: req.file.encoding,
      destination: req.file.destination,
      path: req.file.path,
      size: req.file.size,
    });
    await uploadedFilesData.save();

    res
      .status(201)
      .json({ success: "file uploaded successfully", data: uploadedFilesData });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
module.exports = FileUploadController
