
## BTTH03: JS nền tảng, DOM & Sự kiện

**Đối tượng:** Sinh viên chưa học lý thuyết JavaScript

---

## 1. MỤC TIÊU HỌC TẬP

Sau buổi lab, sinh viên có thể:

- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.
- Viết được các đoạn JS đơn giản với:
  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),
  - Cú pháp lệnh, toán tử đơn giản,
  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,
  - Hàm (function) có tham số và giá trị trả về.
- Thao tác được với DOM:
  - Lấy phần tử bằng `document.getElementById`,
  - Thay đổi nội dung văn bản, kiểu dáng (style),
  - Lắng nghe và xử lý một số sự kiện cơ bản: `click`, `input`.
- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức nhận diện, chưa cần sử dụng thành thạo).

---

## 2. CẤU TRÚC THỜI GIAN BUỔI LAB
- 03 tiết thực hành.

---

## 3. HOẠT ĐỘNG 1 (45’): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN

### 3.1. Chuẩn bị file HTML & JS

Tạo file `lab-js-basic.html`:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Lab JS Cơ bản</title>
</head>
<body>
  <h1>Khám phá JavaScript</h1>
  <p id="welcome">Chưa có JavaScript...</p>
  <button id="runBtn">Nhấn để chạy JS</button>

  <script src="main.js"></script>
</body>
</html>
```

Tạo file `main.js`:

```js
console.log("Hello from JavaScript!");
```


---

### 3.2. Nhiệm vụ cho sinh viên

#### Bước 1: Mở file \& Quan sát bằng Console

1. Mở `lab-js-basic.html` trong trình duyệt (Chrome/Edge/…).
2. Mở DevTools → tab **Console**.
3. Quan sát thông báo xuất hiện.

> Câu hỏi:
> - Em thấy dòng thông báo nào trong console?
> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?

> Trả lời:
> - Em thấy dòng "Hello from JavaScript!"
> - Điều này cho biết:
> + JavaScript đã được trình duyệt chạy thành công.
> + Mã JavaScript đang hoạt động khi trang web được tải.
> + Console dùng để hiển thị thông báo và giúp lập trình viên kiểm tra lỗi hoặc theo dõi chương trình.

---

#### Bước 2:  “JavaScript là gì?” (Tra cứu nhanh)

Sử dụng 1–2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, …), tóm tắt:

> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)
> Cả hai:
> - Trình duyệt (Client-side): chạy trực tiếp trên trình duyệt để xử lý tương tác của trang web
> - Server: có thể chạy trên server bằng môi trường như Node.js
> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?
>
> - HTML: Tạo cấu trúc và nội dung của trang web (tiêu đề, đoạn văn, hình ảnh, bảng, form…).
> - CSS: Dùng để thiết kế giao diện và định dạng cho trang web (màu sắc, font chữ, bố cục, kích thước…).
> - JavaScript: Tạo tính năng và sự tương tác động cho trang web (xử lý sự kiện, kiểm tra form, thay đổi nội dung trang, hiển thị thông báo…).

---

#### Bước 3: Thử nghiệm biến \& kiểu dữ liệu trong Console

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

```js
let age = 20;
const name = "An";
let isStudent = true;

typeof age;
typeof name;
typeof isStudent;

1 + 2 * 3;
"Hello " + "world";
```

> Câu hỏi:
> - Kết quả `typeof age` là gì? 'number'
> - Kết quả `typeof name` là gì? 'string'
> - Kết quả `typeof isStudent` là gì? 'boolean'
> - Em hãy tự mô tả ngắn gọn:
>   - `number` là: Kiểu dữ liệu dùng để lưu các giá trị số (ví dụ: 10, 20, 3.14)
>   - `string` là: Kiểu dữ liệu dùng để lưu chuỗi ký tự / văn bản, đặt trong dấu " " hoặc ' '
>   - `boolean` là: Kiểu dữ liệu chỉ có hai giá trị: true hoặc false, dùng để biểu thị đúng hoặc sai

---

#### Bước 4: Viết đoạn script tính tuổi

Mở file `main.js`, viết thêm:

```js
let name = "An";
let yearOfBirth = 2005;
let currentYear = 2026;
let age = currentYear - yearOfBirth;

