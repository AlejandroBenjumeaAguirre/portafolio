const form = document.getElementById('form');
const sendMail = document.getElementById('emailA');

function handleSendEmail(event){
    event.preventDefault();
    const fd = new FormData(this);

    sendMail.setAttribute(
        'href',
        `mailTo:alejo120792120792@hotmail.com?subject=${fd.get('subject')}&body=${fd.get('name')}-${fd.get('message')}`
    );

    sendMail.click();
}

form.addEventListener('submit', handleSendEmail);