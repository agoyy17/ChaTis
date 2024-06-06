function sendMessage(message) {
    const inputBox = document.getElementById('input-box');
    // Bersihkan kotak input jika pesan tidak diberikan sebagai argumen
    if (!message) {
        message = inputBox.value;
        inputBox.value = '';
    }

    // Tampilkan pesan pengguna di chatbox
    appendMessage('You: ' + message);

    // Simpan pesan ke dalam history dan tampilkan di sidebar history
    addToHistory('You: ' + message);

    // Berikan respons sesuai dengan pilihan pertanyaan atau pesan yang dikirim
    let response;
    if (message === 'Berkas apa saja yang kamu perlukan untuk tugas akhir?') {
        response = 'Jawaban untuk Pertanyaan 1';
    } else if (message === 'Berapa jumlah minimal sks untuk ngambil TA?') {
        response = 'Minimal kamu sudah lulus dengan jumlah 130 atau 135 sks sudah termasuk KKN';
    } else if (message === 'Apakah bisa mengikuti MSIB dengan kepastian 20 sks tanpa convert atau harus konversi ke mata kuliah ?') {
        response = 'Jawaban untuk Pertanyaan 3';
    } else if (message === 'Bagaimana alur pengerjaan tugas akhir?') {
        response = 'Jawaban untuk Pertanyaan 4';    
    } else if (message === 'Berapa level minimal untuk melakukan sertifikasi?') {
        response = 'Terkait Sertifikasi, Kalian harus minimal Level 6 atau setara Sarjana';    
    } else {
        response = 'Maaf, saya tidak mengerti pertanyaan Anda.';
    }

    // Tampilkan respons di chatbox
    setTimeout(() => {
        appendMessage('ChaTis: ' + response);
        // Simpan respons ke dalam history dan tampilkan di sidebar history
        addToHistory('ChaTis: ' + response);
    }, 1000);
}

function appendMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
}

function addToHistory(message) {
    const historyList = document.getElementById('history-list');
    const newListItem = document.createElement('li');
    newListItem.textContent = message;
    historyList.appendChild(newListItem);
    const separator = document.createElement('hr');
    historyList.appendChild(separator);

}
