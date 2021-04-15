const development = {
  awsRegion: 'us-east-1',
  awsSecretsManagerName: 'test'
};

const production = {
  awsRegion: 'us-east-1',
  awsSecretsManagerName: 'test'
};

module.exports =
  process.env.NODE_ENV !== 'production'
    ? development
    : production;
