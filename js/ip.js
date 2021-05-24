class IP {

    // Get Info
    async getInfo(ipLoc) {
        let locInfo = await fetch(`https://geo.ipify.org/api/v1?apiKey=${keys.ipApiKey}&ipAddress=${ipLoc}`);

        let locationData = await locInfo.json();

        return locationData;
    }
}