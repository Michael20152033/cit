bower install
npm install

curl --user $UserName:$UserPass https://api.bitbucket.org/1.0/repositories/ \
--data is_private=true --data name=$RepoName

git init
git remote add origin https://${UserName}@bitbucket.org/${UserName}/${RepoName}.git
git add --all
git commit -m 'start'
git push origin master
gulp

```