console.log("Xin chào, mình là " + name + ", năm nay mình " + age + " tuổi.");
```

Sau đó:

1. Đổi giá trị `name`, `yearOfBirth` thành thông tin của chính em.
2. Reload trang \& quan sát console.

> Câu hỏi:
> - Dòng log hiển thị gì sau khi em sửa thông tin?
> - Nếu em quên dấu `;` hoặc quên dấu `+`, điều gì xảy ra? Trình duyệt báo lỗi thế nào?

> Trả lời:
> - Dòng log hiển thị: "Xin chào, mình là Ngân, năm nay mình 22 tuổi."
> - Nếu quên dấu `;`: Trang vẫn chạy bình thường trong hầu hết trường hợp.
> - Nếu quên dấu `+`: Trình duyệt sẽ báo lỗi cú pháp (Syntax Error) trong Console.
---

#### Bước 5: Phản tư nhanh (Reflection)

> - Điều thú vị nhất em vừa khám phá được về console là gì?
> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn, đọc lỗi, tìm Google, …)?

> - Điều thú vị nhất là Console cho phép chạy và kiểm tra JavaScript trực tiếp, có thể gõ từng dòng lệnh và xem kết quả ngay lập tức mà không cần sửa file rồi tải lại trang. Điều này giúp kiểm tra code và tìm lỗi rất nhanh.
> - Em gặp lỗi thiếu dấu + khi nối chuỗi trong console.log, khiến trình duyệt báo lỗi SyntaxError trong Console. Em đã đọc thông báo lỗi trong Console và tự sửa lại code bằng cách thêm dấu + đúng vị trí, sau đó reload trang để kiểm tra lại.

---

## 4. HOẠT ĐỘNG 2 (40’): CẤU TRÚC ĐIỀU KHIỂN \& HÀM

### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)

Ví dụ đoạn mã:

```js
// TODO: Đổi giá trị score và quan sát kết quả
let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử
if (score >= 8) {
  console.log("Giỏi");
} else if (score >= 6.5) {
  console.log("Khá");
} else if (score >= 5) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// TODO: Viết hàm tính điểm trung bình 3 môn
function tinhDiemTrungBinh(m1, m2, m3) {
  let avg = (m1 + m2 + m3) / 3;
  return avg;
}

