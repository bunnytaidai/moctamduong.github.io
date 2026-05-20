document.addEventListener('DOMContentLoaded', function () { // Đợi cho đến khi toàn bộ tài liệu HTML được tải xong
    const bookElement = document.getElementById('flipbook'); // Lấy phần tử flipbook từ HTML
    const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "cuoi.jpg"]; // Mảng chứa tên các tệp hình ảnh

    // 1. Tạo và chèn HTML cho các trang trước
    let pageHTML = ''; // Khởi tạo một chuỗi rỗng để chứa HTML của các trang
    images.forEach(image => { // Lặp qua mảng hình ảnh
        pageHTML += `<div class="page"><img src="images/${image}" alt="Page image"></div>`; // Tạo HTML cho mỗi trang và thêm vào chuỗi
    });
    bookElement.innerHTML = pageHTML; // Chèn HTML của các trang vào phần tử flipbook

    // 2. Bây giờ khởi tạo PageFlip trên phần tử đã chứa các trang
    const pageFlip = new St.PageFlip( // Khởi tạo một đối tượng PageFlip mới
        bookElement, // Phần tử HTML sẽ được biến thành flipbook
        { // Đối tượng cấu hình cho flipbook
            width: 550,           // chiều rộng cơ sở của sách
            height: 733,          // chiều cao cơ sở của sách
            size: "stretch", // Kích thước của sách sẽ được kéo dài để vừa với vùng chứa
            minWidth: 315, // Chiều rộng tối thiểu của sách
            maxWidth: 1000, // Chiều rộng tối đa của sách
            minHeight: 420, // Chiều cao tối thiểu của sách
            maxHeight: 1350, // Chiều cao tối đa của sách
            drawShadow: true, // Vẽ bóng đổ cho các trang
            flippingTime: 1000, // Thời gian lật trang (tính bằng mili giây)
            usePortrait: true, // Sử dụng chế độ xem dọc
            startZIndex: 0, // Chỉ số z-index bắt đầu cho các trang
            autoSize: true, // Tự động điều chỉnh kích thước của sách
            maxShadowOpacity: 0.5, // Độ mờ tối đa của bóng đổ
            showCover: true, // Hiển thị trang bìa
            mobileScrollSupport: true // Hỗ trợ cuộn trên thiết bị di động
        }
    );

    // 3. Load các trang từ HTML
    // Thao tác này sẽ cho thư viện biết cần xử lý các phần tử con nào
    pageFlip.loadFromHTML(document.querySelectorAll('.page')); // Tải các trang từ các phần tử HTML đã được tạo
});
