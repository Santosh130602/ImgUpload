
const Image = require("../models/Image");
const cloudinary = require("cloudinary").v2;

function isFileTypeSupported(fileType, supportedTypes) {
  return supportedTypes.includes(fileType);
}

async function uploadFileToCloudinary(file, folder, quality) {
  const options = { folder };
  if (quality) {
      options.quality = quality;
  }
  options.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.imageUpload = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageFile = req.files.imageFile;

    const supportedTypes = ["png", "jpg", "jpeg"];
    const fileType = imageFile.name.split('.')[1].toLowerCase();

    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File type not supported"
      });
    }

    const response = await uploadFileToCloudinary(imageFile, "Assessment");

    const imageData = await Image.create({
      title,
      description,
      imageUrl: response.secure_url
    });

    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
      file: imageData
    });

  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find({}, 'title imageUrl description');
    res.status(200).json({
      success: true,
      images
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

exports.getImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await Image.findById(imageId);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    image.viewCount += 1;
    await image.save();

    res.json(image);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
