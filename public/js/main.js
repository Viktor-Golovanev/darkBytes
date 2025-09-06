const newsItem = document.querySelectorAll(".card-preview_news-item");
const previewImage = document.querySelector(".card_preview-img");
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

if (
  !previewImage ||
  !previewAuthorAvatar ||
  !previewAuthorName ||
  !previewAuthorCategory ||
  !previewNewsTitle ||
  !previewTitleLink
) {
  console.warn(
    "Один или несколько элементов превью не найдены. Превью не будет работать."
  );
} else {
  if (newsItem.length > 0) {
    const firstItem = newsItem[0];
    updatePreview(firstItem);
  }
  newsItem.forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
      const item = e.currentTarget;
      updatePreview(item);
    });
  });
}

function updatePreview(item) {
  if (
    !previewImage ||
    !previewAuthorAvatar ||
    !previewAuthorName ||
    !previewAuthorCategory ||
    !previewNewsTitle ||
    !previewTitleLink
  ) {
    return;
  }

  const imgUrl = item.getAttribute("data-img");
  previewImage.style.backgroundImage = imgUrl ? `url(${imgUrl})` : "none";

  const dataAuthor = {
    id: item.getAttribute("id"),
    lastName: item.getAttribute("data-author-lastName") || "",
    firstName: item.getAttribute("data-author-firstName") || "",
    category: item.getAttribute("data-author-authorCategory") || "",
    avatar: item.getAttribute("data-author-authorAvatar") || "",
  };

  previewAuthorName.textContent =
    `${dataAuthor.lastName} ${dataAuthor.firstName}`.trim();
  previewAuthorCategory.textContent = dataAuthor.category;
  previewAuthorAvatar.style.backgroundImage = dataAuthor.avatar
    ? `url(${dataAuthor.avatar})`
    : "none";

  const title = item.getAttribute("data-preview-news-title") || "Без названия";
  previewNewsTitle.textContent = title;
  previewTitleLink.href = dataAuthor.id ? `/newPage/${dataAuthor.id}` : "#";
}
