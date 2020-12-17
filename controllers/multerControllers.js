const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, ".." ,"imageUploads"),
    filename: (req, file, next) => {
        next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
}).single('image');

const uploadPhoto = (req, res) => {
    console.log(req.body);
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
            res.json({
                status: "Unsucessfull"
            }) 
        } else {
            res.json({
                status: 'image uploaded'
            });
        }
    })
}

module.exports = uploadPhoto;