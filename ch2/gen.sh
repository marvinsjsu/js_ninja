#!/bin/sh
# Check out a fresh copy of jQuery
git clone git://github.com/jQuery/jquery.git $1
# Copy the dummy test case file in
cp $2.html $1/index.html
#cd into directory and install grunt-cli globally
cd $1 && npm install -g grunt-cli
#auto install all of jQuery's npm dependancies
npm install
#before build must manually install 1 dependency "jshint" - this was not install with the above
#command and will fail to build if its not included
npm install jshint
#now ready to build jQuery
grunt
#after build move server.js into test folder
mv ../server.js ./
#run node server
node server.js 
