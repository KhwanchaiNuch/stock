require("dotenv").config();

const env = process.env.ENV || process.env.NODE_ENV || "development";
const commonConfig = {
  port: 8080,
  env,
  baseURL: "http://0.0.0.0:8080",
  apiEndpoint: "http://localhost:3000",

  storageKey: "_wms_stock_dev",
  storageKeyRefresh: "_r_wms_stock_dev",
  isProduction: false,
};

const environmentConfig = {
  development: {},
  sit: {
    apiEndpoint: "http://localhost:3000",
    storageKey: "_wms_stock_sit",
    storageKeyRefresh: "_r_wms_stock_sit",
    isProduction: false,
  },
  uat: {
    apiEndpoint: "http://localhost:3000",
    storageKey: "_wms_stock_uat",
    storageKeyRefresh: "_r_wms_stock_uat",
    isProduction: false,
  },
  production: {
    apiEndpoint: "http://localhost:3000",
    storageKey: "_wms_stock",
    storageKeyRefresh: "_r_wms_stock",
    isProduction: true,
  },
};
const config = Object.assign(commonConfig, environmentConfig[env]);
module.exports = config;
