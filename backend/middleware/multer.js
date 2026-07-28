const multer = require("multer");
const path = require("path");
const fs = require("fs");



// Create uploads/images if it doesn't exist
const uploadDir = path.join(__dirname, "../uploads/images");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


// Storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploadDir");
    },

    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage
});

module.exports = upload;