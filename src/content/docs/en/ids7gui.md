---
title: "IDS7 GUI"
description: "Explanation of GUI interfaces"
---

The IDS7 Graphical User Interface (GUI) consists of 4 main windows that technologists will navigate as they retrieve patient data, view images, and change image layouts.
1. [Information Window](#information-window)
    
    <br />

    - [Top Side](#menu-bar)
    - [Left Side](#worklist-groups)
    - [Center Screen](#worklist-results)
    - [Right Side](#request-view)
    - [Notable Functionalities](#information-window-notable-functionalities)

<br />

2. [Quick Window](#quick-window)

3. [Matrix Window](#matrix-window)

4. [Image Window](#image-window)

    <br />

    - [Hotkeys and Keystroke](/en/hotkeys)

<br /><br /><br /><br />

---

### **Information Window**

This is the main screen upon loading into IDS7 PACS.

![Information Window Image](/basics/info-window.png)

<br /><br />

#### Sections Breakdown:
---

*Top-side*:
- ##### Menu Bar:

    ![Menu Bar](/basics/menubar.png)
<br /><br /><br />

- ##### Toolbar:
    - Most commonly used tools, based on users preferred role

    ![Toolbar](/basics/toolbar.png)
<br /><br /><br />

- ##### Patient Banner:
    - Displays selected patient's name/DOB/sex/MRN, and other relevant alerts (i.e.~ allergies)

    ![Patient Banner](/basics/patientbanner.png)
<br /><br /><br />

- ##### Toolbar Alert:
    - located top-right corner
    - Warnings and other prompts to the users will be displayed - refer to the user guide within PACS via `[F1] hotkey` for more details

<img src="/basics/toolbar-alert.png" width="207" height="140">

<br/>

---

<br/>

*Left-side*:
- ##### Worklist Groups:
    - Different often-used worklists can be dragged and dropped into this region

    > 💡 **Tip:** Customize your own worklist groupings, then use the dropdown arrow to change from favorites to a different group!

    ![Worklist Group](/basics/worklist-group.png)

<br/>

- ##### Complete Worklist Tree:
    - Shows all available premade worklists, sorted by System, Role, and User levels
    - **History**
        : tab allows you to quickly navigate your previously viewed cases
    - **Search Results**
        : for any previous searches you've made, the results will still be available to view again until a new search is made

    ![Complete Worklist Tree](/basics/complete-worklist-tree.png)

<br/>

---

<br/>

*Center-screen*:
- ##### Worklist Results:
    - Displays all matching studies for the selected worklist

    ![Worklist Results](/basics/worklist-results.png)

<br/>

- ##### Patient History:
    - a.k.a.~ Patient Jacket
    - All examinations for the selected patient will be displayed
    - `Double-Clicking` on the on an exam will set it as the "current exam", marking it with a green arrow, and opening the study into the [Image Window](#image-window)

    ![Patient History](/basics/patient-history.png)

<br/>

- ##### Image Overview:
    - Will display the thumbnails of all series within the study
    - `Double-Clicking` on the thumbnail will open the image in the [Quick Window](#quick-window)

    ![Image Overview](/basics/image-overview.png)
    <br/><br/>
    - `Drag` the thumbnail to produce a "mini-monitor" to quickly set which series to be viewed in the [Image Window](#image-window)

    ![Image Overview Drag Feature](/basics/image-overview-drag.png)

<br/>

---

<br/>

*Right-Side*:
- ##### Request View:
    - Shows request, case history, and comments of selected study

    ![Request View](/basics/request-view.png)

<br />

- ##### Report View:
    - Shows all reports for the selected examination
    - If multiple reports are present for that study, you may toggle between reports using the left | right arrow buttons

    ![Report View](/basics/report-view.png)

<br/>

---

<br/>

#### Information Window Notable Functionalities:
- ##### Patient Search:
    - Located in the top toolbar
    - Search criteria window will open on the bottom right panel
    - Can search by first criteria, or optionally fill the second criteria to focus your search
    - Sectra PACS will do a **full database search** of the search parameters, so it is important to **specific** inquiries

    ![Search Criteria](/basics/search-criteria.png)

<br />

- ##### History:
    ![History Back and Forward](/basics/history-fwd-back.png)
    <br /><br />
    - Allows navigation of recently visited patient jackets utilizing the "Back" and "Forward" buttons on the toolbar
    <br /><br />
    - We can also access history via the left side-panel:
    <br /><br />
    ![History Left Panel](/basics/history-left-panel.png)
    <br /><br />
    - The central panel will then list all recently visited studies
    - Filter through the history list using the text boxes under the relevant column criterias
    <br /><br />
    ![History Center Panel](/basics/history-center-panel.png)

<br /><br /><br /><br />

---

### **Quick Window**

This window is accessed when you `Double-Click` on thumbnails
- Allows you to instantly view images within a series
- Has similar functionalities as the [Image Window](#image-window) accessed via `Right-Clicking` on the image for image manipulation tools
- Does not allow you to visualize side by side studies as you would in the Image Window.

![Quick Window](/basics/quick-window.png)

- Use the "Monitor" buttons to toggle between series/screens

![Quick Toolbar](/basics/quick-toolbar.png)

<br /><br /><br /><br />

---

### **Matrix Window**
&emsp; ![Matrix Button](/basics/matrix-button-icon.png)

Launch Matrix Window via the button found on the toolbar.
- Used to prepare image viewing layouts, and as an overview to visualize current and previous studies
- Techs will use this to verify the correct series

![Matrix Window](/basics/matrix-window.png)

<br /><br /><br /><br />

---

### **Image Window**
&emsp; ![Image Button](/basics/image-button-icon.png)

- Used to review images in large sets based on layout configurations
- Has many tools to manipulate images
- Image overlay shows in greater depth about patient and technical information

![Image Window](/basics/image-window.png)

> 💡 **Tip:** `Double click` an image from a multi-image layout will expand the image

- Quickly change the displayed series by selecting the series name from the dropdown via a small arrow-down button

![Change Series Dropdown 1](/basics/image-changeseries-1.png)
&emsp;&emsp;&emsp;
![Change Series Dropdown 2](/basics/image-changeseries-2.png)

- Alternatively, you can open the patient jacket via the "Thumbnail" icon, then switch series from here

- For specific functionality and tools, refer to [Hotkeys and Keystroke](/en/hotkeys)