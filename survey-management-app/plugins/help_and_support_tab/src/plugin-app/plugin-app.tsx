import './plugin-app.scss';
import React from 'react';
import { CustomBlockClient } from '@qualtrics/custom-block-client';

type PluginAppProps = {
  client: CustomBlockClient
};

export function PluginApp(props: PluginAppProps) {
  const pluginTitle = props.client.getText('pluginTitle');
  const pluginSubtext = props.client.getText('pluginSubtext');
  const qualtricsDeveloperPlatformDocumentation = props.client.getText('qualtricsDeveloperPlatformDocumentation');
  const qualtricsAPIDocumentation = props.client.getText('qualtricsAPIDocumentation');
  const surveyEditorDocumentation = props.client.getText('surveyEditorDocumentation');
  const frontEndComponentsDocumentation = props.client.getText('frontEndComponentsDocumentation');

  return (
    <div className="plugin-app">
      <div className='plugin-title'>
        {pluginTitle}
      </div>
      <div className='plugin-subtext'>
        {pluginSubtext}
      </div>
      <ul className='plugin-links'>
        <li>
          <a href='https://api.qualtrics.com/docs/getting-started' target='_blank'>
            {qualtricsDeveloperPlatformDocumentation}
          </a>
        </li>
        <li>
          <a href='https://api.qualtrics.com/docs/getting-started' target='_blank'>
            {qualtricsAPIDocumentation}
          </a>
        </li>
        <li>
          <a href='https://designsystem.qualtrics.com/' target='_blank'>
            {frontEndComponentsDocumentation}
          </a>
        </li>
        <li>
          <a href='https://www.qualtrics.com/support/survey-platform/survey-module/survey-module-overview/?parent=p0027' target='_blank'>
            {surveyEditorDocumentation}
          </a>
        </li>
      </ul>
    </div>
  )
}
