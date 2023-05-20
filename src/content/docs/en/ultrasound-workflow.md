---
title: "Ultrasound Workflow"
description: "Step-by-step workflow guide for the Ultrasound modality"
---

---
If you have not familiarized yourself with the IDS7 GUI, please have a look at them before continuing:

- [Information Window](/en/info-window) 
- [Quick Window](/en/quick-window)
- [Matrix Window](/en/matrix-window)
- [Image Window](/en/image-window)


## 1. Find Patient
In the [Information Window](/en/info-window) by...

- **Modality Worklists** on the left side panel:

    ![Worklist Panel](/basics/info-worklist-panel.png)

    **OR**

- **SearchTtt**:

    ![Search Bar](/basics/search-bar.png)

    **OR**

- **Search**:

    ![Search Criteria](/basics/search-criteria.png)

<br />

---

<br />

## 2. Enter Image Viewing

For viewing previous or current images you've taken, adding annotations or distance measurements, there are two options:

### Launch [Quick Window](/en/quick-window)

- Select a study to be viewed in the worklist, then `Double-Click` the thumbnails at the bottom panel
- Quick Window will allow you to look through the corresponding series thumbnail you opened

> 💡 **Tip:** Use the Quick Window for when you need to briefly screen through a series

### Launch [Image Window](/en/image-window)

- `Double-Click` the study you want to view in the Patient History panel

- Access the patient jacket by clicking the "thumbnail" icon on the toolbar at the top:

    ![Thumbnail Icon](/basics/thumbnail-icon.png)

> 💡 **Tip:** Use the Image Window for looking at past history more thoroughly, especially for comparing side-by-side studies

<br />

## 3. Complete and Verify

- Scan in any relevant paperwork, then complete the study in Cerner, causing IDS7 to automatically set the study to `[COMPLETE]` status as well
- Make sure you have all the correct images and series
- Set study now to `[VERIFIED]` status by:

    A) `Right-Click` the study, hover over `[Status]`, then select `[VERIFIED]`

    ![Verify Study Option 1](/basics/verify-study-1.png)

    <br />

    **OR**

    B) Making sure that the Green Arrow is pointing to the exam you want to verify, click the `[VERIFIED]` button on the toolbar (if available)

    ![Verify Study Option 2](/basics/verify-study-2.png)
    

    > 📝 **Note:** Once a study is verified, it becomes available for the Radiologist to report!

<br />

## 4. Assigning Cases

Verified studies now need to be assigned:

### Set Reading Physician

![Set Reading Physician](/workflow/us/set-reading-physician-1.png)

- `Right-Click` the study, hover over `[Reading Physician]`, then click:

    `[Set Reading Physician...]`

- Choose the Radiologist User Group, then set the Radiologist name.

    ![Set Reading Physician Window](/workflow/us/set-reading-physician-2.png)

> 💡 **Tip:** Add the column `Reading Physician` to the Worklist and/or Patient History panels to see the name of the physician assigned to each case!
<br /><br />
![Set Reading Physician Window](/workflow/us/set-reading-physician-3.png)

<br />

### Non-Check Cases

- If the study is for an after-hours Radiologist:

    <br />

    - Make sure the Green Arrow is pointing to the study you want to assign a "Non-Check" status to, if not `Right-Click` the study and:

        ![Set Current Exam](/basics/set-current-exam.png)

    - On the toolbar at the top, click the `[NonCheck]` button:

        ![Non-Check Button](/workflow/us/noncheck-button.png)

    <br />

    -`"Unassigned Verified US Cases"` Worklist should now contain this study

<br />

### On-Hold

- Radiologists, technologists, and clerical staff can keep track of studies that need to be placed on hold
- Any studies placed "on hold" status will be placed in the `"On Hold / Hold"` Worklist
- To put a study on hold status:

    <br />

    1. Make sure the study has the green arrow pointing to it, if not `Right-Click` the study and:

        ![Set Current Exam](/basics/set-current-exam.png)

    2. Click the `[Hold]` button on the toolbar:

        ![Hold button icon](/workflow/us/hold-button-icon.png)
    
    3. Give a reason for being on hold:

        ![Hold reason](/workflow/us/hold-function-1.png)

    4. Check that the status is applied by going into the `Hold` Worklist, or add the `Hold` column to see the status tag:

        ![Hold reason column](/workflow/us/hold-function-2.png)
    
<br />

## 5. Set Priorities

By default, IDS7 priorities will mirror what is set in Cerner, and does not need to be changed within the PACS system. Priorities are depicted as colored circles:

![Priority Statuses](/workflow/us/priority-status.png)

There exists a separate priority queue for cases that is an ***urgent, positive finding***, and requires attention by the Radiologist. To set a `STAT` status on the study:

1. Make sure the study has the green arrow pointing to it, if not `Right-Click` the study and:

    ![Set Current Exam](/basics/set-current-exam.png)

2. Click the `STAT` button on the toolbar:

    ![STAT button](/workflow/us/stat-button-icon.png)

The `STAT` status will now be applied to the study, bumping it to the top of the Radiologist's worklist.