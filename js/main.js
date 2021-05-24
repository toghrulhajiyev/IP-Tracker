const ipInput = document.getElementById('ip');
const trackerForm = document.getElementById('tracker');

trackerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get ip 
    const ipValue = ipInput.value;

    // Instantiate IP
    const ip = new IP();

    // Instantiate Map
    const locMap = new LocMap();

    // Instantiate UI
    const ui = new UI();

    if (ipValue !== '') {
        ip.getInfo(ipValue).then((data) => {
            if (data.code !== 422) {
                // Add Info to the UI
                ui.addInfo(data);

                // Create Map
                locMap.createMap(data.location.lat, data.location.lng);

                // Clear Input
                ui.clearInput();
            } else {
                ui.showAlert('alert', 'Please use a valid IP address!');
            }
        })
        .catch((err) => {
            if(err.message === 'Failed to fetch') {
                ui.showAlert('alert', 'Please turn off your adBlocker and tracker blocker to make this application work!');
            }
        });

    } else {
        // Show Alert
        ui.showAlert('alert', 'Please fill input in!');
    }
});