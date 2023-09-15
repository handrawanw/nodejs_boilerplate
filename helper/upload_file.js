const crypto = require("crypto");
const path = require("path");
const multer = require("multer");
const knex_psql=require("../database/knex");

// upload avatar
let file_bytes_avatar=500;
let file_size_avatar=file_bytes_avatar*1024; // 300kb

const config_avatar = {
    fileSize: file_size_avatar, // 500000(5e+5) = 500 Kb, 1000000(1e+6) = 1mb
    fileFilter: function (req, file, callback) {
        let fileSize = parseInt(req.headers['content-length']);
        let mimetype=["image/png","image/jpg","image/jpeg"];
        if (
            !mimetype.includes(file.mimetype)
        ) {
           return callback(new Error("File : Only images are allowed"),false);
        }else if (fileSize > file_size_avatar) {
            return callback(new Error(`File : Maximum photo size ${Math.round(file_size_avatar/1024)} kb`),false);
        }else{
            return callback(null, true);
        }
    },
}

const storage_avatar = multer.diskStorage({
    destination: function (req, file, cb) {
        let path_folder = __dirname.split("\\");
        path_folder = path.join(path_folder.slice(0, path_folder.length - 1).join("/"));
        cb(null, path.join(path_folder + '/uploaded'))
    },
    filename: function (req, file, cb) {
        let hash = crypto.createHash('md5');
        let format_file=file.originalname.split(".");
        format_file=format_file[format_file.length-1];
        let avatar_name=`${hash.update(`avatar_${req.decoded.id}_${1}`).digest("hex")}.${format_file}`;
        (async(avatar_name)=>{
            await knex_psql("user").update({'foto':avatar_name}).where({'id':req.decoded.id});
        })(avatar_name)
        cb(null,avatar_name);
    }
});

const upload_avatar = multer({ storage: storage_avatar, fileFilter: config_avatar.fileFilter, limits: { fileSize: config_avatar.fileSize } });
// upload avatar

module.exports = {
    upload_avatar
};