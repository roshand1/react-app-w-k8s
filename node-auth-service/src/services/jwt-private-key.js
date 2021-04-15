const { awsRegion, awsSecretsManagerName } = require('./app-settings');
// Load the AWS SDK
const AWS = require('aws-sdk'),
    region = awsRegion,
    secretName = awsSecretsManagerName

// Create a Secrets Manager client
const client = new AWS.SecretsManager({
    region: region
});
const jwtPrivateKey = async () => {
    try {
        const data = await client.getSecretValue({
            SecretId: secretName,
        }).promise();
        if (data && data.SecretString) {
            const secret = data.SecretString;
            const parsedSecret = JSON.parse(secret);
            return {
                alg: parsedSecret.CognitoAlg,
                e: parsedSecret.CognitoExpo,
                kid: parsedSecret.CognitoKid,
                kty: parsedSecret.CognitoKty,
                n: parsedSecret.CognitoKey,
                use: parsedSecret.CognitoUse
            };
        }
    }
    catch (err) {
        console.log(err);
        return null;
    }
};

module.exports = {
    jwtPrivateKey
}