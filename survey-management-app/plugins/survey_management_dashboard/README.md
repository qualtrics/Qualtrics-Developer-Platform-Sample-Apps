# Survey Management Dashboard

This is a `custom_block` plugin type. Custom block plugins can render in multiple locations across the product. The location is controlled by the `config.json` `tag` property. Since we selected the `globalExtensions` template when creating the plugin, nothing needs to be changed here.

## Steps to configure this custom block

1. Since this is also a custom block plugin, we can re-use code from other custom block plugins to get started. Since this custom block will also the survey API, I can copy over the `src` directory from `survey_management_tab/src` to get a head start on developing this plugin.

2. Download the plugin dependencies

``` sh
npm i
```

3. Build the plugin. Qualtrics will only render the code you upload.

``` sh
npm start
```

4. Add any extra translations to the `/public/translations/EN.json` file.
