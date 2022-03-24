/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: process.env.USERNAME,
        mongodb_password: process.env.ADMIN,
        mongodb_clustername: process.env.CLUSTER,
        mongodb_database: process.env.DATABASE,
      },
    };
  }
  return {
    env: {
      mongodb_username: process.env.USERNAME,
      mongodb_password: process.env.ADMIN,
      mongodb_clustername: process.env.CLUSTER,
      mongodb_database: process.env.DATABASE,
    },
  };
};

module.exports = nextConfig;
