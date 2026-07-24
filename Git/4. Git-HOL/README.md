# Git Hands-On Lab 4: Resolving Merge Conflicts

## Objectives
- Understand how merge conflicts arise when the same file is modified differently in two merging branches.
- Learn conflict markers in Git.
- Configure and use 3-way merge tools (e.g. P4Merge, VS Code, etc.) to resolve conflicts.
- Configure `.gitignore` to handle backup files (e.g., `*.orig`) created during resolution.

---

## Step-by-Step Implementation

### Step 1: Create a Clean State and New Branch

1. **Verify master is in a clean state:**
   ```bash
   git checkout master
   git status
   ```

2. **Create and switch to `GitWork` branch:**
   ```bash
   git checkout -b GitWork
   ```

3. **Add `hello.xml` inside `GitWork` branch:**
   Create `hello.xml` with this content:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <greeting>
       <message>Hello from GitWork branch</message>
   </greeting>
   ```

4. **Stage and commit the changes:**
   ```bash
   git add hello.xml
   git commit -m "Add hello.xml to GitWork branch"
   ```

---

### Step 2: Create a Conflicting Commit on Master

1. **Switch back to the master branch:**
   ```bash
   git checkout master
   ```

2. **Add `hello.xml` in master with different content:**
   Create `hello.xml` with this content:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <greeting>
       <message>Hello from master branch</message>
   </greeting>
   ```

3. **Stage and commit the changes:**
   ```bash
   git add hello.xml
   git commit -m "Add hello.xml with master contents"
   ```

---

### Step 3: Trigger Conflict by Merging

1. **Observe conflict paths using log graph:**
   ```bash
   git log --oneline --graph --decorate --all
   ```

2. **Run diff to see conflict beforehand:**
   ```bash
   git diff master GitWork
   ```

3. **Merge `GitWork` into `master`:**
   ```bash
   git merge GitWork
   ```
   *Expected Output:*
   ```text
   Auto-merging hello.xml
   CONFLICT (content): Merge conflict in hello.xml
   Automatic merge failed; fix conflicts and then commit the result.
   ```

---

### Step 4: Examine Conflict Markup and Resolve

1. **Check the conflicted file markup in `hello.xml`:**
   Open the file, and you will see the git markup separators:
   ```xml
   <<<<<<< HEAD
       <message>Hello from master branch</message>
   =======
       <message>Hello from GitWork branch</message>
   >>>>>>> GitWork
   ```

2. **Resolve the conflict using a 3-way merge tool:**
   Launch the configured merge tool:
   ```bash
   git mergetool
   ```
   *Note:* In the merge tool interface (e.g. P4Merge), pick the desired modifications (or write a unified message). Let's resolve `hello.xml` to look like this:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <greeting>
       <message>Hello from master branch and GitWork branch (Resolved Conflict)</message>
   </greeting>
   ```

3. **Confirm git status after resolution:**
   ```bash
   git status
   ```
   *Expected Output snippet:*
   ```text
   All conflicts fixed but you are still merging.
     (use "git commit" to conclude merge)

   Changes to be committed:
        modified:   hello.xml

   Untracked files:
        hello.xml.orig
   ```

---

### Step 5: Ignore Backup Files and Complete Merge

1. **Ignore the `.orig` backup files:**
   Since the merge tool creates `hello.xml.orig` as a backup, we should add `*.orig` to `.gitignore`:
   ```bash
   echo "*.orig" >> .gitignore
   ```

2. **Stage and commit the ignore file and the resolved XML:**
   ```bash
   git add .gitignore
   git add hello.xml
   git commit -m "Resolve merge conflict in hello.xml and update .gitignore"
   ```

3. **Verify the commit graph:**
   ```bash
   git log --oneline --graph --decorate
   ```

---

### Step 6: Delete the Branched Workspace

1. **List all branches:**
   ```bash
   git branch -a
   ```

2. **Delete the merged branch:**
   ```bash
   git branch -d GitWork
   ```

3. **Verify final state:**
   ```bash
   git status
   ```
   *Expected Output:*
   ```text
   On branch master
   nothing to commit, working tree clean
   ```
