# Survey Management App

This is a survey management app built using [Qualtrics Developer Platform](https://developer.qualtrics.com/).

## Requirements

1. A Qualtrics account
2. xmt cli installed on your machine ([reference](#install-xmt))

## Cloning this project with xmt

This project can be cloned using xmt so you can start working on it right away.

``` sh
# login to xmt
xmt init

# download this project
xmt clone extension
```

## How this project was scaffolded using the xmt cli

This is the series of commands used to create this extension and all of its resources. This can be skipped by [cloning](#cloning-this-project-with-xmt) this project directly, but it's here for reference.

``` sh
# Login
xmt init

# Create the extension
xmt create extension -n "Survey Management App"
cd survey_management_app

# Create purpose built app plugin
xmt create plugin -t purpose_built_app -n "Survey Management Definition"

✔ Internal Purpose Built App
✔ No thanks

# Create custom block plugin to attach to purpose built app plugin
xmt create plugin -t custom_block -n "Home Page Tab"

✔ Purpose Built Apps Tab
✔ No thanks

# Create custom block plugin to attach to purpose built app plugin
xmt create plugin -t custom_block -n "Survey Management Tab"

✔ Purpose Built Apps Tab
✔ No thanks

# Create custom block plugin to attach to purpose built app plugin
xmt create plugin -t custom_block -n "Help and Support Tab"

✔ Purpose Built Apps Tab
✔ No thanks

# Create custom block plugin to host content on the global extensions page
xmt create plugin -t custom_block -n "Survey Management Dashboard"

✔ Global Navigation
✔ No thanks
```

## How to develop and test this app

1. Clone this extension.

``` sh
xmt clone extension -l "https://pdx1.qualtrics.com/static/developer-platform/open-source-extensions/survey_management_app.zip"
```

1. At the root of the extension run `xmt develop extension` to submit a prerelease version and sync all changes in real time. This command should always be running

2. Share this extension with your Qualtrics organization. Developer users are not connected to an organization, so for your organization to have access to your extension, you must share it. `xmt create share -o {organization name} -u` will always share the latest version with your organization.

3. In another terminal (seperate from `xmt develop extension`) run the build command for your plugin: `npm start` this will generate build code that will get synced to Qualtrics with the `xmt develop extension` command.

## Resources

### Documentation

[https://developer.qualtrics.com/developer/portal/documentation](https://developer.qualtrics.com/developer/portal/documentation)

### Install XMT

Option 1: Install with npm

``` sh
npm i -g @qualtrics/xmt-cli
```

Option 2: Install via [direct download](https://developer.qualtrics.com/developer/portal/documentation/1100f86b0e32a-troubleshooting-guide#solution-install-via-direct-download)
