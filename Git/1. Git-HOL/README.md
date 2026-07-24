# Git Hands-On Lab 1: Git Basics & Configuration

## Objectives
- Familiarize with Git commands: `git init`, `git status`, `git add`, `git commit`, `git push`, and `git pull`.
- Configure Git user settings (user name and email).
- Integrate Notepad++ as the default Git editor.
- Track and commit files in a local Git repository.
- Connect a local repository to a remote repository (GitLab/GitHub) and synchronize changes.

---

## Step-by-Step Implementation

### Step 1: Git Client Installation & User Configuration

1. **Verify Git Installation:**
   Open Git Bash and check the installed version:
   ```bash
   git --version
   ```
   *Expected Output:*
   ```text
   git version 2.40.1.windows.1
   ```

2. **Configure User Details:**
   Set your global user name and email (do not use cognizant credentials for public GitHub accounts):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **Verify Configuration:**
   List all global configurations to confirm settings:
   ```bash
   git config --list
   ```
   *Expected Output snippet:*
   ```text
   user.name=Your Name
   user.email=your.email@example.com
   ```

---

### Step 2: Integrate Notepad++ as the Default Git Editor

1. **Verify Notepad++ execution from Git Bash:**
   Check if Git Bash can recognize the `notepad++` command:
   ```bash
   notepad++
   ```
   *Note:* If Notepad++ does not open, configure its location in the Windows system environment PATH variable (e.g., `C:\Program Files\Notepad++`).

2. **Configure Editor in Git Settings:**
   Configure Git to use Notepad++ globally for writing commit messages:
   ```bash
   git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
   ```

3. **Verify Default Editor Configuration:**
   Open the global Git configuration file in Notepad++:
   ```bash
   git config --global -e
   ```
   This will open Notepad++ showcasing the configuration fields.

---

### Step 3: Initialize Repository and Commit Files

1. **Create and Initialize the Project Folder:**
   ```bash
   mkdir GitDemo
   cd GitDemo
   git init
   ```
   *Expected Output:*
   ```text
   Initialized empty Git repository in D:/Cognizant_DS_Angular/Git/1. Git-HOL/GitDemo/.git/
   ```

2. **Verify Hidden Git files:**
   ```bash
   ls -a
   ```
   *Expected Output:*
   ```text
   .  ..  .git
   ```

3. **Create `welcome.txt`:**
   Add sample content to the file:
   ```bash
   echo "Welcome to Git Hands-on Lab!" > welcome.txt
   ```

4. **Verify File and Content:**
   ```bash
   ls -l
   cat welcome.txt
   ```

5. **Check Git Status (Untracked state):**
   ```bash
   git status
   ```
   *Expected Output snippet:*
   ```text
   Untracked files:
     (use "git add <file>..." to include in what will be committed)
           welcome.txt
   ```

6. **Stage the File:**
   ```bash
   git add welcome.txt
   ```

7. **Commit the Changes:**
   Open Notepad++ to enter a commit message by running:
   ```bash
   git commit
   ```
   Write a descriptive commit message like:
   ```text
   Initial commit: Add welcome.txt with laboratory instructions
   ```
   Save and close Notepad++.

8. **Check Git Status (Clean state):**
   ```bash
   git status
   ```
   *Expected Output:*
   ```text
   On branch master
   nothing to commit, working tree clean
   ```

---

### Step 4: Connecting to Remote Repository

1. **Create Remote Repository:**
   Log into GitLab or GitHub and create a blank project/repository named `GitDemo`.

2. **Link Local Repo to Remote:**
   ```bash
   git remote add origin https://github.com/your-username/GitDemo.git
   ```

3. **Pull Remote Repository (Sync):**
   ```bash
   git pull origin master
   ```

4. **Push Local Commits to Remote:**
   ```bash
   git push -u origin master
   ```
