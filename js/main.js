function sendEmail() {
    // Encode the email address parts
    const username = 'chriswrendev';
    const domain = 'gmail.com';
    const email = username + '@' + domain;
    
    // Open the default email client
    window.location.href = 'mailto:' + email;
} 