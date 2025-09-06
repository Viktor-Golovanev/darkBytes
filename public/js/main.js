const newsItem = document.querySelectorAll(".card-preview_news-item");
const previewImage = document.querySelector(".card_preview-img");
const previewItem = document.querySelector(".card-preview_news-item");
const previewAuthorAvatar = document.querySelector(
  ".card_preview-author-avatar"
);
const previewAuthorName = document.querySelector(".card_preview-author-name");
const previewAuthorCategory = document.querySelector(
  ".card_preview-author-category"
);
const previewNewsTitle = document.querySelector(".card-preview-news-title");
const previewTitleLink = document.querySelector(
  ".card-preview-news-title-link"
);

previewImage.style.backgroundImage = `url(${previewItem.getAttribute(
  "data-img"
)})`;

const dataAuthor = {
  lastName: previewItem.getAttribute("data-author-lastName"),
  firstName: previewItem.getAttribute("data-author-firstName"),
  category: previewItem.getAttribute("data-author-authorCategory"),
  avatar: previewItem.getAttribute("data-author-authorAvatar"),
};

previewAuthorName.textContent = `${dataAuthor.lastName} ${dataAuthor.firstName}`;
previewAuthorCategory.textContent = `${dataAuthor.category}`;
previewAuthorAvatar.style.backgroundImage = `url(${dataAuthor.avatar})`;

previewNewsTitle.textContent = previewItem.getAttribute(
  "data-preview-news-title"
);

previewTitleLink.href = `/news/${previewItem.getAttribute("id")}`;

newsItem.forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    const imgUrl = e.target.getAttribute("data-img");
    if (!previewImage) {
      console.error("error");
    }
    previewImage.style.backgroundImage = `url(${imgUrl})`;

    const dataAuthor = {
      id: e.target.getAttribute("id"),
      lastName: e.target.getAttribute("data-author-lastName"),
      firstName: e.target.getAttribute("data-author-firstName"),
      category: e.target.getAttribute("data-author-authorCategory"),
      avatar: e.target.getAttribute("data-author-authorAvatar"),
    };

    previewAuthorName.textContent = `${dataAuthor.lastName} ${dataAuthor.firstName}`;
    previewAuthorCategory.textContent = `${dataAuthor.category}`;
    previewAuthorAvatar.style.backgroundImage = `url(${dataAuthor.avatar})`;

    const title = e.target.getAttribute("data-preview-news-title");
    previewTitleLink.href = `/news/${dataAuthor.id}`;
    previewNewsTitle.textContent = title;
  });
});
