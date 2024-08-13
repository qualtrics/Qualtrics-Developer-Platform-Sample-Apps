import './plugin-app.scss';
import React, { useEffect, useState } from 'react';
import { CustomBlockClient } from '@qualtrics/custom-block-client';
import { SurveyTable } from './survey-table';
import { ErrorText, LoadingSpinner } from '@qualtrics/ui-react';

type PluginAppProps = {
  client: CustomBlockClient
};

export type Survey = {
  id: string,
  name: string,
  ownerId: string,
  lastModified: Date,
  creationDate: Date,
  isActive: boolean,
}

export type SurveyResponse = {
  result?: {
    elements?: Survey[]
  }
}

export function PluginApp(props: PluginAppProps) {
  const [ surveys, setSurveys ] = useState<Survey[]>([]);
  const [ isLoadingSurveys, setIsLoadingSurveys ] = useState(true);
  const [ getSurveyError, setGetSurveyError ] = useState<string>('');

  useEffect(() => {

    props.client.qualtricsApiFetch('/surveys', {
      method: 'GET',
    }).then((response) => {
      setIsLoadingSurveys(false);
      if(response.status === 200) {
        setSurveys((response.responseData as SurveyResponse)?.result?.elements || []);
      } else {
        setGetSurveyError('error getting survey');
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="plugin-app">
      <div className='plugin-title'>
        Survey Status Dashboard
      </div>
      {isLoadingSurveys ?
        <LoadingSpinner show /> :
        <SurveyTable
          surveys={surveys}
          baseUrl={props.client['pluginClientInstance']['channel']['otherOrigin']}
        />
      }
      {getSurveyError !== '' && (
        <div className="error-message">
          <ErrorText>{getSurveyError}</ErrorText>
        </div>
      )}
    </div>
  );
}
