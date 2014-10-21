cucumber_webdriverIO
====================

 A brief sample with Cucumber features, support and step definitions using WebdriverJS (now WebdriverIO). 
 
 Pre-Requisite: 
 ====================
 
 NodeJS
 Node_modules: 
  WebdriverIO(earlier WebdriverJS)
  assert
  CucumberJS
  
 Cucumber:
 ====================
 
 A Behavior Driven tool to describe requirements in the form of scenarios inside feature files.
 Each feature file consists of scenarios/scenario outlines to describe requirements in an elaborate form.
 E.g. : 
 
 Sample feature file: cukesample.feature
 Sample Scenario: 
 
 Feature: Verify user actions on webpage 
 
 Scenario: Webpage to be used is google.com
 Given User navigates to "google.com"
 When User is on the homepage verify the title "Google"
 Then User enters some text in the textfied "q"

These sceanrios and scenario outlines are extended into step_defintions and support --> pages.js
 More info on cucumber can be found on "http://cukes.info/". 
 
 WebdriverIO: A JS implemention of Selenium-WebdriverJS. WebdriverIO can be configured to run tests on both mobile 
 and web applications. WebdriverIO has necessary support for Cloud Platforms like Saucelabs, Browserstack and TestingBot.
 Refer "http://webdriver.io/" for available actions, properties, utilities etc.
 
 The committed code is a sample feature file written using Cucumber Gherkin with step_defs and support created using
 Javascript functions and objects.
 
