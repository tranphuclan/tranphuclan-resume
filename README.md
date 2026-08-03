# tranphuclan-resume

Sơ yếu lý lịch cá nhân của [Trần Phúc Lân](https://tranphuclan.github.io/tranphuclan-resume).

## Cấu trúc

```
tranphuclan-resume/
├── index.html   # Nội dung CV (tiếng Việt mặc định) — chỉnh sửa tại đây
├── app.js       # Bản dịch tiếng Anh, nút chuyển ngôn ngữ & kiểu CV
├── style.css    # Giao diện (kiểu hiện đại + kiểu Harvard)
├── images/      # Ảnh đại diện
├── scripts/     # Tiện ích (xuất PDF)
└── README.md
```

> Song ngữ: nội dung tiếng Việt nằm trực tiếp trong `index.html`, bản tiếng Anh
> tương ứng nằm trong `app.js` (khớp theo thuộc tính `data-i18n`).

> Hai kiểu hiển thị: kiểu **hiện đại** (2 cột, có màu/ảnh — mặc định) và kiểu
> **Harvard** (1 cột, serif, đen trắng, không ảnh). Bấm nút 🎓 trên dock để
> chuyển qua lại; lựa chọn được nhớ qua `localStorage` và URL (`?style=harvard`).

## Sử dụng

1. Cập nhật thông tin trong `index.html`
2. Mở `index.html` trong trình duyệt để xem
3. In ra PDF: **Print** → **Save as PDF**

## Xuất PDF bằng script

Script `scripts/html_to_pdf.py` dùng Google Chrome (headless) để tạo PDF khổ A4,
giữ đúng font/màu và xuất được cả hai ngôn ngữ. Không cần cài thêm gì (chỉ cần đã
có Google Chrome/Chromium).

```bash
python3 scripts/html_to_pdf.py                  # xuất cả 2 bản: vi + en (kiểu hiện đại)
python3 scripts/html_to_pdf.py --lang vi        # chỉ tiếng Việt
python3 scripts/html_to_pdf.py --lang en        # chỉ tiếng Anh
python3 scripts/html_to_pdf.py --style harvard  # bản kiểu Harvard
python3 scripts/html_to_pdf.py --style all      # cả 2 kiểu × 2 ngôn ngữ
python3 scripts/html_to_pdf.py --out dist       # chọn thư mục xuất
```

Kết quả: `Tran-Phuc-Lan-CV-vi.pdf`, `Tran-Phuc-Lan-CV-en.pdf` (và
`Tran-Phuc-Lan-CV-Harvard-vi.pdf`, `Tran-Phuc-Lan-CV-Harvard-en.pdf` với `--style harvard/all`).

> Nếu Chrome cài ở vị trí khác, đặt biến môi trường `CHROME_PATH` trỏ tới file thực thi.

## GitHub Pages (tùy chọn)

1. Vào **Settings → Pages**
2. Source: branch `main` (hoặc `master`), folder `/ (root)`
3. Truy cập: `https://tranphuclan.github.io/tranphuclan-resume/`

## License

Private / personal use.
