import './plugin-app.scss';
import React from 'react';
import { CustomBlockClient } from '@qualtrics/custom-block-client';
import { HelpIcon, SurveyIcon } from '@qualtrics/ui-react/icons';

type PluginAppProps = {
  client: CustomBlockClient
};

export function PluginApp(props: PluginAppProps) {

  const surveyLink = props.client['pluginClientInstance']['channel']['otherOrigin'] + '/portals/ui/PLUG_e736d7a7-58b5-4850-aeef-d10d99b81a07/app/extensions/eua/PLUG_e1955cb3-416c-48b9-ba46-34fa8555f32b';
  const helpLink = props.client['pluginClientInstance']['channel']['otherOrigin'] + '/portals/ui/PLUG_e736d7a7-58b5-4850-aeef-d10d99b81a07/app/extensions/eua/PLUG_9276b8b7-312b-42a1-8aac-7441810df395';

  return (
    <div className="plugin-app">
      <div className='title-section'>
        {/* this translation was added to /public/translations.EN.json */}
        {props.client.getText('title')}
      </div>
      <div className='panels-section'>
        <a href={surveyLink} target='_top'>
          <div className='panel-border panel-left'>
            <div className='panel'>
              <div className='panel-text'>
                Survey<br />Management
              </div>
              <div className='panel-icon'>
                <SurveyIcon size='large'/>
              </div>

            </div>
          </div>
        </a>
        <a href={helpLink} target='_top'>
          <div className='panel-border panel-right'>
            <div className='panel'>
              <div className='panel-text'>
                Help<br />&<br />Support
              </div>
              <div className='panel-icon'>
                <HelpIcon size='large'/>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
