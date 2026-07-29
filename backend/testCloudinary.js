require("dotenv").config();
const cloudinary = require("./config/cloudinary");

(async () => {
  try {
    const result = await cloudinary.uploader.upload("./uploads/images/https://w7.pngwing.com/pngs/445/734/png-transparent-mythical-phoenix-watercolor-resplendent-flaming-phoenix-bird-thumbnail.png");
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();