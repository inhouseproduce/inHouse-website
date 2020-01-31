const AWS = require("aws-sdk");
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    signatureVersion: 'v4',
    region: "us-east-1"
});

const retreiveImage = async function (bucket, prefix)
{
    //return the url of the last modified file from 'bucket' from folder 'prefix'
    return new Promise( async function(resolve, reject) {
        var params = {
            Bucket: bucket,
            Prefix: prefix 
        };

        //list all files from 'bucket' in folder 'prefix'
        s3.listObjects(params, function (err, data) {
            if (err) console.log(err, err.stack); // an error occurred

            //sort all files by last modified date
            data.Contents.sort(function(a,b) {
                return (b.LastModified > a.LastModified) ? 1 :
                ((a.LastModified > b.LastModified) ? -1 : 0);
            });
            
            //get last modified image (note: this assumes that all files in 
            //  bucket are image files)
            const latestImage = data.Contents[0];
            s3.getSignedUrl('getObject',  {Bucket: bucket, Key: latestImage.Key}, 
                function (err, url) {resolve(url)});
        })
    })
}

module.exports= {
    retreiveImage: retreiveImage
};


