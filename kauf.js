document.getElementById('ticket-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ticketType = document.getElementById('ticket-type').value;
    const quantity = document.getElementById('ticket-quantity').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('payment-method').value;
    const cardInfo = document.getElementById('card-info').value;

    if (!name || !email || !cardInfo) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus!');
        return;
    }

    // Ticketkauf-Logik (kann später mit einer echten Zahlungs-API verbunden werden)
    alert(`Vielen Dank für Ihren Kauf, ${name}!\n
           Sie haben ${quantity} ${ticketType} Tickets für das 1. Internationale Eishockey Turnier 2025 gekauft.\n
           Eine Bestätigung wurde an Ihre E-Mail-Adresse ${email} gesendet.`);
});
