// Ngày bắt đầu yêu (YYYY, MM - 1, DD, HH, MM, SS)
const startDate = new Date(2023, 0, 1, 0, 0, 0); // Ví dụ: 1/1/2023 00:00:00

function updateCounter() {
    const now = new Date();
    const diffTime = now - startDate;

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    document.getElementById("daysCount").innerText =
        `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

// Cập nhật mỗi giây
setInterval(updateCounter, 1000);
updateCounter();
