export function ProfilePreview(previewInfo) {
  const preview = document.createElement("aside");

  if (previewInfo.available && previewInfo.profileInfo) {
    const picture = document.createElement("img");
    picture.src = previewInfo.profileInfo.pictureSrc;
    picture.alt = "";
    picture.dataset.testid = "profilePicture";

    const name = document.createElement("p");
    name.textContent = previewInfo.profileInfo.name;
    name.dataset.testid = "profileName";

    preview.appendChild(picture);
    preview.appendChild(name);

    if (!previewInfo.shortForm) {
      const bio = document.createElement("p");
      bio.textContent = previewInfo.profileInfo.bio;
      bio.dataset.testid = "profileBio";
      preview.appendChild(bio);
    }

    return preview;
  } else {
    const message = document.createElement("p");
    message.textContent = "Profile preview unavailable.";
    message.dataset.testid = "profileUnavailable";
    preview.appendChild(message);
    return preview;
  }
}
