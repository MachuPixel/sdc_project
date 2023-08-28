# sdc_project

## Begin
### Clone the Repository
```
git clone [url]
```
### Update Branches
Update the master, staging and/or feature branches to latest version(s)/
```
git checkout main
```
```
git pull
```
to keep the fork synchronized with the repo
### Create a Feature Branch
```
git checkout -b [name of branch]
```
to create a “feature” brance to keep it away from the main branch, which keeps the work isolated and organized. short descriptive name prefixed with initials (eg. tjk_branch_name)
### Make Changes
Make and test your changes on the feature branch. Use the following commands to stage and commit your changes:
```
git add .
```
```
git commit -m “insert your DESCRIPTIVE comment here”
```
Test Run full test suite locally
Commit with descriptive name
### Update Branch with Main:
Periodically, pull the lastest changes from the main branch into your feature branch to stay updated
```
git checkout [name of branch]
```
```
git merge main
```
### Push changes
(if there is a conflict see section on merge conflict)
push to remote branch !!! NEVER PUSH TO MAIN, only push to your branch !!!
```
git push -u origin [name of branch]
```
###  Pull Request
Open pull request into a staging or feature branch Longer descriptive title of taskBef Bullet points with descriptions of changes (changelog)
Merge Conflict
Before every merge, at least one group member other than the one who made the pull request should review the pull request. Once approved, the changes can be merged into the main branch of the organization repository.
