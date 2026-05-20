// == QUẢN LÝ ICON TẬP TRUNG ==
// Chỉ cần chỉnh sửa mảng iconActions bên dưới để thay đổi các icon và hành động của chúng.

const iconActions = [
    {
        imgSrc: 'icons/1-phone.png',
        altText: 'Phone',
        href: 'tel:+84968868712'
    },
    {
        imgSrc: 'icons/2-wechat.png',
        altText: 'WeChat',
        // Do chính sách bảo mật của WeChat, không thể mở thẳng vào màn hình chat.
        // Giải pháp tốt nhất là mở trang cá nhân của người dùng.
        href: 'weixin://dl/profile/ngalady0708'
    },
    {
        imgSrc: 'icons/3-zalo.png',
        altText: 'Zalo',
        href: 'https://zalo.me/0968868712'
    },
    {
        imgSrc: 'icons/4-maps.png',
        altText: 'Maps',
        href: 'https://www.google.com/maps/dir//M%E1%BB%99c+T%C3%A2m+%C4%90%C6%B0%E1%BB%9Dng+(+%E6%B2%90%E5%BF%83%E5%A0%82%EF%BC%89,+11+P.+Ph%E1%BA%A1m+L%C6%B0%C6%A1ng,+Kinh+B%E1%BA%AFc,+B%E1%BA%AFc+Ninh+790000,+Vi%E1%BB%87t+Nam/@21.1789459,106.0645251,16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x31350d0ad1e6dcfd:0xcd5b620b2870c4a0!2m2!1d106.0641912!2d21.1765549!3e0?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D'
    }
];

// Đoạn mã này sẽ tự động tạo các icon và thêm vào trang web.
// Bạn không cần chỉnh sửa phần bên dưới.
document.addEventListener('DOMContentLoaded', () => {
    const iconBar = document.querySelector('.icon-bar');
    if (iconBar) {
        let htmlContent = '';
        iconActions.forEach(icon => {
            htmlContent += `
                <a href="${icon.href}" target="_blank" title="${icon.altText}">
                    <img src="${icon.imgSrc}" alt="${icon.altText}">
                </a>
            `;
        });
        iconBar.innerHTML = htmlContent;
    }
});
