---
layout: "@/templates/BasePost.astro"
title: Câu lệnh điều kiện trong Javascript
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero esse non molestias eos excepturi.
pubDate: 2020-02-03T00:00:00Z
imgSrc: "/assets/images/image-post4.jpeg"
imgAlt: "Image post 4"
author: "haodev"
tags: ["javascript"]
---

Từ trước tới giờ mình tùy biến VSCode rất nhiều và cũng có nhiều người hỏi về các đoạn code tùy biến đó, người này hỏi, người kia hỏi cho nên mình viết luôn bài này tổng hợp code những cái tùy biến đấy cho các bạn luôn.

Trước khi mà các bạn có thể áp dụng được những đoạn code này vào thì các bạn cần xem video này trên kênh Youtube của mình để có thể hiểu cách làm nhé.

# Tùy biến active tab 4 góc

```css
:root {
  --size: 5px;
}
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active.tab-border-top
  > .tab-border-top-container {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: transparent;
}
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active.tab-border-top
  > .tab-border-top-container:before,
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active.tab-border-top
  > .tab-border-top-container:after {
  content: "";
  width: var(--size);
  height: var(--size);
  position: absolute;
  border: 2px solid;
  border-image-slice: 1;
}
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active.tab-border-top
  > .tab-border-top-container:before {
  top: 0;
  left: 0;
  border-right: 0;
  border-bottom: 0;
  border-image-source: linear-gradient(-45deg, #4dd78a, #20e3b2);
}
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active.tab-border-top
  > .tab-border-top-container:after {
  right: 0;
  bottom: 0;
  border-top: 0;
  border-left: 0;
  border-image-source: linear-gradient(-45deg, #6a5af9, #d66efd);
}
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active:before,
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active:after {
  content: "";
  width: var(--size);
  height: var(--size);
  position: absolute;
  border: 2px solid;
  border-image-slice: 1;
}
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active:before {
  left: 0;
  bottom: 0;
  border-top: 0;
  border-right: 0;
  border-image-source: linear-gradient(-45deg, #fc6c8f, #ffb86c);
}
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active:after {
  top: 0;
  right: 0;
  border-left: 0;
  border-bottom: 0;
  border-image-source: linear-gradient(-45deg, #098dff, #2cccff);
}
```

Các bạn thấy là code rất là dài đúng không ? Mình nghiên cứu và làm ra đấy. Một lưu ý là đôi khi các bạn áp dụng vào nó không ra kết quả giống hình minh họa vì khác theme thì class nó sẽ khác, ở video ở trên có chỉ chi tiết rồi, các bạn tự tìm ra class tương ứng và áp dụng code styles mình chia sẻ là sẽ được thôi nhen.

# Tùy biến active tab line gradient

Sử dụng đoạn code này thì khi active tab sẽ có một đường line ở trên cái tab khi mà nó active trong VSCode và nó sẽ chạy qua chạy lại với nhiều màu sắc cho các bạn

```css
.monaco-workbench
  .part.editor
  > .content
  .editor-group-container
  > .title
  .tabs-container
  > .tab.active.tab-border-top
  > .tab-border-top-container {
  background-size: 400% 400%;
  background-image: linear-gradient(
    -45deg,
    #fc6c8f,
    #ff2ced,
    #ffb86c,
    #2cccff,
    #20e3b2,
    #ffcc70,
    #c850c0,
    #4158d0
  );
  animation: gradient 5s ease alternate infinite;
  height: 3px;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```

# Tùy biến font chữ cho các class

Nhiều bạn hỏi mình sao làm cho chỗ này nó có font chữ khác thì mình cũng chia sẻ cho các bạn luôn. Đầu tiên các bạn cần tải font Dank Mono và cài đặt cho máy tính của các bạn tại đây

Sau khi tải và cài đặt xong cho máy tính rồi thì áp dụng đoạn code này vào là được

```css
.mtk5,
.mtk26 {
  -webkit-font-smoothing: auto;
  font-family: "Dank mono", monospace;
}
.mtk26 {
  font-style: italic;
}
```

Hãy lưu ý rằng hai class .mtk5 và .mtk26 là tương ứng cho theme mình đang xài(Evondev Dracula), nếu các bạn xài theme khác thì tự tìm class nhé vì mỗi theme thì class nó khác nhau. Tìm như thế nào thì coi video ở trên cùng. Mình đã chỉ tận răng rồi cho nên mấy vấn đề này mình không có hỗ trợ riêng đâu nhé.

Nếu làm theo vẫn chưa được thì có thể tham khảo thêm đoạn code dưới đây, đoạn này bỏ vào trong file settings.json của các bạn nhé. Trong đó Evondev Dracula Normal Contrast là tên theme của các bạn

```json
"[Evondev Dracula Normal Constrast]": {
  "textMateRules": [
    {
      "scope": [
        "entity.other.attribute-name.js",
        "entity.other.attribute-name.jsx",
        "entity.other.attribute-name.ts",
        "entity.other.attribute-name.tsx",
        "entity.other.attribute-name.html",
        "entity.other.attribute-name.pug"
      ],
      "settings": {
        "foreground": "#20e4b2"
      }
    }
  ]
}
```
