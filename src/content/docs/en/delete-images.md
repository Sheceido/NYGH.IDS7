---
title: "Deleting Images"
description: "Explanation of the steps to delete images in a series"
---

Deleting images from an ultrasound series is possible using Sectra’s `Stack Tool`, accessed via the Thumbnail Panel

> 💡 **Tip:** the Thumbnail Panel is most easily found in the [Matrix](/en/matrix-window) Window, but both the [Information](/en/info-window) and [Image](/en/image-window) Windows have this region as well!

## Instructions

> ⚠️ **Warning:** Make sure you are deleting the intended series! If you accidently chose the wrong one and went through the deletion steps, you must contact PACS to revert these actions!

### A) Delete a whole series

1. In the Matrix Window, `Right-Click` the series with the unwanted images, and select `Reject Series`:

    ![Reject Series](/basics/thumbnail-delete-5.png)

2. Give a reason for rejection:

    ![Reject Series Reason](/basics/thumbnail-delete-6.png)

<br />

### B) Delete images in a series

1. Write down / remember the image numbers within the series you want to deleted

2. `Right-Click` the series containing unwanted images then choose `Stack Tool...`

    ![Open Stack Tool](/basics/thumbnail-delete-1.png)

<br />

3. While holding down `Ctrl`, `Left-Click` the unwanted images

![Stack Tool Screen](/basics/thumbnail-delete-2.png)

4. Click `Invert Selection` on the bottom-left (so that now only the ***correct*** images are selected)

<br />

5. `Drag` all correct images into the empty space beside `Original Series`:

    ![Drag correct images to empty space](/basics/thumbnail-delete-3.png)

    <br />

    - A new series is created with all the correct images:

    ![new series generated](/basics/thumbnail-delete-4.png)

<br /><br />

6. Click `Save` on the bottom-right of the Stack Tool Screen, then close out of it.

> 📝 **Note:** It may take a few seconds for the new series to populate into the Thumbnail panel - you may press the `[F5]` key on the keyboard to manually refresh the window if the series hasn't appeared.

<br />

7. In the Matrix Window, `Right-Click` the series with the unwanted images, and select `Reject Series`:

![Reject Series](/basics/thumbnail-delete-5.png)

- Give a reason for rejection:

![Reject Series Reason](/basics/thumbnail-delete-6.png)

The series should be deleted, leaving you with the stack containing all the correct images!