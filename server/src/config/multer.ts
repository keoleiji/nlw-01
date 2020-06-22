import multer from 'multer';
import path from 'path';
import crypto from 'crypto'; //hash - impedir duplicatas

//upload de image
//fileFilter (tipo de image)

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex'); //converter string hexadecimal

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        }
    })
}
