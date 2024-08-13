// Webpack ingested imports
import '@qualtrics/base-styles/dist/base-styles.css';

// External (npm) dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';

import { CustomBlockClient } from '@qualtrics/custom-block-client';

import { PluginUIProvider, languageCodeAdapter } from '@qualtrics/plugin-ui-react';
import pluginUITranslations from '@qualtrics/plugin-ui-react-translations';

// Internal dependencies
import { PluginApp } from './plugin-app/plugin-app';

const container = document.getElementById('app-root');
const root = createRoot(container);

(async () => {
  try {
    const customBlockClient = await CustomBlockClient.initialize();
    renderPlugin(customBlockClient);
  } catch(error) {
    console.error(error);
    root.render(<div>{error}</div>);
  }
})();

function renderPlugin(customBlockClient: CustomBlockClient) {
  let languageCode: string;
  const context = customBlockClient.getContext();
  languageCode = (pluginUITranslations[context.language] !== undefined)
    ? context.language
    : languageCodeAdapter(context.language)
  ;
  const i18nConfig = {
    localizedText: pluginUITranslations[languageCode],
  };

  const Index = () => {
    return (
      <PluginUIProvider config={i18nConfig}>
        <PluginApp client={customBlockClient} />
      </PluginUIProvider>
    );
  };

  root.render(<Index/>);
}
