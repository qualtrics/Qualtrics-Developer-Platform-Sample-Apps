# Survey Management Definiton

This is a `purpose_built_app` plugin type. Purpose built app plugins can display a set of custom block plugins on an isolated app inside of Qualtrics.

## Steps to configure the app

1. Update the `/public/translations/EN.json` name to match the name we want to be displayed inside of Qualtrics. For this example, we will use "Survey Management".

2. Enumerate the `tabs` you would like to display inside of the `config.json`. [Documentation](https://developer.qualtrics.com/developer/portal/documentation/purpose-built-app-deep-dive#step-2-add-tabs-to-your-purpose-built-app-plugin). For this example we will add custom block tabs for the "Home Page", "Survey Management", and "Help and Support" tabs. The plugin ids come from the `config.json` files for each of the purpose built app custom block plugins inside this project

``` json
{
    "tabs": [
        {
            "type": "endUserAppTabPlugin",
            "pluginId": "PLUG_cfaa38f7-f95f-45f2-8e29-0c837237f6b6",
            "iconName": "HomeIcon"
        },
        {
            "type": "endUserAppTabPlugin",
            "pluginId": "PLUG_e1955cb3-416c-48b9-ba46-34fa8555f32b",
            "iconName": "DashboardIcon"
        },
        {
            "type": "endUserAppTabPlugin",
            "pluginId": "PLUG_9276b8b7-312b-42a1-8aac-7441810df395",
            "iconName": "HelpIcon"
        },
    ]
}

```