// Gợi ý dùng thử hàm trong console:
// tinhDiemTrungBinh(8, 7, 9);
```


---

### 4.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đoán trước – chạy sau

> a) Nếu `score = 9`, em dự đoán console sẽ in: Giỏi
> b) Nếu `score = 6`, em dự đoán console sẽ in: Trung bình

Sau đó:

1. Thay `score = 9`, reload trang hoặc chạy file và kiểm tra console.
2. Thay `score = 6`, kiểm tra lại.

> So sánh dự đoán và kết quả thực tế:
> - Trường hợp `score = 9`: Dự đoán vs Thực tế: Giỏi (đúng)
> - Trường hợp `score = 6`: Dự đoán vs Thực tế: Trung bình (đúng)

---

#### Bước 2: Mô tả lại if/else bằng lời

> - Khi nào chương trình in `"Giỏi"`? Khi điểm >= 8
> - Khi nào chương trình in `"Yếu"`? Khi điểm < 5
> - Em hãy mô tả cấu trúc `if/else` bằng lời của em (có thể ví von “ngã rẽ” trong đời sống):

> Cấu trúc if/else giống như các ngã rẽ để đưa ra quyết định. Chương trình sẽ kiểm tra từng điều kiện từ trên xuống. Nếu điều kiện nào đúng thì thực hiện lệnh ở đó và không kiểm tra các điều kiện phía sau nữa.

---

#### Bước 3: Làm việc với hàm

1. Mở Console, gọi hàm:
```js
tinhDiemTrungBinh(8, 7, 9);
```

> Em ghi lại giá trị hàm trả về: 8

2. Viết thêm hàm `xepLoai(avg)` trong file JS:
```js
function xepLoai(avg) {
  if (avg >= 8) {
    return "Giỏi";
  } else if (avg >= 6.5) {
    return "Khá";
  } else if (avg >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
}
```

3. Gọi thử trong console:
```js
let avg = tinhDiemTrungBinh(8, 7, 9);
let loai = xepLoai(avg);
console.log("Điểm TB:", avg, " - Xếp loại:", loai);
```

> Câu hỏi:
> - Một hàm gồm những phần chính nào?
>   - Tên hàm: tinhDiemTrungBinh, xepLoai
>   - Tham số (parameters): Các biến nhận dữ liệu đầu vào của hàm, ví dụ: m1, m2, m3, avg
>   - Thân hàm (body): Phần chứa các câu lệnh xử lý bên trong { }
>   - Giá trị trả về (return): Kết quả mà hàm trả lại sau khi thực hiện, ví dụ: return avg;
> - Ưu điểm của việc dùng hàm thay vì lặp lại cùng một đoạn code nhiều lần là gì? Tránh lặp lại code nhiều lần, Code dễ đọc và dễ hiểu hơn, Dễ sửa và bảo trì, Có thể tái sử dụng nhiều lần trong chương trình

---

#### Bước 4: Mở rộng nhỏ (tuỳ chọn)

Viết hàm `kiemTraTuoi(age)`:

```js
function kiemTraTuoi(age) {
  if (age >= 18) {
    console.log("Đủ 18 tuổi");
  } else {
    console.log("Chưa đủ 18 tuổi");
  }
}
```

Gọi thử: `kiemTraTuoi(16);`, `kiemTraTuoi(20);`.

---

#### Bước 5: Phản tư

> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?
> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ, tra Google, …)?

> - Phần if / else if / else vì phải hiểu thứ tự kiểm tra điều kiện và biết khi nào chương trình dừng.
> - Em chạy thử nhiều giá trị khác nhau trong Console, đọc kết quả để hiểu cách chương trình hoạt động, đồng thời xem lại ví dụ và tự sửa code khi bị lỗi.

---

## 5. HOẠT ĐỘNG 3 (40’): THAO TÁC DOM \& SỰ KIỆN

### 5.1. Chuẩn bị HTML

Thêm vào trang (hoặc tạo file mới):

```html
<section>
  <h2>DOM & Sự kiện</h2>
  <p id="status">Chưa có tương tác...</p>

  <button id="btnHello">Chào</button>
  <button id="btnRed">Đổi màu nền thành đỏ</button>

  <div style="margin-top: 20px;">
    <label>Nhập tên: </label>
    <input id="nameInput" type="text" />
    <p id="greeting"></p>
  </div>
</section>

<script src="dom.js"></script>
```

Tạo file `dom.js`:

```js
const statusEl = document.getElementById("status");
const btnHello = document.getElementById("btnHello");

btnHello.addEventListener("click", function () {
  statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";
});
```


---

### 5.2. Nhiệm vụ cho sinh viên

#### Bước 1: Đọc \& giải thích

> Câu hỏi:
> - `document.getElementById("status")` đang làm gì?
> - Sự kiện `"click"` xảy ra khi nào?
> - Trong đoạn code trên, khi nhấn nút `btnHello`, điều gì thay đổi trên trang?

> Trả lời:
> - `document.getElementById("status")`: Lệnh này tìm và lấy phần tử HTML có id = "status" trong trang web để JavaScript có thể đọc hoặc thay đổi nội dung của nó.
> - Sự kiện click xảy ra khi người dùng nhấn chuột vào một phần tử, ví dụ như nút bấm (button).
> - Nội dung của đoạn <p id="status"> sẽ được thay đổi thành:
Xin chào! Đây là nội dung được thay đổi bằng JavaScript.
---

#### Bước 2: Thử nghiệm nút đổi màu nền

Hoàn thiện code:

```js
const btnRed = document.getElementById("btnRed");

btnRed.addEventListener("click", function () {
  // TODO: Đổi màu nền trang thành đỏ
  document.body.style.backgroundColor = "red";
});
```

> Câu hỏi:
> - Em có thể đổi sang màu khác (vd. `lightblue`) không? Hãy thử.
> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với `document.body.style`.

> Trả lời:
> - Có
> - Ví dụ đổi màu chữ toàn trang:
  document.body.style.color = "white";

---

#### Bước 3: Xử lý sự kiện input – gõ tên, hiện lời chào

Hoàn thiện code:

```js
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const value = nameInput.value;
  greeting.textContent = "Xin chào, " + value + "!";
});
```

> Câu hỏi:
> - Sự kiện `"input"` khác gì so với `"click"`?
> - click: xảy ra khi người dùng nhấn chuột vào phần tử.
> - input: xảy ra khi người dùng gõ, xoá hoặc thay đổi nội dung trong ô input.

> - Khi em xoá hết nội dung ô input, dòng `greeting` hiển thị gì?
> Sẽ hiển thị:
> Xin chào, !
> vì biến value lúc này rỗng.

---

#### Bước 4: Liên hệ khái niệm DOM

> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng một **cây các đối tượng** mà JavaScript có thể truy cập và thay đổi.
>
> Em hãy:
> - Tự mô tả DOM bằng lời của em:
>   DOM là cách trình duyệt biểu diễn trang HTML dưới dạng các đối tượng (giống một cây) để JavaScript có thể truy cập, thay đổi nội dung, kiểu dáng hoặc hành vi của các phần tử trên trang web
> - Nêu 1 ví dụ “thao tác DOM” trong bài (ghi lại 1 dòng lệnh cụ thể).
statusEl.textContent = "Xin chào! Đây là nội dung được thay đổi bằng JavaScript.";

---

#### Bước 5: Ảnh kết quả

Hãy chụp các ảnh màn hình:

1. Khi vừa tải trang (chưa tương tác).
![alt text](image.png)
2. Sau khi nhấn “Chào”.
![alt text](image-1.png)
3. Sau khi đổi nền sang màu đỏ.
![alt text](image-2.png)
4. Khi gõ tên và nhìn thấy lời chào xuất hiện.
![alt text](image-3.png)

*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)*

---

## 6. KẾT THÚC (15’): GIỚI THIỆU JQUERY \& PHẢN TƯ

### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)

Ví dụ:

```js
// JS thuần
document.getElementById("btnHello").addEventListener("click", function () {
  alert("Hello from JS!");
});

