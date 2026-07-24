# Git Hands-On Lab 3: Branching & Merging

## Objectives
- Understand branching and merging concepts in Git.
- Create, list, switch, and delete branches.
- Inspect differences between branches (using terminal diff and visual diff tools).
- Merge branch modifications into the main branch (`master`/`main`).
- Review the commit history graph after merging.

---

## Step-by-Step Implementation

### Step 1: Create and Switch to a New Branch

1. **Create the branch `GitNewBranch`:**
   ```bash
   git branch GitNewBranch
   ```

2. **List all local and remote branches:**
   Check the available branches and find which one is current (indicated by the `*` symbol):
   ```bash
   git branch -a
   ```
   *Expected Output:*
   ```text
   * master
     GitNewBranch
   ```

3. **Switch to the new branch:**
   ```bash
   git checkout GitNewBranch
   ```
   *Expected Output:*
   ```text
   Switched to branch 'GitNewBranch'
   ```
   *Alternatively, in modern Git, you can use: `git switch GitNewBranch`*

---

### Step 2: Make Changes and Commit on the Branch

1. **Create a new file `feature_file.txt`:**
   ```bash
   echo "This is a feature file created in GitNewBranch." > feature_file.txt
   ```

2. **Stage and commit the changes:**
   ```bash
   git add feature_file.txt
   git commit -m "Add feature_file.txt to GitNewBranch"
   ```

3. **Verify the branch status:**
   ```bash
   git status
   ```
   *Expected Output:*
   ```text
   On branch GitNewBranch
   nothing to commit, working tree clean
   ```

---

### Step 3: Switch back to Master and Inspect Differences

1. **Switch back to the master branch:**
   ```bash
   git checkout master
   ```

2. **Inspect CLI differences between master and GitNewBranch:**
   ```bash
   git diff master GitNewBranch
   ```
   *Expected Output snippet:*
   ```diff
   diff --git a/feature_file.txt b/feature_file.txt
   new file mode 100644
   index 0000000..c312781
   --- /dev/null
   +++ b/feature_file.txt
   @@ -0,0 +1,2 @@
   +This is a feature file created in GitNewBranch.
   +It contains the experimental code and logs to be merged into master.
   ```

3. **Inspect visual differences using visual diff tool (P4Merge):**
   ```bash
   git difftool master GitNewBranch
   ```
   *Note:* Ensure that P4Merge is installed and configured as the default git diff tool.

---

### Step 4: Merge Branch and View Commit History

1. **Merge `GitNewBranch` into `master`:**
   ```bash
   git merge GitNewBranch
   ```
   *Expected Output:*
   ```text
   Updating a2b3c4d..e5f6g7h
   Fast-forward
    feature_file.txt | 2 ++
    1 file changed, 2 insertions(+)
    create mode 100644 feature_file.txt
   ```

2. **Observe Git commit log as a decorated graph:**
   ```bash
   git log --oneline --graph --decorate
   ```
   *Expected Output snippet:*
   ```text
   * e5f6g7h (HEAD -> master, origin/master, GitNewBranch) Add feature_file.txt to GitNewBranch
   * a2b3c4d Initial commit: Add welcome.txt with laboratory instructions
   ```

---

### Step 5: Clean Up Branch

1. **Delete the merged branch:**
   Since the branch's commits have been successfully integrated into `master`, it is safe to delete it:
   ```bash
   git branch -d GitNewBranch
   ```
   *Expected Output:*
   ```text
   Deleted branch GitNewBranch (was e5f6g7h).
   ```

2. **Confirm final status:**
   ```bash
   git status
   ```
   *Expected Output:*
   ```text
   On branch master
   nothing to commit, working tree clean
   ```
