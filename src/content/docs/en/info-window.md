---
title: "Information Window"
description: "Explanation of the Information Window"
---
    
This is the main screen upon loading into IDS7 PACS.

![Information Window Image](/basics/info-window.png)

<br />

---

## 1. Top Side

### Menu Bar &emsp; ![Menu Bar](/basics/menubar.png)

### Toolbar

![Toolbar](/basics/toolbar.png)

- Most commonly used tools, based on users preferred role

> 💡 **Tip:** `Right-Click` the toolbar, and select *Customize Toolbar* to add, remove, or reorder your buttons!

### Patient Banner

![Patient Banner](/basics/patientbanner.png)

- Displays selected patient's name/DOB/sex/MRN, and other relevant alerts (i.e.~ allergies)

### Toolbar Alert

<img src="/basics/toolbar-alert.png" width="207" height="140">

<br />

- located top-right corner
- Warnings and other prompts to the users will be displayed - refer to the user guide within PACS via `[F1] hotkey` for more details

<br/>

---

<br/>

## 2. Left Side

### Worklist Groups
    
![Worklist Group](/basics/worklist-group.png)

- A place to organize your different worklist sets
- Worklists found in the **Complete Worklist Tree** *(see below)* can be drag-and-dropped into this region for future quick access
- Everyone has a `FAVORITES` Worklist Group by default

> 💡 **Tip:** Click the dropdown arrow beside `FAVORITES`, and then select *New Worklist Group* to generate a new empty group for use!

### Complete Worklist Tree

![Complete Worklist Tree](/basics/complete-worklist-tree.png)

Shows all available premade worklists, sorted by System, Role, and User levels

- **System Worklists:**
    
    <br />

    - Viewable by all users

    <br />

- **Role Worklists:**

    <br />

    - Users will only have access to worklists associated with their assigned role (i.e. Technologists will only see technologist worklists and Radiologists will only see Radiologist Worklists)

    <br />

- **User Worklists:**

    <br />

    - Visible to the logged-in user only
    - Can create your very own [Interesting Cases Folder](#interesting-cases-folder)

    <br />

- **History:**
    
    <br />

    - Allows you to quickly navigate your previously viewed cases
    - See [Notable Functionalities](#notable-functionalities) for more details

    <br />

- **Search Results:**

    <br />
    
    - Populates when a search is performed
    - Previous search results will still be available to view again until a new search is made
    - Please see [Patient Search](#patient-search) for more details

    <br />

- **Imported:**

    <br />

    - Only visible if images have been imported, i.e. from a CD/DVD

<br />

---

<br />

## 3. Center Screen

### Worklist Results

![Worklist Results](/basics/worklist-results.png)

- Displays all matching studies for the selected worklist

<br/>

### Patient History

![Patient History](/basics/patient-history.png)

- a.k.a.~ Patient Jacket
- All examinations for the selected patient will be displayed
- The `Items` column indicates the total image count for the study
- The `Series` column indicates the total number of "series" / thumbnails within the study

> 💡 **Tip:** If these columns are not present, `Right-Click` the headers, select `Add Column`, and then add these relevant columns to your panel!

- `Double-Clicking` on the on an exam will set it as the "current exam", marking it with a green arrow, and opening the study into the [Image Window](/en/image-window)

<br/>

### Image Overview

![Image Overview](/basics/image-overview.png)

- Will display the thumbnails of all series within the study
- `Double-Clicking` on the thumbnail will open the image in the [Quick Window](/en/quick-window)

![Image Overview Drag Feature](/basics/image-overview-drag.png)

- `Drag` a thumbnail produces a "mini-monitor" to quickly set which series to be viewed in the [Image Window](/en/image-window)

<br/>

---

<br/>

## 4. Right Side

### Request View

![Request View](/basics/request-view.png)

- Shows request, case history, and comments of selected study

### Report View

![Report View](/basics/report-view.png)

- Shows all reports for the selected examination
- Studies with multiple reports can be toggled  by the left and right arrows in the top-right-corner

---

<br/>

## 5. Notable Functionalities

### Patient Search
- Located in the top toolbar, two possible Search Buttons to press

##### Option 1: "Search Ttt" button &emsp; ![Search Ttt](/basics/searchTtt-button.png)
- A search bar appears where patient banner was
- Enter in `MRN`, `patient name`, `DOB`, or `accession number`, then hit `[Enter]` on the keyboard

![Search Bar](/basics/search-bar.png)

##### Option 2: "Search" button &emsp; ![Search](/basics/search-button.png)
- Search criteria window will open on the bottom right panel
- Can search by first criteria, or optionally fill the second criteria to focus your search
- Sectra PACS will do a **full database search** of the search parameters, so it is important to be *specific*

![Search Criteria](/basics/search-criteria.png)

<br />

### History

![History Back and Forward](/basics/history-fwd-back.png)

- The `Back | Forward` buttons on the toolbar allows navigation of recently visited patient jackets

- We can also access history via the left side-panel:

![History Left Panel](/basics/history-left-panel.png)

- The central panel will then list all recently visited studies:

![History Center Panel](/basics/history-center-panel.png)

- Contains the last 100 cases accessed by the user, sorted by most recent at the top
- Filter through the history list using the text boxes under the relevant columns

<br />

### Exam Comments

- Please see [Exam Comments](/en/exam-comments).

### Set Reading Physician / Non-Checked Cases

- Please see:

    <br />

    - [Set Reading Physician](/en/ultrasound-workflow#set-reading-physician)
    - [Non-Check Cases](/en/ultrasound-workflow#non-check-cases)

### Priority Status

- Please see:

    <br />

    - [Set Priorities](/en/ultrasound-workflow#5-set-priorities)

### Interesting Cases Folder

- Generate a `Static Worklist` by:

    <br />

    1. `Right-Click`ing the User Worklist folder
    2. Select `New Static Worklist`
    3. give the new static worklist a name

    4. From here, you may return to a different worklist / search a patient with an interesting case, then drag-and-drop the case into your static worklist