// jQuery (giả sử đã import jQuery)
$("#btnHello").on("click", function () {
  alert("Hello from jQuery!");
});
```

> Câu hỏi:
> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?
> - Điểm khác nhau về cú pháp là gì (`document.getElementById` vs `$("#id")`, `addEventListener` vs `.on`)?
> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
>   1. ................................................................
>   2. ................................................................

> Trả lời:
> - Điểm giống nhau về chức năng:
Cả hai đoạn code đều gắn sự kiện click cho nút btnHello.
Khi người dùng nhấn vào nút, chương trình sẽ hiển thị thông báo alert trên màn hình.
> - Điểm khác nhau về cú pháp:
>  1. Cách chọn phần tử:
>   JavaScript thuần: Tìm phần tử HTML có id = btnHello.
>   jQuery: Cú pháp ngắn gọn hơn, dấu # đại diện cho id.
>  2. Cách gắn sự kiện:
>   JavaScript thuần:
> addEventListener("click", function(){})
>   jQuery:
> .on("click", function(){})
>  .on() là cách jQuery dùng để xử lý sự kiện, tương tự addEventListener.
> - Em hãy tra cứu nhanh “What is jQuery used for?” và ghi 2 ý chính:
> 1. Đơn giản hóa việc thao tác DOM (chọn phần tử, thay đổi nội dung, CSS, thêm/xóa phần tử).
> 2. Dễ dàng xử lý sự kiện và tạo hiệu ứng/animation trên trang web với ít code hơn JavaScript thuần.

---

### 6.2. Tự đánh giá \& định hướng

> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?
> Em tò mò nhất về DOM và cách JavaScript thay đổi nội dung trang web khi người dùng tương tác.
> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi theme, pop-up, mini game, …)?
> Em muốn thử làm nút đổi theme sáng/tối (dark mode) và bộ đếm số lần nhấn nút.
> 3. Em đánh giá mức độ hiểu của mình về:
>    - Biến \& kiểu dữ liệu: Tạm ổn
>    - If/else \& hàm: Tạm ổn
>    - DOM \& sự kiện: Tạm ổn

---

## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)

- Có thể cho SV làm theo cặp/nhóm 2–3 để hỗ trợ nhau thử nghiệm, đọc lỗi, tra cứu.
- Tùy thời lượng thực tế, có thể:
    - Giảm bớt phần mở rộng (hàm `kiemTraTuoi`, tuỳ biến thêm hiệu ứng).
    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click, v.v.).
- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

```

---```

