module.exports = {
  apps: [
    {
      name: 'api',               // Application name
      script: 'ts-node src/index.ts',        // Path to the app entry point
      instances: '1',          
      env: {
        NODE_ENV: 'development', // Environment variables for development
      },
      env_production: {
        NODE_ENV: 'production',  // Environment variables for production
      }
    }
  ]
};
