# Help and Support Tab

This is a `custom_block` plugin type. Custom block plugins can render in multiple locations across the product. The location is controlled by the `config.json` `tag` property. Since we selected the `purpose_built_app_tab` template when creating the plugin, nothing needs to be changed here.

## Steps to configure the purpose built app tab

1. Update the `/public/translations/EN.json` name to match the name we want to be displayed inside of Qualtrics. For this example, we will use "Help and Support".

2. Set the `attachmentPoint` you would like to display inside of the `config.json`. [Documentation](https://developer.qualtrics.com/developer/portal/documentation/purpose-built-app-deep-dive#step-2-add-tabs-to-your-purpose-built-app-plugin). For this example we will attach the plugin to this app so `purpose_built_app` plugin definitions in this app can reference it. The appId comes from the `manifest.json` file at the root of the extension.

``` json
{
    "attachmentPoints": [
      {
        "appId": "EXT_eb2482df-da4b-47eb-9fd3-5188df4cdf18"
      }
    ]
}
```

3. Download the plugin dependencies

``` sh
npm i
```

4. Build the plugin. Qualtrics will only render the code you upload.

``` sh
npm start
```

5. Add any extra translations to the `/public/translations/EN.json` file.