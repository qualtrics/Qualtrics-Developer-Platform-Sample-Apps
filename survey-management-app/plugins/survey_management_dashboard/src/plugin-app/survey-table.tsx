import React, { useState } from 'react';
import { Survey } from './plugin-app';
import { AdvancedTable } from '@qualtrics/ui-react/next';
import { HyperlinkIcon } from '@qualtrics/ui-react/icons';
import { Button, ErrorText, LoadingSpinner } from '@qualtrics/ui-react';
import { GetSurveyResponses, SurveyResponses } from '../survey-response';
import { CustomBlockClient } from '@qualtrics/custom-block-client';

type SurveyTableProps = {
    surveys: Survey[]
    baseUrl: string
    client: CustomBlockClient
};

export function SurveyTable(props: SurveyTableProps) {
  const [ selectedSurvey, setSelectedSurvey ] = useState<Survey>();
  const [ getResponseError, setGetResponseError ] = useState('');
  const [ getResponseData, setGetResponseData ] = useState<SurveyResponses>();
  const [ isGettingResponses, setIsGettingResponses ] = useState(false);

  const handleGetSurveyResponses = (survey: Survey) => {
    if(isGettingResponses) {
      return;
    }

    setSelectedSurvey(survey);
    setIsGettingResponses(true);
    setGetResponseData(undefined);
    setGetResponseError('');
    GetSurveyResponses(props.client, survey.id).then((response) => {
      setIsGettingResponses(false);
      if(response.error) {
        setGetResponseError(response.error);
      } else {
        setGetResponseData(response.responses);
      }
    });
  };

  const columnConfigs = [
    {
      id: 'name',
      headerLabel: 'Name',
      width: 250,
    },
    {
      id: 'id',
      headerLabel: 'Survey ID',
      width: 250,
    },
    {
      id: 'isActive',
      headerLabel: 'Status',
      renderCellContent: (data: {value: boolean}) => {
        return data.value ? 'Active' : 'Inactive';
      },
      width: 150,
    },
    {
      id: 'lastModified',
      headerLabel: 'Last Modified',
      renderCellContent: (data: {value: Date}) => {
        return data.value.toLocaleString();
      },
      width: 250,
    },
    {
      id: 'link',
      headerLabel: 'Edit Survey',
      renderCellContent: (data: {value: string}) => {
        return (
          <a href={data.value} target='_blank'>
            <HyperlinkIcon/>
          </a>
        );
      },
      width: 150,
    },
    {
      id: 'response',
      headerLabel: 'Get Responses',
      renderCellContent: (data: {value: Survey}) => {
        return (
          <Button
            kind='link'
            onClick={() => handleGetSurveyResponses(data.value)}
            disabled={isGettingResponses}
          >
            View Responses
          </Button>
        );
      },
      width: 150,
    },
  ];

  const rows = props.surveys.map((survey) => {
    return {
      id: survey.id,
      data: {
        name: survey.name,
        id: survey.id,
        isActive: survey.isActive,
        lastModified: survey.lastModified,
        link: `${props.baseUrl}/survey-builder/${survey.id}/edit`,
        response: survey,
      }
    };
  });

  return (
    <div className='survey-table'>
      <AdvancedTable
        columnConfigs={columnConfigs}
        rows={rows}
        disableUserResizableColumns={true}
        disableUserReorderableColumns={true}
        disableUserPinnableColumns={true}
      />
      {selectedSurvey && (
        <div>
          <div className='selected-survey-name'>Survey: {selectedSurvey.name}</div>
          {isGettingResponses && <LoadingSpinner show />}
          {getResponseError !== '' && <ErrorText>{getResponseError}</ErrorText>}
          {getResponseData?.responses && <pre>{JSON.stringify(getResponseData.responses, null, 2)}</pre>}
        </div>
      )}
    </div>
  );
}
