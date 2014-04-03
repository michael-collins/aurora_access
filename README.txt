Run the following commands:

#If there is no .rvmrc file
rvm --create --rvmrc ruby-2.1.1@theme_name

# Make sure this path has been added to ~/.bash_profile
### PATH=$PATH:$HOME/.rvm/bin # Add RVM to PATH for scripting

#Install the Grunt plugins. You might have to run these commands as sudo.
npm install -g bower
npm install -g grunt-cli
npm install -g phantomjs
npm install -g casperjs
npm install -g grunt-casperjs

#Install Bower
bower install

#Install Ruby Gems with Bundler
bundle install

#Install Node project
npm install

#Run Grunt
grunt watch
grunt build
