# Git Hands-On Lab 5: Remote Operations & Synchronization

## Objectives
- Explain how to clean up the local repository workspace.
- Pull updates from the remote repository to synchronize changes.
- Push pending local commits back to the remote Git server (e.g. GitLab/GitHub).
- Verify synchronization on the remote host interface.

---

## Step-by-Step Implementation

### Step 1: Verify Clean Working Directory

Before executing remote synchronization, ensure that the workspace contains no uncommitted modifications:
```bash
git status
```
*Expected Output:*
```text
On branch master
nothing to commit, working tree clean
```

---

### Step 2: List Local and Remote Branches

List all branches available locally and those tracked on the remote server:
```bash
git branch -a
```
*Expected Output snippet:*
```text
* master
  remotes/origin/master
```

---

### Step 3: Pull Changes from Remote Server

Synchronize your local repository branch with any changes that might have occurred on the remote branch:
```bash
git pull origin master
```
*Expected Output (if already up-to-date):*
```text
From https://github.com/your-username/GitDemo
 * branch            master     -> FETCH_HEAD
Already up to date.
```

---

### Step 4: Push Local Commits to Remote Repository

Push the commits from the local master branch (including the conflict resolution commits from Lab 4) to the remote repository:
```bash
git push origin master
```
*Expected Output:*
```text
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (6/6), 680 bytes | 680.00 KiB/s, done.
Total 6 (delta 1), reused 0 (delta 0), pack-reused 0
To https://github.com/your-username/GitDemo.git
   a2b3c4d..e5f6g7h  master -> master
```

---

### Step 5: Verify in GitHub/GitLab UI

1. Open your browser and navigate to the repository on GitHub/GitLab.
2. Confirm the presence of files:
   - `welcome.txt`
   - `.gitignore` (with log ignore and orig ignore patterns)
   - `hello.xml` (with resolved conflict text)
3. Check the repository's commit history graph online to verify that the branches merged successfully.
