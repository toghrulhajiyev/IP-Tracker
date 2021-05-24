class UI {

    // Add location information to the UI
    addInfo(data) {
        document.getElementById('ip-address').textContent = `${data.ip}`;
        document.getElementById('location').textContent = `${data.location.region}, ${data.location.country}`;
        document.getElementById('timezone').textContent = `UTC ${data.location.timezone}`;
        document.getElementById('isp').textContent = `${data.isp}`;
    }

    // Show Alert
    showAlert(className, message) {
        // Create alert container
        const alertContainer = document.createElement('div');
        // Add class to the alert
        alertContainer.classList.add(className);
        // Append text to the alert
        alertContainer.append(message);
        // Append alert to the body
        document.body.append(alertContainer);

        // Remove alert after 3 sec
        setTimeout(() => {
            alertContainer.remove();
        }, 3500);
    }

    // Clear Input
    clearInput() {
        document.getElementById('ip').value = '';
    }
}