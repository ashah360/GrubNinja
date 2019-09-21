
// See: https://medium.com/@TwitterArchiveEraser/notarize-electron-apps-7a5f988406db

const fs = require('fs');
const path = require('path');
var electronNotarize = require('electron-notarize');

module.exports = async function (params) {
    // Only notarize the app on Mac OS only.
    if (process.platform !== 'darwin' || params.packager.platform.name === 'windows') {
        return;
    }

    console.log('afterSign hook triggered', params);

    // Same appId in electron-builder.
    let appId = 'com.grubninja.client';
    let appPath = path.join(params.appOutDir, `${params.packager.appInfo.productFilename}.app`);

    if (!fs.existsSync(appPath)) {
        throw new Error(`Cannot find application at: ${appPath}`);
    }

    console.log(`Notarizing ${appId} found at ${appPath}`);

    try {
        if (!process.env.APPLE_ID || !process.env.APPLE_ID_PASSWORD) {
            throw new Error('Apple ID or Apple ID password missing as env var');
        }

        await electronNotarize.notarize({
            appBundleId: appId,
            appPath: appPath,
            appleId: process.env.APPLE_ID,
            appleIdPassword: process.env.APPLE_ID_PASSWORD,
        });
    } catch (error) {
        console.error(error);
    }

    console.log(`Done notarizing ${appId}`);
};