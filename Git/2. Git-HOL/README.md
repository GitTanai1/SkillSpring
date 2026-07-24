# Git Hands-On Lab 2: Ignoring Files with .gitignore

## Objectives
- Understand the role and purpose of `.gitignore`.
- Configure Git to ignore unwanted log files (e.g., `.log` files) and log directories.
- Verify status checking behavior for ignored files.

---

## Step-by-Step Implementation

### Step 1: Create Log Files and Directory
To simulate a real-world scenario where application log files are generated automatically in the working directory:

1. **Create a log file in the project root:**
   ```bash
   echo "System startup info..." > app_debug.log
   ```

2. **Create a dedicated log folder and file inside it:**
   ```bash
   mkdir log
   echo "NullPointerException at line 42" > log/error.log
   ```

---

### Step 2: Inspect Untracked Status
Check if Git detects the new log files and folder before configuration:
```bash
git status
```
*Expected Output snippet:*
```text
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        app_debug.log
        log/
```
At this stage, Git wants to track these diagnostic files, which we do not want to save in our repository history.

---

### Step 3: Configure `.gitignore`
Create a `.gitignore` file in the root of the project to instruct Git to ignore log files and folders.

1. **Create `.gitignore`:**
   Add the following patterns to the `.gitignore` file:
   ```text
   # Ignore all log files
   *.log

   # Ignore the log folder
   log/
   ```

---

### Step 4: Verify Ignored Status
Run the status command again to check if Git successfully ignores the logs:
```bash
git status
```
*Expected Output snippet:*
```text
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
```
*Observation:* Notice that `app_debug.log` and the `log/` folder are no longer listed! Only `.gitignore` is identified as an untracked file.

---

### Step 5: Commit `.gitignore`
Stage and commit the ignore configuration to the repository:
```bash
git add .gitignore
git commit -m "Add .gitignore to exclude logs from version control"
```

Verify the status is clean:
```bash
git status
```
*Expected Output:*
```text
On branch master
nothing to commit, working tree clean
```
Now, even if new `.log` files or folder contents are created under `log/`, Git will completely ignore them.
