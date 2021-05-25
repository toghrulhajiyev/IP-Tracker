class IP {

    // Get Info
    async getInfo(loc) {
        let locInfo = await fetch(`https://geo.ipify.org/api/v1?apiKey=${keys.ipApiKey}&ipAddress=${loc}&domain=${loc}`);

        let locationData = await locInfo.json();

        return locationData;
    }
}