# Author: Ryan Rasti

# System Requirements
1. Java 1.8 is installed, and the JAVA_HOME variable is on the system PATH
2. Chromedriver 2.35 is downloaded and is accessible on the system PATH

# Running the scenario
1. cd SeleniumWikipediaSearch\src
2. Using your favorite tool to execute java code, run the SeleniumTest.java code, which contains the entrypoint

# Notes
1. Investigate maven (no experience with this yet)
2. Should I package this up before distributing? I guess it depends on how the end-user will be invoking this
3. Investigate integration with JUnit. Right now this is using vanilla Java
4. Look into refactoring code to use the bundled chromedriver.exe in the lib directory, instead of hoping the user added it to the PATH

